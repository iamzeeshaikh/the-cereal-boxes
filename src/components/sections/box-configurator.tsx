"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Loader2, MessageSquare, Phone, Upload } from "lucide-react";

import { Container } from "@/components/ui/container";
import { submitFormRequest } from "@/lib/form-client";
import { cn } from "@/lib/utils";

export type ConfigOption = {
  id: string;
  label: string;
  hint?: string;
  /** Per-unit price adjustment in dollars. */
  price?: number;
};

export type ConfiguratorConfig = {
  sizes: ConfigOption[];
  materials: ConfigOption[];
  printing: ConfigOption[];
  finishes: ConfigOption[];
  quantities: number[];
  addOns: ConfigOption[];
  /** Trust points listed under the estimate. */
  assurances: string[];
  phone: string;
  /** Where the "Talk to an expert" button points. */
  contactHref?: string;
};

type Props = {
  productName: string;
  config: ConfiguratorConfig;
  /** Anchor id so page CTAs can scroll here. */
  id?: string;
};

const QTY_SCALE: Array<[number, number]> = [
  [10000, 0.82],
  [5000, 1.0],
  [2500, 1.28],
  [1000, 1.65],
  [500, 2.1],
  [250, 2.75],
  [100, 3.4],
  [1, 4.2],
];

const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;

function priceOf(options: ConfigOption[], ids: Iterable<string>) {
  let total = 0;
  for (const id of ids) total += options.find((option) => option.id === id)?.price ?? 0;
  return total;
}

function labelsOf(options: ConfigOption[], ids: Iterable<string>) {
  const labels = [...ids].map((id) => options.find((option) => option.id === id)?.label ?? id);
  return labels.length ? labels.join(", ") : "";
}

export function BoxConfigurator({ productName, config, id = "configurator" }: Props) {
  const router = useRouter();

  const [size, setSize] = useState("");
  const [customDims, setCustomDims] = useState({ length: "", width: "", height: "", unit: "in" });
  const [material, setMaterial] = useState("");
  const [printing, setPrinting] = useState<string[]>([]);
  const [finishes, setFinishes] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(0);
  const [customQuantity, setCustomQuantity] = useState("");
  const [addOns, setAddOns] = useState<string[]>([]);
  const [artwork, setArtwork] = useState<File | null>(null);
  const [designHelp, setDesignHelp] = useState(false);
  const [contact, setContact] = useState({ name: "", email: "", phone: "", notes: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [summaryOpen, setSummaryOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // On phones the summary is a fixed bar; show it only while the tool is on screen.
  useEffect(() => {
    const section = sectionRef.current;
    const panel = section?.querySelector<HTMLElement>("[data-summary-panel]");
    if (!section || !panel || !window.matchMedia("(max-width: 1023px)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => panel.setAttribute("data-visible", String(entry.isIntersecting)),
      { rootMargin: "-10% 0px -20% 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const effectiveQuantity = customQuantity ? Number(customQuantity) || 0 : quantity;

  function toggle(list: string[], setList: (next: string[]) => void, value: string) {
    setList(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  }

  const estimate = useMemo(() => {
    if (!material || !effectiveQuantity) return null;
    const base = config.materials.find((option) => option.id === material)?.price ?? 1.2;
    const scale = QTY_SCALE.find(([threshold]) => effectiveQuantity >= threshold)?.[1] ?? 4.2;
    const extras =
      priceOf(config.printing, printing) +
      priceOf(config.finishes, finishes) +
      priceOf(config.addOns, addOns);
    const total = (base + extras) * scale * effectiveQuantity;
    return { low: Math.round(total * 0.88), high: Math.round(total * 1.14) };
  }, [material, effectiveQuantity, printing, finishes, addOns, config]);

  const sizeLabel =
    size === "custom"
      ? customDims.length || customDims.width || customDims.height
        ? `Custom: ${customDims.length || "?"} × ${customDims.width || "?"} × ${customDims.height || "?"} ${customDims.unit}`
        : "Custom size"
      : config.sizes.find((option) => option.id === size)?.label ?? "";

  const selectedCount = [
    sizeLabel,
    material,
    printing.length ? "y" : "",
    finishes.length ? "y" : "",
    effectiveQuantity ? "y" : "",
    addOns.length ? "y" : "",
  ].filter(Boolean).length;

  const summaryRows = [
    { label: "Size", value: sizeLabel },
    { label: "Material", value: labelsOf(config.materials, material ? [material] : []) },
    { label: "Printing", value: labelsOf(config.printing, printing) },
    { label: "Finishes", value: labelsOf(config.finishes, finishes) },
    {
      label: "Quantity",
      value: effectiveQuantity ? `${effectiveQuantity.toLocaleString()} units` : "",
    },
    { label: "Add-ons", value: labelsOf(config.addOns, addOns) },
    { label: "Artwork", value: artwork ? artwork.name : "" },
    { label: "Design support", value: designHelp ? "Requested" : "" },
  ];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (artwork && artwork.size > MAX_UPLOAD_BYTES) {
      setError("Please upload artwork smaller than 5MB, or email larger files to us directly.");
      return;
    }

    setIsSubmitting(true);
    const data = new FormData();
    data.set("name", contact.name);
    data.set("email", contact.email);
    data.set("phone", contact.phone);
    data.set("product", productName);
    data.set("size", sizeLabel || "Not selected");
    data.set("material", labelsOf(config.materials, material ? [material] : []) || "Not selected");
    data.set("printing", labelsOf(config.printing, printing) || "Not selected");
    data.set("finishes", labelsOf(config.finishes, finishes) || "None");
    data.set("quantity", effectiveQuantity ? String(effectiveQuantity) : "Not selected");
    data.set("addOns", labelsOf(config.addOns, addOns) || "None");
    data.set("designSupport", designHelp ? "Yes" : "No");
    data.set(
      "estimatedBudget",
      estimate ? `$${estimate.low.toLocaleString()} – $${estimate.high.toLocaleString()}` : "Pending review",
    );
    data.set("message", contact.notes);
    if (artwork) data.set("file", artwork);

    try {
      await submitFormRequest("quote", data);
      router.push("/thank-you/?form=configurator");
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
    <section id={id} ref={sectionRef} className="scroll-mt-24 py-12 sm:py-16">
      <Container>
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
            Interactive Configurator
          </span>
          <h2 className="mt-3 text-3xl text-[var(--color-ink)] sm:text-4xl">
            Customize Your {productName}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
            Choose your packaging options below and get an instant price estimate with your
            selections. Send it over and our team confirms the final quote within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,340px)] lg:items-start"
        >
          <div className="grid gap-5">
            <Step index={1} title="Select Size">
              <OptionGrid>
                {config.sizes.map((option) => (
                  <OptionButton
                    key={option.id}
                    label={option.label}
                    hint={option.hint}
                    selected={size === option.id}
                    onClick={() => setSize(option.id)}
                  />
                ))}
              </OptionGrid>
              {size === "custom" ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  {(["length", "width", "height"] as const).map((dimension) => (
                    <input
                      key={dimension}
                      className="input-shell"
                      inputMode="decimal"
                      placeholder={dimension[0].toUpperCase() + dimension.slice(1)}
                      value={customDims[dimension]}
                      onChange={(event) =>
                        setCustomDims((current) => ({ ...current, [dimension]: event.target.value }))
                      }
                    />
                  ))}
                  <select
                    className="input-shell"
                    value={customDims.unit}
                    onChange={(event) =>
                      setCustomDims((current) => ({ ...current, unit: event.target.value }))
                    }
                  >
                    <option value="in">inches</option>
                    <option value="cm">cm</option>
                    <option value="mm">mm</option>
                  </select>
                </div>
              ) : null}
            </Step>

            <Step index={2} title="Select Material">
              <OptionGrid>
                {config.materials.map((option) => (
                  <OptionButton
                    key={option.id}
                    label={option.label}
                    hint={option.hint}
                    selected={material === option.id}
                    onClick={() => setMaterial(option.id)}
                  />
                ))}
              </OptionGrid>
            </Step>

            <Step index={3} title="Printing Options" note="Select all that apply">
              <OptionGrid>
                {config.printing.map((option) => (
                  <OptionButton
                    key={option.id}
                    label={option.label}
                    hint={option.hint}
                    selected={printing.includes(option.id)}
                    onClick={() => toggle(printing, setPrinting, option.id)}
                  />
                ))}
              </OptionGrid>
            </Step>

            <Step index={4} title="Select Finishes" note="Select all that apply">
              <OptionGrid>
                {config.finishes.map((option) => (
                  <OptionButton
                    key={option.id}
                    label={option.label}
                    hint={option.hint}
                    selected={finishes.includes(option.id)}
                    onClick={() => toggle(finishes, setFinishes, option.id)}
                  />
                ))}
              </OptionGrid>
            </Step>

            <Step index={5} title="Select Quantity">
              <div className="flex flex-wrap gap-2.5">
                {config.quantities.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setQuantity(value);
                      setCustomQuantity("");
                    }}
                    className={cn(
                      "min-h-11 rounded-full border px-5 text-sm font-semibold transition",
                      quantity === value && !customQuantity
                        ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                        : "border-[rgba(21,36,58,0.12)] bg-white text-[var(--color-ink)] hover:border-[var(--color-accent)]",
                    )}
                  >
                    {value >= 10000 ? "10,000+" : value.toLocaleString()}
                  </button>
                ))}
              </div>
              <label className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
                Or enter a custom quantity
                <input
                  className="input-shell max-w-[180px]"
                  inputMode="numeric"
                  placeholder="e.g. 750"
                  value={customQuantity}
                  onChange={(event) => setCustomQuantity(event.target.value.replace(/[^0-9]/g, ""))}
                />
              </label>
            </Step>

            <Step index={6} title="Optional Add-Ons" note="Select all that apply">
              <OptionGrid>
                {config.addOns.map((option) => (
                  <OptionButton
                    key={option.id}
                    label={option.label}
                    hint={option.hint}
                    selected={addOns.includes(option.id)}
                    onClick={() => toggle(addOns, setAddOns, option.id)}
                  />
                ))}
              </OptionGrid>
            </Step>

            <Step index={7} title="Upload Artwork" note="Optional">
              <label className="flex cursor-pointer flex-col items-center gap-2 rounded-[22px] border border-dashed border-[rgba(21,36,58,0.2)] bg-white px-6 py-9 text-center transition hover:border-[var(--color-accent)]">
                <input
                  type="file"
                  className="sr-only"
                  accept=".pdf,.ai,.eps,.psd,.png,.jpg,.jpeg,.svg,.zip"
                  onChange={(event) => setArtwork(event.target.files?.[0] ?? null)}
                />
                <Upload className="h-6 w-6 text-[var(--color-accent)]" aria-hidden />
                <span className="text-sm font-semibold text-[var(--color-ink)]">
                  {artwork ? artwork.name : "Drop your file here or click to browse"}
                </span>
                <span className="text-xs text-[var(--color-muted)]">
                  PDF, AI, EPS, PSD, PNG, JPG — max 5MB
                </span>
              </label>
            </Step>

            <Step index={8} title="Design Support">
              <button
                type="button"
                onClick={() => setDesignHelp((current) => !current)}
                className={cn(
                  "flex w-full items-start gap-4 rounded-[22px] border px-5 py-4 text-left transition",
                  designHelp
                    ? "border-[var(--color-accent)] bg-[rgba(232,96,58,0.06)]"
                    : "border-[rgba(21,36,58,0.12)] bg-white hover:border-[var(--color-accent)]",
                )}
                aria-pressed={designHelp}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-6 w-11 flex-none items-center rounded-full p-1 transition",
                    designHelp ? "bg-[var(--color-accent)]" : "bg-[rgba(21,36,58,0.16)]",
                  )}
                  aria-hidden
                >
                  <span
                    className={cn(
                      "h-4 w-4 rounded-full bg-white transition",
                      designHelp && "translate-x-5",
                    )}
                  />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[var(--color-ink)]">
                    I need free design support
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-[var(--color-muted)]">
                    Our designers build your dieline and artwork at no charge, with unlimited
                    revisions before print.
                  </span>
                </span>
              </button>
            </Step>

            <Step index={9} title="Your Details">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="input-shell"
                  placeholder="Full name"
                  value={contact.name}
                  onChange={(event) => setContact((c) => ({ ...c, name: event.target.value }))}
                  required
                />
                <input
                  className="input-shell"
                  type="email"
                  placeholder="Email address"
                  value={contact.email}
                  onChange={(event) => setContact((c) => ({ ...c, email: event.target.value }))}
                  required
                />
                <input
                  className="input-shell"
                  type="tel"
                  placeholder="Phone number"
                  value={contact.phone}
                  onChange={(event) => setContact((c) => ({ ...c, phone: event.target.value }))}
                />
                <input
                  className="input-shell"
                  placeholder="Deadline or target date (optional)"
                  value={contact.notes}
                  onChange={(event) => setContact((c) => ({ ...c, notes: event.target.value }))}
                />
              </div>
            </Step>
          </div>

          <aside
            data-summary-panel
            className="max-lg:fixed max-lg:inset-x-0 max-lg:bottom-0 max-lg:z-40 max-lg:translate-y-[110%] max-lg:transition-transform max-lg:duration-200 max-lg:data-[visible=true]:translate-y-0 lg:sticky lg:top-24"
          >
            <div className="surface-card overflow-hidden max-lg:rounded-b-none max-lg:shadow-[0_-10px_30px_rgba(21,36,58,0.18)] max-lg:max-h-[80vh] max-lg:overflow-y-auto">
              <div className="border-b border-[rgba(21,36,58,0.08)] bg-[var(--color-shell)] px-6 py-3">
                <button
                  type="button"
                  onClick={() => setSummaryOpen((open) => !open)}
                  aria-expanded={summaryOpen}
                  className="flex w-full items-center justify-between gap-3 text-left lg:pointer-events-none"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    Your Selections
                  </span>
                  <span className="text-xs font-semibold text-[var(--color-accent)] lg:hidden">
                    {selectedCount ? `${selectedCount} selected · ` : ""}
                    {summaryOpen ? "Hide" : "Show"}
                  </span>
                </button>
              </div>
              <dl
                className={cn(
                  "divide-y divide-[rgba(21,36,58,0.06)] px-6",
                  summaryOpen ? "block" : "max-lg:hidden",
                )}
              >
                {summaryRows.map((row) => (
                  <div key={row.label} className="flex items-start justify-between gap-4 py-3">
                    <dt className="text-sm text-[var(--color-muted)]">{row.label}</dt>
                    <dd
                      className={cn(
                        "max-w-[60%] text-right text-sm",
                        row.value ? "font-semibold text-[var(--color-ink)]" : "italic text-[var(--color-muted)]",
                      )}
                    >
                      {row.value || "Not selected"}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="m-6 rounded-[22px] bg-[linear-gradient(135deg,#0f1b2e,#15243a)] px-5 py-5 text-center text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                  Estimated Price Range
                </p>
                <p className="mt-2 font-display text-2xl">
                  {estimate
                    ? `$${estimate.low.toLocaleString()} – $${estimate.high.toLocaleString()}`
                    : "Select material & quantity"}
                </p>
                <p className="mt-2 text-xs leading-5 text-white/60">
                  Indicative only. Final pricing is confirmed after our team reviews your artwork
                  and specs.
                </p>
              </div>

              <ul className="grid gap-2 px-6 pb-6">
                {config.assurances.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-[var(--color-ink)]">
                    <Check
                      className="mt-1 h-3.5 w-3.5 flex-none text-[var(--color-accent)]"
                      strokeWidth={3}
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {error ? (
              <p className="mt-4 rounded-2xl bg-[rgba(232,96,58,0.08)] px-4 py-3 text-sm text-[var(--color-accent)]">
                {error}
              </p>
            ) : null}

            <div className="mt-4 grid gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(232,96,58,0.24)] transition hover:-translate-y-0.5 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                ) : (
                  <MessageSquare className="h-4 w-4" aria-hidden />
                )}
                {isSubmitting ? "Sending…" : "Add to Quote Request"}
              </button>
              <a
                href={`tel:${config.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[rgba(21,36,58,0.14)] bg-white px-6 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)]"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Talk to a Packaging Expert
              </a>
            </div>
          </aside>
        </form>
      </Container>
    </section>
  );
}

function Step({
  index,
  title,
  note,
  children,
}: {
  index: number;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="surface-card p-5 sm:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[var(--color-ink)] text-xs font-semibold text-white">
          {index}
        </span>
        <h3 className="text-lg font-semibold text-[var(--color-ink)]">{title}</h3>
        {note ? (
          <span className="rounded-full bg-[var(--color-shell)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
            {note}
          </span>
        ) : null}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function OptionGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

function OptionButton({
  label,
  hint,
  selected,
  onClick,
}: {
  label: string;
  hint?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "min-h-16 rounded-[18px] border px-4 py-3 text-center transition",
        selected
          ? "border-[var(--color-accent)] bg-[rgba(232,96,58,0.06)] shadow-[0_0_0_3px_rgba(232,96,58,0.12)]"
          : "border-[rgba(21,36,58,0.12)] bg-white hover:border-[var(--color-accent)]",
      )}
    >
      <span className="block text-sm font-semibold text-[var(--color-ink)]">{label}</span>
      {hint ? <span className="mt-1 block text-xs text-[var(--color-muted)]">{hint}</span> : null}
    </button>
  );
}
