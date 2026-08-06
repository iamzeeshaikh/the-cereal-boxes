"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type ProductGalleryImage = {
  src: string;
  alt: string;
  label?: string;
};

/**
 * Interactive product image gallery: clicking any thumbnail instantly swaps
 * the main image in place (no navigation). All gallery images are warmed via
 * `new Image()` on idle so swaps are instant, plus per-thumb warming on
 * pointerenter/touchstart.
 */
export function ProductGallery({
  images,
  productName,
}: {
  images: ProductGalleryImage[];
  productName: string;
}) {
  const [active, setActive] = useState(0);
  const warmedRef = useRef<Set<string>>(new Set());

  const warm = useCallback((src: string) => {
    if (typeof window === "undefined" || warmedRef.current.has(src)) return;
    warmedRef.current.add(src);
    const img = new window.Image();
    img.fetchPriority = "low";
    img.decoding = "async";
    img.src = src;
  }, []);

  useEffect(() => {
    const warmAll = () => images.forEach((image) => warm(image.src));
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(warmAll);
      return () => window.cancelIdleCallback(id);
    }
    // Fallback: warm shortly after load without competing with the LCP image.
    const id = window.setTimeout(warmAll, document.readyState === "complete" ? 200 : 1500);
    return () => window.clearTimeout(id);
  }, [images, warm]);

  const current = images[active] ?? images[0];

  return (
    <div className="surface-card overflow-hidden p-3">
      <div className="relative aspect-[1.04/0.9] overflow-hidden rounded-[24px] bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="main-img"
          src={current.src}
          alt={current.alt || `${productName} product image`}
          width={1200}
          height={1038}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      {images.length > 1 ? (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              data-src={image.src}
              aria-label={image.label ? `View ${image.label}` : `View image ${index + 1}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              onPointerEnter={() => warm(image.src)}
              onTouchStart={() => warm(image.src)}
              className={`thumb-btn relative aspect-square cursor-pointer overflow-hidden rounded-[14px] border-2 bg-white transition ${
                index === active
                  ? "active border-[var(--color-ink,#15243a)]"
                  : "border-[rgba(21,36,58,0.12)] hover:border-[rgba(21,36,58,0.4)]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={`${productName} image ${index + 1}`}
                width={160}
                height={160}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
