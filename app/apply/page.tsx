import type { Metadata } from "next";
import CheckoutWizard from "@/components/checkout/CheckoutWizard";
import { physiatristsConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Apply to Be Listed",
  description: "Apply to be listed on TopPhysiatrists.com. Reach patients, referring physicians, and healthcare organizations actively searching for PM&R care.",
};

export default function ApplyPage() {
  return <CheckoutWizard config={physiatristsConfig} />;
}
