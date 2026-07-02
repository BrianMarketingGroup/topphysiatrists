import type { Metadata } from "next";
import { Target, ShieldCheck, Globe } from "lucide-react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about TopPhysiatrists.com — the premier directory connecting patients with top-rated physiatrists and physical medicine & rehabilitation specialists nationwide.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-navy py-14">
        <Container>
          <div className="text-center">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              About TopPhysiatrists.com
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed mx-auto">
              TopPhysiatrists.com was founded to connect the public with trusted, top-rated physiatrists and physical medicine &amp; rehabilitation specialists across the United States.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-16 lg:py-24 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-muted text-lg leading-relaxed mb-5">
              Following our 2026 acquisition and complete redesign, we are building the most comprehensive physiatry directory in the country — one that PM&amp;R physicians are proud to be part of and patients can rely on when it matters most.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-12">
              Our mission is simple: recognize excellence, elevate top physiatrists, and help patients find the right physical medicine and rehabilitation care.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Our Mission",
                body: "Connect patients and referring physicians with trusted, verified physiatrists across every PM&R specialty and major U.S. city.",
              },
              {
                icon: ShieldCheck,
                title: "Our Standards",
                body: "Every listed physician undergoes a review process. Only qualified, board-eligible or board-certified physiatrists and PM&R specialists are accepted.",
              },
              {
                icon: Globe,
                title: "Our Reach",
                body: "All 50 states. 18+ PM&R specialties. Launching to the public in August 2026.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <FadeIn key={title}>
                <div className="text-center p-6 rounded-2xl border border-sky-dark bg-sky h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 border border-teal/20 mb-4">
                    <Icon className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">{title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
