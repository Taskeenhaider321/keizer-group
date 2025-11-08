import { HeroBadge } from "./hero-badge";
import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";
import { HeroButtons } from "./hero-buttons";

export interface HeroButton {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" ;
}

export interface HeroSectionProps {
  badge?: string;
  heading: string;
  headingHighlight?: string;
  description: string;
  buttons: HeroButton[];
  backgroundImage?: string;
  backgroundImageAlt?: string;
  accentColor?: string;
}

export function HeroSection({
  badge,
  heading,
  headingHighlight,
  description,
  buttons,
  backgroundImage = "/modern-building.png",
  backgroundImageAlt = "Hero background",
  accentColor = "from-cyan-400 to-blue-500",
}: HeroSectionProps) {
  return (
    <section className="relative  w-full overflow-hidden bg-slate-950">
      {/* Background Image */}
      <HeroImage src={backgroundImage} alt={backgroundImageAlt} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />

      {/* Circular accent element */}
      <div
        className={`absolute top-1/3 right-10 md:right-20 w-20 md:w-32 h-20 md:h-32 rounded-full bg-gradient-to-br ${accentColor} opacity-20 blur-2xl`}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto text-center md:text-left">
          {badge && <HeroBadge text={badge} />}

          <HeroContent
            heading={heading}
            headingHighlight={headingHighlight}
            description={description}
            accentColor={accentColor}
          />

          <HeroButtons buttons={buttons} />
        </div>
      </div>
    </section>
  );
}
