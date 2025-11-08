import { IndustryItem } from "@/types/industries";

export const financialIndustries: IndustryItem[] = [
  {
    id: "banking",
    icon: "shield",
    title: "Banking & Finance",
    description:
      "Secure financial transactions and confidential client communications.",
  },
  {
    id: "trading",
    icon: "globe",
    title: "Trading Floors",
    description:
      "Low-latency, reliable connectivity for real-time trading operations.",
  },
  {
    id: "compliance",
    icon: "lock",
    title: "Regulatory Compliance",
    description:
      "Secure archiving and transmission of compliance-related communications.",
  },
  {
    id: "cryptocurrency",
    icon: "warning",
    title: "Cryptocurrency & Blockchain",
    description:
      "Protected communications for digital asset exchanges and blockchain operations.",
  },
];

export const financialFeaturedImage = {
  src: "/financial-trading-floor.jpg",
  alt: "Financial Trading Operations Center",
};
