interface HeroContentProps {
  title: string;
}

export function HeroContent({ title }: HeroContentProps) {
  return (
    <div>
      <h1 className="text-[16px] md:text-[18px] lg:text-[24px] font-bold text-foreground mb-8 tracking-tight">
        {title}
      </h1>
    </div>
  );
}
