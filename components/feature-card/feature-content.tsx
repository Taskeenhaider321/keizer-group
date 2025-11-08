interface FeatureContentProps {
  title: string;
  description: string[];
}

export function FeatureContent({ title, description }: FeatureContentProps) {
  return (
    <div className="flex flex-col justify-center gap-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
        {title}
      </h2>
      <ul className="space-y-3">
        {description.map((item, index) => (
          <li key={index} className="flex gap-3 items-start">
            <span className="inline-flex items-center justify-center w-1.5 h-1.5 rounded-full bg-foreground/60 mt-2 flex-shrink-0" />
            <span className="text-muted-foreground text-sm sm:text-base">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
