import type { FeatureCardProps } from "../../types/feature";
import { FeatureImage } from "./feature-image";
import { FeatureContent } from "./feature-content";

export function FeatureCard({ image, title, description }: FeatureCardProps) {
  return (
    <div className="w-full mx-auto max-w-7xl">
      <div className="bg-card border border-[#D0D5DD] rounded-2xl p-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
          {/* Image Section */}
          <div className="w-full lg:w-2/7 flex-shrink-0">
            <FeatureImage src={image.src} alt={image.alt} />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-3/4">
            <FeatureContent title={title} description={description} />
          </div>
        </div>
      </div>
    </div>
  );
}
