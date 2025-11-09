interface HeroContentProps {
  heading: string;
  headingHighlight?: string;
  description: string;
  accentColor?: string;
}

interface HeroContentProps {
  heading: string;
  headingHighlight?: string;
  description: string;
  accentColor?: string;
}

export function HeroContent({
  heading,
  headingHighlight,
  description,
  accentColor = "from-cyan-400 to-blue-500",
}: HeroContentProps) {
  const containsHighlight =
    headingHighlight && heading.includes(headingHighlight);
  const headingParts = containsHighlight
    ? heading.split(headingHighlight)
    : [heading];

  return (
    <div className="mb-8 md:mb-12 w-full font-jakarta max-w-[900px]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] w-full font-bold leading-tight mb-6 text-balance">
        <span className="text-white">{headingParts[0]}</span>
        {headingHighlight && (
          <span
            className={`bg-gradient-to-r italic ${accentColor} bg-clip-text text-transparent`}
          >
            {headingHighlight}
          </span>
        )}
        {headingParts[1] && (
          <span className="text-white">{headingParts[1]}</span>
        )}
      </h1>

      <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-0 text-balance">
        {description}
      </p>
    </div>
  );
}
