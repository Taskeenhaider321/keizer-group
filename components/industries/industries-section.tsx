"use client";

import { IndustryCard } from "./industry-card";
import { FeaturedImage } from "./featured-image";
import { IndustriesSectionProps } from "@/types/industries";

export function IndustriesSection({
  industries,
  title = "Industries & Mission-Critical Applications",
  featuredImage,
}: IndustriesSectionProps) {
  return (
    <section className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 sm:mb-16 tracking-tight">
          {title}
        </h2>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Left Column - Two Industry Cards */}
          <div className="flex flex-col gap-8 md:gap-10">
            <IndustryCard
              icon={industries[0].icon}
              title={industries[0].title}
              description={industries[0].description}
            />
            <IndustryCard
              icon={industries[1].icon}
              title={industries[1].title}
              description={industries[1].description}
            />
          </div>

          {/* Center - Featured Image */}
          <div className="flex items-center justify-center md:col-span-1">
            <FeaturedImage src={featuredImage?.src} alt={featuredImage?.alt} />
          </div>

          {/* Right Column - Two Industry Cards */}
          <div className="flex flex-col gap-8 md:gap-10">
            <IndustryCard
              icon={industries[2].icon}
              title={industries[2].title}
              description={industries[2].description}
            />
            <IndustryCard
              icon={industries[3].icon}
              title={industries[3].title}
              description={industries[3].description}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
