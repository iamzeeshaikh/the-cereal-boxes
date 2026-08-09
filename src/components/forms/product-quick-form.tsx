"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, Paperclip } from "lucide-react";

import { submitFormRequest } from "@/lib/form-client";

const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;

/**
 * Short enquiry form shown on product pages: the five fields a customer can
 * fill in under a minute, with optional artwork attached to the same email.
 */
export function ProductQuickForm({
  productName,
  title = "Get a Fast Packaging Quote",
  className = "surface-card p-6 sm:p-8",
}: {
  productName: string;
  title?: string;
  className?: string;
}) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [artwork, setArtwork] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (artwork && artwork.size > MAX_UPLOAD_BYTES) {
      setError("Please upload a file smaller than 5MB, or email larger artwork to us directly.");
      return;
    }

    setIsSubmitting(true);
    const data = new FormData();
    data.set("name", form.name);
    data.set("email", form.email);
    data.set("phone", form.phone);
    data.set("product", productName);
    data.set("message", form.message);
    if (artwork) data.set("file", artwork);

    try {
      await submitFormRequest("lead", data);
      router.push("/thank-you/?form=product");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to submit your request right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
        Quick Inquiry
      </p>
      {/* h2, not h3: on content pages this form is the first section under the
          page h1, and an h3 there skips a level. */}
      <h2 className="mt-3 font-display text-2xl text-[var(--color-ink)] sm:text-3xl">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        Tell us about {productName}
        {" — "}we&apos;ll come back with pricing within 24 hours.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <input
          className="input-shell"
          placeholder="Name"
          autoComplete="name"
          value={form.name}
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          required
        />
        <input
          className="input-shell"
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={form.email}
          onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          required
        />
      </div>

      <input
        className="input-shell mt-3"
        type="tel"
        placeholder="Phone"
        autoComplete="tel"
        value={form.phone}
        onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
      />

      <textarea
        className="input-shell mt-3 min-h-28 resize-y"
        placeholder="Message / instructions — size, quantity, material, deadline"
        value={form.message}
        onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
      />

      <label className="mt-3 flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-[rgba(21,36,58,0.2)] bg-white px-4 py-3.5 text-sm transition hover:border-[var(--color-accent)]">
        <input
          type="file"
          className="sr-only"
          accept=".pdf,.ai,.eps,.psd,.png,.jpg,.jpeg,.svg,.zip"
          onChange={(event) => setArtwork(event.target.files?.[0] ?? null)}
        />
        <Paperclip className="h-4 w-4 flex-none text-[var(--color-accent)]" aria-hidden />
        <span className="min-w-0 truncate text-[var(--color-ink)]">
          {artwork ? artwork.name : "Upload artwork (optional) — PDF, AI, EPS, PSD, PNG, JPG"}
        </span>
      </label>

      {error ? <p className="mt-3 text-sm text-[var(--color-accent)]">{error}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(232,96,58,0.24)] transition hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
        {isSubmitting ? "Sending…" : "Get Custom Quote"}
      </button>
    </form>
  );
}
