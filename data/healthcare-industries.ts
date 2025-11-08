import { IndustryItem } from "@/types/industries";

export const healthcareIndustries: IndustryItem[] = [
  {
    id: "hospitals",
    icon: "shield",
    title: "Hospital Networks",
    description:
      "Secure patient data transmission and emergency communication systems.",
  },
  {
    id: "telemedicine",
    icon: "globe",
    title: "Telemedicine Services",
    description:
      "Reliable connectivity for remote consultations and medical data sharing.",
  },
  {
    id: "research",
    icon: "lock",
    title: "Medical Research",
    description:
      "Protected transmission of sensitive research data and clinical trials.",
  },
  {
    id: "emergency",
    icon: "warning",
    title: "Emergency Medical Services",
    description:
      "Critical communication for ambulance and disaster response teams.",
  },
];

export const healthcareFeaturedImage = {
  src: "/healthcare-command-center.jpg",
  alt: "Healthcare Operations Center",
};
