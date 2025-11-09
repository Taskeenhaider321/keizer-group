import type { HeroFeature } from "./OfferingsSection";

interface HeroFeaturesProps {
  features: HeroFeature[];
}

export function HeroFeatures({ features }: HeroFeaturesProps) {
  return (
    <div className="space-y-3">
      {features.map((feature, index) => (
        <div key={feature.id} className="flex gap-4 items-center relative border border-[#EAECF0] rounded-[16px] p-4">
          <div className="flex-1">
            <h3 className="font-semibold mb-1 text-[12px] sm:text-[18px]">
              {feature.title}
            </h3>
            <p className="text-[10px] sm:text-[16px] leading-relaxed">
              {feature.description}
            </p>
          </div>

          {/* Feature number - positioned on right */}
          <div className="flex-shrink-0 pl-4">
            <span className="text-[20px] sm:text-[32px] font-semibold text-[#EAECF0] opacity-40">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
