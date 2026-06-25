export interface Service {
  id: string;
  label: string;
  description: string;
  specialties: string[];
}

export const services: Service[] = [
  {
    id: "spinal-cord-injury",
    label: "Spinal Cord Injury Rehabilitation",
    description: "Comprehensive rehabilitation for acute and chronic spinal cord injuries",
    specialties: ["Acute SCI Management", "Functional Restoration", "Mobility Training", "Bowel & Bladder Programs", "Community Reintegration"],
  },
  {
    id: "pain-management",
    label: "Pain Management",
    description: "Interventional and non-interventional chronic and acute pain treatment",
    specialties: ["Chronic Pain", "Acute Pain", "Neuropathic Pain", "Medication Management", "Multimodal Pain Plans"],
  },
  {
    id: "musculoskeletal",
    label: "Musculoskeletal Medicine",
    description: "Diagnosis and treatment of musculoskeletal conditions and injuries",
    specialties: ["Joint Disorders", "Soft Tissue Injuries", "Tendinopathies", "Overuse Injuries", "Biomechanical Assessment"],
  },
  {
    id: "stroke-rehab",
    label: "Stroke Rehabilitation",
    description: "Post-stroke recovery programs targeting functional and cognitive restoration",
    specialties: ["Motor Recovery", "Speech Coordination", "Cognitive Rehab", "Spasticity Management", "ADL Training"],
  },
  {
    id: "sports-medicine",
    label: "Sports Medicine & Rehabilitation",
    description: "Athletic injury evaluation, treatment, and return-to-sport rehabilitation",
    specialties: ["Sports Injury Rehab", "Concussion Management", "Return-to-Play Programs", "Performance Recovery", "Overuse Injury Prevention"],
  },
  {
    id: "electrodiagnostic",
    label: "Electrodiagnostic Medicine",
    description: "EMG and nerve conduction studies for neuromuscular diagnosis",
    specialties: ["Electromyography (EMG)", "Nerve Conduction Studies (NCS)", "Carpal Tunnel Evaluation", "Radiculopathy Workup", "Peripheral Neuropathy"],
  },
  {
    id: "tbi",
    label: "Traumatic Brain Injury Rehabilitation",
    description: "Multidisciplinary rehabilitation for mild, moderate, and severe TBI",
    specialties: ["Cognitive Rehabilitation", "Behavioral Management", "Vestibular Therapy Coordination", "Post-Concussion Syndrome", "Neurocognitive Recovery"],
  },
  {
    id: "pediatric-rehab",
    label: "Pediatric Rehabilitation",
    description: "Specialized rehabilitation medicine for children with disabilities and injuries",
    specialties: ["Cerebral Palsy", "Developmental Delays", "Pediatric Sports Injuries", "Spasticity Management", "School Reintegration"],
  },
  {
    id: "cancer-rehab",
    label: "Cancer Rehabilitation",
    description: "Oncology rehabilitation addressing cancer treatment side effects and function",
    specialties: ["Post-Surgical Rehab", "Chemotherapy Fatigue", "Lymphedema Management", "Functional Restoration", "Palliative Rehab"],
  },
  {
    id: "cardiac-rehab",
    label: "Cardiac Rehabilitation",
    description: "Medically supervised recovery and conditioning after cardiac events",
    specialties: ["Post-MI Recovery", "Post-CABG Rehab", "Exercise Prescription", "Risk Factor Modification", "Heart Failure Management"],
  },
  {
    id: "amputation-prosthetics",
    label: "Amputation & Prosthetics",
    description: "Pre- and post-amputation rehabilitation and prosthetic management",
    specialties: ["Residual Limb Care", "Prosthetic Prescription", "Gait Training", "Upper Limb Amputee Rehab", "Phantom Limb Pain"],
  },
  {
    id: "neuromuscular",
    label: "Neuromuscular Disorders",
    description: "Diagnosis and management of neuromuscular and peripheral nerve conditions",
    specialties: ["ALS Management", "Muscular Dystrophy", "Peripheral Neuropathy", "Myopathy", "Motor Neuron Disease"],
  },
  {
    id: "work-injury",
    label: "Work-Related Injury Rehabilitation",
    description: "Occupational injury assessment, functional capacity evaluation, and return-to-work programs",
    specialties: ["Functional Capacity Evaluation", "Work Hardening", "Ergonomic Assessment", "Return-to-Work Planning", "Workers' Comp Evaluation"],
  },
  {
    id: "geriatric-rehab",
    label: "Geriatric Rehabilitation",
    description: "Functional restoration and fall prevention for older adults",
    specialties: ["Fall Prevention", "Hip Fracture Recovery", "Deconditioning", "Balance & Gait", "Cognitive Decline Management"],
  },
  {
    id: "post-covid",
    label: "Post-COVID Rehabilitation",
    description: "Long COVID symptom management and functional recovery programs",
    specialties: ["Fatigue Management", "Dyspnea Rehab", "Cognitive Fog Recovery", "Post-ICU Syndrome", "Functional Restoration"],
  },
  {
    id: "interventional",
    label: "Interventional Pain Procedures",
    description: "Minimally invasive procedures for pain relief and functional improvement",
    specialties: ["Epidural Steroid Injections", "Nerve Blocks", "Joint Injections", "Trigger Point Injections", "Platelet-Rich Plasma (PRP)"],
  },
  {
    id: "cerebral-palsy",
    label: "Cerebral Palsy Management",
    description: "Lifelong care, therapy coordination, and functional goal-setting for CP",
    specialties: ["Spasticity Treatment", "Botulinum Toxin Therapy", "Adaptive Equipment", "Gait Analysis", "Transition to Adult Care"],
  },
  {
    id: "ms-rehab",
    label: "Multiple Sclerosis Rehabilitation",
    description: "Disease management and functional rehabilitation for MS patients",
    specialties: ["Fatigue Management", "Spasticity Control", "Mobility Aids", "Cognitive Rehab", "Multidisciplinary Coordination"],
  },
];

export const allServiceIds: string[] = services.map((s) => s.id);
export const allServiceLabels: string[] = services.map((s) => s.label);
