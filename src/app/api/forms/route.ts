import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import {
  buildFormEmailHtml,
  buildFormEmailText,
  getFormRecipient,
  getFormSubject,
  type FormType,
} from "@/lib/form-mail";

type JsonFormRequestBody = {
  formType: FormType;
  payload: Record<string, string>;
};

function isFormType(value: string): value is FormType {
  return value === "contact" || value === "lead" || value === "quote";
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let formType: FormType | undefined;
    let payload: Record<string, string> | undefined;
    let attachments:
      | Array<{ content: string; filename: string; type?: string }>
      | undefined;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const rawType = formData.get("formType");

      if (typeof rawType !== "string" || !isFormType(rawType)) {
        return NextResponse.json({ error: "Invalid form type." }, { status: 400 });
      }

      formType = rawType;
      payload = {};

      for (const [key, value] of formData.entries()) {
        if (key === "formType" || key === "file") continue;
        if (typeof value === "string") payload[key] = value;
      }

      const file = formData.get("file");
      if (file instanceof File && file.size > 0) {
        if (file.size > 5 * 1024 * 1024) {
          return NextResponse.json(
            { error: "Please upload a file smaller than 5MB." },
            { status: 400 },
          );
        }

        const bytes = await file.arrayBuffer();
        attachments = [
          {
            content: Buffer.from(bytes).toString("base64"),
            filename: file.name,
            type: file.type || undefined,
          },
        ];
        payload.uploadedFile = file.name;
      }
    } else {
      const body = (await request.json()) as JsonFormRequestBody;
      if (!body?.formType || !body?.payload || typeof body.payload !== "object") {
        return NextResponse.json({ error: "Invalid form request." }, { status: 400 });
      }
      formType = body.formType;
      payload = body.payload;
    }

    if (!formType || !payload) {
      return NextResponse.json({ error: "Invalid form request." }, { status: 400 });
    }

    const recipient = getFormRecipient(formType);
    const senderReplyEmail = payload.email?.trim();
    const subject = getFormSubject(formType, payload);
    const html = buildFormEmailHtml(formType, payload);
    const text = buildFormEmailText(formType, payload);

    const smtpHost = process.env.SMTP_HOST?.trim();
    const smtpPort = Number(process.env.SMTP_PORT || "587");
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.trim();
    const smtpFrom =
      process.env.SMTP_FROM_EMAIL?.trim() ||
      (smtpUser ? `The Cereal Boxes <${smtpUser}>` : undefined);

    if (smtpHost && smtpUser && smtpPass && smtpFrom) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: smtpFrom,
        to: recipient,
        subject,
        html,
        text,
        replyTo: senderReplyEmail || undefined,
        attachments: attachments?.map((file) => ({
          filename: file.filename,
          content: file.content,
          encoding: "base64",
          contentType: file.type,
        })),
      });

      return NextResponse.json({ success: true, provider: "smtp" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "The Cereal Boxes <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured yet. Add SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS or configure RESEND_API_KEY.",
        },
        { status: 500 },
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "thecerealboxes-forms/1.0",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [recipient],
        subject,
        html,
        text,
        reply_to: senderReplyEmail ? [senderReplyEmail] : undefined,
        attachments,
      }),
    });

    const resendData = (await resendResponse.json().catch(() => null)) as
      | { message?: string }
      | null;

    if (!resendResponse.ok) {
      return NextResponse.json(
        {
          error: resendData?.message || "We could not send your request email right now.",
        },
        { status: resendResponse.status },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unexpected error while sending your request." },
      { status: 500 },
    );
  }
}
