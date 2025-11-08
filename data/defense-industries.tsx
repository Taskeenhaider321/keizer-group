import { Shield, Lock, Globe, AlertTriangle } from "lucide-react";
import { IndustryItem } from "@/types/industries";

export const defenseIndustries: IndustryItem[] = [
  {
    id: "defense",
    icon: <Shield className="w-6 h-6 text-white" strokeWidth={1.5} />,
    title: "Defense & Military Operations",
    description:
      "Secure battlefield communications with encrypted, cross-border connectivity.",
  },
  {
    id: "government",
    icon: <Lock className="w-6 h-6 text-white" strokeWidth={1.5} />,
    title: "Government & Public Safety",
    description:
      "Police, emergency response, and disaster relief teams connected under one sovereign system.",
  },
  {
    id: "corporate",
    icon: <Globe className="w-6 h-6 text-white" strokeWidth={1.5} />,
    title: "Corporate Security & Critical Infrastructure",
    description:
      "Protecting executives, assets, and facilities with uninterrupted secure communications.",
  },
  {
    id: "highrisk",
    // ✅ Example: your inline SVG
    icon: (
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <circle cx="4" cy="4" r="4" fill="white" />
      </svg>
    ),
    title: "High-Risk Environments",
    description:
      "Mining, oil & gas, and remote industrial operations requiring robust, resilient networks.",
  },
];

export const defenseFeaturedImage = {
  src: "/military-operations-command-center.jpg",
  alt: "Defense and Military Operations Command Center",
};
