import { IMAGES } from "./images";

export interface PreviewCompany {
  id: number;
  name: string;
  services: string[];
  rating: number;
  reviewCount: number;
  phone: string;
  location: string;
  servingArea: string;
  imageUrl: string;
  featured?: boolean;
  rank?: number;
}

export const previewCompanies: PreviewCompany[] = [
  {
    id: 1,
    name: "Apex Physical Medicine",
    services: ["Pain Management", "Musculoskeletal Medicine", "Interventional Pain Procedures"],
    rating: 5.0,
    reviewCount: 241,
    phone: "(214) 555-1200",
    location: "Dallas, TX",
    servingArea: "Metro Dallas & Surrounding Areas",
    imageUrl: IMAGES.companyFeatured,
    featured: true,
  },
  {
    id: 2,
    name: "Summit Rehabilitation Specialists",
    services: ["Stroke Rehabilitation", "Spinal Cord Injury Rehabilitation", "Traumatic Brain Injury Rehabilitation"],
    rating: 4.9,
    reviewCount: 318,
    phone: "(214) 444-8800",
    location: "Dallas, TX",
    servingArea: "Serving Metro Dallas",
    imageUrl: IMAGES.companyOne,
    rank: 1,
  },
  {
    id: 3,
    name: "Pinnacle PM&R Associates",
    services: ["Sports Medicine & Rehabilitation", "Electrodiagnostic Medicine", "Work-Related Injury Rehabilitation"],
    rating: 4.8,
    reviewCount: 196,
    phone: "(214) 310-5500",
    location: "Dallas, TX",
    servingArea: "Serving Metro Dallas",
    imageUrl: IMAGES.companyTwo,
    rank: 2,
  },
  {
    id: 4,
    name: "Meridian Physiatry Group",
    services: ["Geriatric Rehabilitation", "Cancer Rehabilitation", "Neuromuscular Disorders"],
    rating: 4.7,
    reviewCount: 158,
    phone: "(214) 555-9900",
    location: "Dallas, TX",
    servingArea: "Serving Metro Dallas",
    imageUrl: IMAGES.companyThree,
    rank: 3,
  },
];
