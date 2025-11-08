import ValueCard from "./value-card";
import type { Value } from "@/types/values";

interface ValuesGridProps {
  data: Value[];
  title: string;
  description: string;
}

export default function ValuesGrid({
  data,
  title,
  description,
}: ValuesGridProps) {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <div>
        <h2 className="text-xl md:text-[36px] font-bold tracking-tight text-foreground mb-3">
          {title}
        </h2>
        <p className="text-[14px] md:text-[18px] text-[#667085]">{description}</p>
      </div>

      <div className="grid grid-cols-1 gap-3 ">
        {data.map((value) => (
          <ValueCard key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
}
