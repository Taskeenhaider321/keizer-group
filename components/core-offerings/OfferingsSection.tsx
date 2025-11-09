import { HeroImage } from "./OfferingsImage";
import { HeroContent } from "./OfferingsContent";
import { HeroFeatures } from "./OfferingsFeature";

export interface HeroFeature {
  id: string | number;
  title: string;
  description: string;
}

export interface HeroSectionProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  features: HeroFeature[];
  imagePosition?: "left" | "right";
}

export function OfferingSection({
  title,
  imageUrl,
  imageAlt,
  features,
  imagePosition = "left",
}: HeroSectionProps) {
  return (
    <section className="w-full border my-12 border-[#D0D5DD] p-6 rounded-2xl ">
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch ${
            imagePosition === "right" ? "lg:auto-cols-max" : ""
          }`}
        >
          {/* Image - Left side on desktop, top on mobile */}
          {imagePosition === "left" && (
            <div className="order-1 lg:order-1">
              <HeroImage src={imageUrl} alt={imageAlt} />
            </div>
          )}

          {/* Content - Right side on desktop, middle on mobile */}
          <div
            className={
              imagePosition === "left"
                ? "order-2 lg:order-2"
                : "order-1 lg:order-1"
            }
          >
            <HeroContent title={title} />
            <HeroFeatures features={features} />
          </div>

          {/* Image - Right side */}
          {imagePosition === "right" && (
            <div className="order-3 lg:order-3">
              <HeroImage src={imageUrl} alt={imageAlt} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
