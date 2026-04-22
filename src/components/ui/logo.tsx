import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  href?: string;
  theme?: "light" | "dark";
  compact?: boolean;
  className?: string;
};

export function Logo({
  href = "/",
  theme = "light",
  compact = false,
  className,
}: LogoProps) {
  const dark = theme === "dark";

  return (
    <Link
      href={href}
      aria-label="The Cereal Boxes home"
      className={cn("inline-flex items-center gap-3.5", className)}
    >
      <div
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-full border shadow-[0_8px_20px_rgba(21,36,58,0.08)]",
          compact ? "h-10 w-10" : "h-12 w-12",
          dark
            ? "border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))]"
            : "border-[rgba(230,187,69,0.38)] bg-[linear-gradient(180deg,#fff7da,#f4d978)]",
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.65),transparent_48%)]" />
        <span
          className={cn(
            "relative font-display font-semibold leading-none tracking-[-0.04em]",
            compact ? "text-lg" : "text-[1.45rem]",
            dark ? "text-white" : "text-[var(--color-ink)]",
          )}
        >
          CB
        </span>
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-body text-[0.62rem] font-semibold uppercase tracking-[0.28em]",
            dark ? "text-white/68" : "text-[var(--color-muted)]",
          )}
        >
          Premium Packaging
        </span>
        <span
          className={cn(
            "font-display text-[1.28rem] font-semibold tracking-[-0.03em]",
            compact && "text-[1.06rem]",
            dark ? "text-white" : "text-[var(--color-ink)]",
          )}
        >
          The Cereal Boxes
        </span>
      </div>
    </Link>
  );
}
