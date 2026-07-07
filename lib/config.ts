/**
 * SiteConfig drives the checkout wizard (components/checkout/**) — every
 * screen reads behavior off this instead of hardcoding vertical-specific
 * logic, so the same wizard code can be reused across other BMG directory
 * sites later.
 */

import { services } from "@/content/services";

export type MarketType =
  | "city"
  | "zip"
  | "county"
  | "airport"
  | "specialty"
  | "practiceArea"
  | "state";

export type SearchMode =
  | "state+city"
  | "zip"
  | "county"
  | "airport"
  | "specialty"
  | "practiceArea";

export interface ListingTier {
  id: string;
  label: string;
  isPaid: boolean;
  basePrice: number;
}

export type UpsellKind = "extra-year" | "extra-city" | "statewide" | "nationwide" | "sister-site";

export interface UpsellOption {
  id: string;
  label: string;
  description: string;
  price: number;
  kind: UpsellKind;
}

export interface SpecialtyOption {
  id: string;
  label: string;
}

export interface SiteConfig {
  siteName: string;
  brandTagline: string;
  businessNoun: string;

  marketType: MarketType;
  marketLabel: string;
  searchMode: SearchMode;

  listingTier: ListingTier;
  featuredScope: "city" | "city_and_specialty" | "specialty_only";
  // Cosmetic "starting at" display value only — the real per-slot price
  // (first city vs. additional cities) is computed by lib/pricing.ts's
  // calculateQuote(), not this flat config value.
  featuredUpgradePrice: number;
  upsells: UpsellOption[];

  specialty: {
    required: boolean;
    label: string;
    options: SpecialtyOption[];
    pricePerOption: number;
  } | null;

  shippingRequired: boolean;

  listingFields: {
    peopleLabel: string;
    bioMaxChars: number;
    fileUploadTypes: Array<"logo" | "profilePhoto" | "bannerImage">;
  };

  emailTemplates: {
    completeLaterChecklist: string;
    ccAddress: string;
  };

  multiMarketDiscount: {
    minMarkets: number;
    percentOff: number;
  };

  productionTimelineDays: number;
}

export const physiatristsConfig: SiteConfig = {
  siteName: "Top Physiatrists",
  brandTagline: "Get Listed — TopPhysiatrists.com",
  businessNoun: "physiatry practice",

  marketType: "city",
  marketLabel: "City",
  searchMode: "state+city",

  listingTier: {
    id: "standard",
    label: "Standard Listing",
    isPaid: true,
    basePrice: 289,
  },
  // topphysiatrists' pricing model (lib/pricing.ts) prices Featured Placement
  // per city only — there's no per-service pricing dimension, so this stays
  // "city" rather than "city_and_specialty" (unlike topinsuranceagents,
  // which sells Featured per city × coverage area).
  featuredScope: "city",
  featuredUpgradePrice: 689,

  upsells: [],

  // Services carry no per-option pricing in this site's model (services is a
  // flat, free-to-select list in lib/schema.ts/lib/pricing.ts) — required so
  // every listing states its specialty areas, but pricePerOption is 0.
  specialty: {
    required: true,
    label: "Service",
    options: services.map((s) => ({ id: s.id, label: s.label })),
    pricePerOption: 0,
  },

  shippingRequired: true,

  listingFields: {
    peopleLabel: "Provider(s)",
    bioMaxChars: 2000,
    fileUploadTypes: ["logo", "profilePhoto", "bannerImage"],
  },

  emailTemplates: {
    completeLaterChecklist: "complete-later-checklist-v1",
    ccAddress: "support@digitalservicebrands.com",
  },

  // No multi-city discount offered today — set minMarkets unreachably high
  // rather than deleting the field (required by SiteConfig).
  multiMarketDiscount: {
    minMarkets: 999999,
    percentOff: 0,
  },

  productionTimelineDays: 10,
};
