export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Who is TopPhysiatrists.com for?",
    answer:
      "TopPhysiatrists.com is for board-certified physiatrists and physical medicine & rehabilitation (PM&R) specialists who want to increase their practice visibility and connect with patients, referring physicians, and healthcare organizations actively searching for rehabilitation medicine specialists in their area.",
  },
  {
    question: "What does a listing cost?",
    answer:
      "$289 per city for a basic listing. Featured placement — which pins your practice at the top of your city page above all other listings — is an additional $689 for your first city and 50% off ($345) for each additional city. Pricing is for a 12-month annual listing.",
  },
  {
    question: "When will my listing go live?",
    answer:
      "Listings are typically published within a few business days after approval. During a new directory's pre-launch period, approved listings are held and published when the directory goes live so that all participating practices debut together.",
  },
  {
    question: "What is a Featured Listing?",
    answer:
      "A Featured Listing pins your practice at the top of search results for your city — above all other ranked listings. Only one Featured Listing is available per city, so it's first-come, first-served.",
  },
  {
    question: "Can I be listed in multiple cities?",
    answer:
      "Yes. You can add as many cities as you serve. Each city is billed separately at $289/year. If you add Featured placement, the upgrade is $689 for your first city and $345 for each additional city.",
  },
  {
    question: "What PM&R specialties can I highlight?",
    answer:
      "You can showcase any specialties you practice — pain management, musculoskeletal medicine, stroke rehabilitation, spinal cord injury, sports medicine, electrodiagnostic medicine, TBI rehabilitation, and more. Your specialty selections are featured prominently on your listing.",
  },
  {
    question: "Is my application guaranteed to be accepted?",
    answer:
      "Yes — every qualifying physiatrist or PM&R practice that applies is accepted. We will reach out if we need any additional information to finalize your listing.",
  },
  {
    question: "What is the pre-launch special?",
    answer:
      "Businesses that apply before our August 2026 launch are eligible to receive 50% off all listings. This limited-time offer provides the same recognition, benefits, and visibility at a reduced prelaunch rate.",
  },
  {
    question: "Can I cancel my listing?",
    answer:
      "Listings are annual. Once your listing is finalized, the fee is non-refundable. You may cancel auto-renewal before the next annual cycle.",
  },
  {
    question: "Do I need to be in private practice?",
    answer:
      "Not at all. TopPhysiatrists.com welcomes physiatrists in private practice, academic medical centers, hospital-based practices, and rehabilitation facilities alike. If you provide physiatry or PM&R services, you qualify for a listing.",
  },
  {
    question: "What is the Awards & Recognition Dinner?",
    answer:
      "The Awards & Recognition Dinner is an exclusive annual event celebrating the practices featured on TopPhysiatrists.com. It brings together recognized practices, industry professionals, and invited guests to celebrate excellence in patient care. Each listing includes an invitation for your practice, with the event schedule and location announced in advance.",
  },
];

export const howItWorksFaqItems: FaqItem[] = [
  faqItems[0],
  faqItems[2],
  faqItems[3],
  faqItems[6],
];
