import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

type CheckListProps = {
  items: string[];
  /** "plain" for a simple icon + text row, "card" for boxed list items. */
  variant?: "plain" | "card";
  icon?: LucideIcon;
  className?: string;
  itemClassName?: string;
};

/**
 * Bullet list where every point carries a tick icon — used for the benefit
 * lists that would otherwise render as unmarked text.
 */
export function CheckList({
  items,
  variant = "plain",
  icon: Icon = Check,
  className,
  itemClassName,
}: CheckListProps) {
  return (
    <ul className={cn(variant === "card" ? "grid gap-3 sm:grid-cols-2" : "grid gap-3", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-start gap-3 text-sm leading-7 text-[var(--color-ink)]",
            variant === "card" &&
              "rounded-[20px] border border-[rgba(21,36,58,0.08)] bg-white px-4 py-4",
            itemClassName,
          )}
        >
          <span
            aria-hidden
            className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--color-accent)]/12 text-[var(--color-accent)]"
          >
            <Icon className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}
