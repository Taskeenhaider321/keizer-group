interface FeatureContentProps {
  title: string;
  description: string[];
}

export function FeatureContent({ title, description }: FeatureContentProps) {
  return (
    <div className="flex flex-col justify-center gap-4">
      <h2 className="text-[16px] sm:text-[18px] md:text-[24px] font-bold text-foreground">
        {title}
      </h2>
      <ul className="space-y-3">
        {description.map((item, index) => (
          <li key={index} className="flex text-[#667085] font-jakarta  gap-2 items-start">
            {/* Custom bullet */}
            <span className="inline-block w-2 h-2 rounded-full bg-[#667085] mt-2 flex-shrink-0" />
            {/* <span className=" "> */}
              {item}
            {/* </span> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
