import type { ConfiguratorConfig } from "@/components/sections/box-configurator";
import { siteConfig } from "@/data/site";

/**
 * Option catalogue and indicative per-unit pricing for the cereal box
 * configurator. Prices are deltas on the material base rate, scaled by volume.
 */
export const cerealConfiguratorConfig: ConfiguratorConfig = {
  sizes: [
    { id: "single", label: "Single Serve", hint: '3 × 2 × 5 in' },
    { id: "small", label: "Small", hint: '7 × 2.5 × 10 in' },
    { id: "standard", label: "Standard", hint: '8 × 2.5 × 12 in' },
    { id: "family", label: "Family Size", hint: '10 × 3 × 13 in' },
    { id: "bulk", label: "Bulk / Club", hint: '12 × 4 × 16 in' },
    { id: "custom", label: "Custom Size", hint: "Enter below" },
  ],
  materials: [
    { id: "sbs", label: "SBS Paperboard", hint: "18–24pt retail board", price: 1.1 },
    { id: "kraft", label: "Kraft Board", hint: "Natural brown finish", price: 0.95 },
    { id: "corrugated", label: "E-Flute Corrugated", hint: "Heavy-duty shipping", price: 1.45 },
    { id: "recycled", label: "Recycled / FSC", hint: "Sustainable board", price: 1.25 },
    { id: "rigid", label: "Premium Rigid", hint: "Luxury gift packs", price: 2.8 },
  ],
  printing: [
    { id: "none", label: "No Printing", hint: "Plain / unprinted", price: -0.18 },
    { id: "cmyk", label: "Full Colour CMYK", hint: "Standard 4-colour", price: 0 },
    { id: "pms", label: "PMS Spot Colours", hint: "Pantone matched", price: 0.28 },
    { id: "inside", label: "Inside Printing", hint: "Interior graphics", price: 0.18 },
    { id: "outside", label: "Outside Printing", hint: "Exterior graphics", price: 0.1 },
    { id: "both", label: "Both Sides", hint: "In & out printed", price: 0.32 },
  ],
  finishes: [
    { id: "gloss", label: "Gloss Lamination", hint: "High shine surface", price: 0.14 },
    { id: "matte", label: "Matte Lamination", hint: "Smooth satin look", price: 0.14 },
    { id: "aqueous", label: "Aqueous Coating", hint: "Food-safe seal", price: 0.1 },
    { id: "spotuv", label: "Spot UV", hint: "Selective high gloss", price: 0.24 },
    { id: "goldfoil", label: "Gold Foil", hint: "Luxury metallic gold", price: 0.34 },
    { id: "silverfoil", label: "Silver Foil", hint: "Metallic silver shine", price: 0.28 },
    { id: "emboss", label: "Embossing", hint: "Raised texture", price: 0.28 },
    { id: "deboss", label: "Debossing", hint: "Pressed-in texture", price: 0.24 },
    { id: "softtouch", label: "Soft-Touch", hint: "Velvet-like finish", price: 0.2 },
  ],
  quantities: [100, 250, 500, 1000, 2500, 5000, 10000],
  addOns: [
    { id: "window", label: "Window Patching", hint: "Clear film panel", price: 0.18 },
    { id: "liner", label: "Inner Liner Bag", hint: "Food-grade freshness", price: 0.26 },
    { id: "inserts", label: "Inserts & Dividers", hint: "Portion control", price: 0.22 },
    { id: "resealable", label: "Resealable Closure", hint: "Tuck or zip top", price: 0.24 },
    { id: "handle", label: "Handle Die-Cut", hint: "Carry-friendly packs", price: 0.2 },
    { id: "sleeve", label: "Outer Sleeve", hint: "Promo band wrap", price: 0.28 },
  ],
  assurances: [
    "Free design & dieline support",
    "Low minimums for launches",
    "Retail-ready print quality",
    "Fast US-wide shipping",
  ],
  phone: siteConfig.phone,
  contactHref: "/contact-us/",
};
