import type { Metadata } from "next";
import { Stethoscope } from "lucide-react";
import ApplyForm from "@/components/ApplyForm";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Apply to Be Listed",
  description: "Apply to be listed on TopPhysiatrists.com. Reach patients, referring physicians, and healthcare organizations actively searching for PM&R care.",
};

export default function ApplyPage() {
  return (
    <div className="bg-sky min-h-screen py-16 lg:py-20">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 mb-4">
              <Stethoscope className="h-6 w-6 text-navy" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-3">
              Apply to Be Listed
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Complete the form below to secure your listing on TopPhysiatrists.com.
              All applications are reviewed and listings go live in August 2026.
            </p>
          </div>
          <ApplyForm />
        </div>
      </Container>
    </div>
  );
}
