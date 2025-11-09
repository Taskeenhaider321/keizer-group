import { ReactNode } from "react";

export interface IndustryItem {
  id: string;
  icon: ReactNode; // can be LucideIcon or custom inline SVG
  title: string;
  description: string;
  className?: string;
}

export interface IndustriesSectionProps {
  industries: IndustryItem[];
  title?: string;
  featuredImage?: {
    src: string;
    alt: string;
  };
}

export interface FeaturedImageProps {
  src?: string;
  alt?: string;
}
