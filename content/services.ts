export interface Service {
  id: string;
  label: string;
  description: string;
  specialties: string[];
}

export const services: Service[] = [
  {
    id: "litigation",
    label: "Litigation Support",
    description: "Comprehensive support throughout the litigation process",
    specialties: ["Pleadings & Motions", "Document Review", "Exhibit Preparation", "Legal Research", "Trial Notebooks"],
  },
  {
    id: "discovery",
    label: "Discovery Assistance",
    description: "Discovery management, document review, and production support",
    specialties: ["Document Production", "Interrogatory Responses", "Deposition Summaries", "Evidence Management", "ESI Coordination"],
  },
  {
    id: "document",
    label: "Document Preparation",
    description: "Legal document drafting and preparation services",
    specialties: ["Contract Drafting", "Motion Drafting", "Pleadings", "Legal Forms", "Document Review"],
  },
  {
    id: "case-management",
    label: "Case Management",
    description: "End-to-end case organization and administrative support",
    specialties: ["Docket Management", "Deadline Tracking", "Client Communication", "File Organization", "Status Reports"],
  },
  {
    id: "trial-prep",
    label: "Trial Preparation",
    description: "Pre-trial organization, witness coordination, and exhibit management",
    specialties: ["Exhibit Labeling", "Witness Lists", "Trial Binders", "Court Filing", "Jury Instructions Support"],
  },
  {
    id: "legal-research",
    label: "Legal Research",
    description: "Case law, statutory, and regulatory research for attorneys",
    specialties: ["Case Law Research", "Statutory Research", "Regulatory Analysis", "Memo Drafting", "Brief Support"],
  },
  {
    id: "family",
    label: "Family Law Support",
    description: "Paralegal support for family law matters",
    specialties: ["Divorce Proceedings", "Child Custody", "Adoption", "Guardianship", "Domestic Relations"],
  },
  {
    id: "immigration",
    label: "Immigration Support",
    description: "Immigration document preparation and filing assistance",
    specialties: ["Visa Applications", "Green Card Processing", "Citizenship Applications", "Deportation Defense Support", "DACA Applications"],
  },
  {
    id: "estate",
    label: "Estate Planning Support",
    description: "Wills, trusts, and probate document preparation",
    specialties: ["Will Drafting", "Trust Documents", "Power of Attorney", "Healthcare Directives", "Asset Inventories"],
  },
  {
    id: "probate",
    label: "Probate Support",
    description: "Probate filing, estate administration, and court coordination",
    specialties: ["Probate Petitions", "Estate Inventories", "Creditor Notices", "Final Accounting", "Court Filing"],
  },
  {
    id: "real-estate",
    label: "Real Estate Law Support",
    description: "Real estate transaction and closing document preparation",
    specialties: ["Closing Documents", "Title Review", "Lease Agreements", "Purchase Agreements", "HOA Documents"],
  },
  {
    id: "corporate",
    label: "Corporate Law Support",
    description: "Business formation, compliance, and contract support",
    specialties: ["Business Formation", "Operating Agreements", "Corporate Minutes", "Contract Review", "Compliance Documents"],
  },
  {
    id: "personal-injury",
    label: "Personal Injury Support",
    description: "Client intake, medical records management, and case support",
    specialties: ["Client Intake", "Medical Records Management", "Demand Letters", "Settlement Documents", "Insurance Claims"],
  },
  {
    id: "bankruptcy",
    label: "Bankruptcy Support",
    description: "Chapter 7, Chapter 13, and related filings",
    specialties: ["Chapter 7 Filings", "Chapter 13 Filings", "Means Test", "Creditor Negotiations", "Debt Schedule Preparation"],
  },
  {
    id: "freelance",
    label: "Freelance Paralegal Services",
    description: "Independent paralegal support on a project or contract basis",
    specialties: ["Project-Based Support", "Contract Work", "Overflow Assistance", "Short-Term Engagements", "Specialized Research"],
  },
  {
    id: "contract",
    label: "Contract Paralegal Services",
    description: "On-demand contract paralegal staffing for law firms and businesses",
    specialties: ["Law Firm Staffing", "In-House Support", "Temporary Placement", "Part-Time Support", "Remote Contract Work"],
  },
  {
    id: "legal-admin",
    label: "Legal Administrative Support",
    description: "Administrative and organizational support for legal practices",
    specialties: ["Calendar Management", "Court Scheduling", "Client Intake", "Billing Support", "Records Management"],
  },
  {
    id: "remote",
    label: "Remote Paralegal Services",
    description: "Virtual and remote legal support for law firms nationwide",
    specialties: ["Remote Document Preparation", "Virtual Case Management", "Online Legal Research", "Cloud-Based Filing", "Remote Client Support"],
  },
];

export const allServiceIds: string[] = services.map((s) => s.id);
export const allServiceLabels: string[] = services.map((s) => s.label);
