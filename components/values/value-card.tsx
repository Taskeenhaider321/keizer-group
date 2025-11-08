import React from "react";

interface ValueProps {
  value: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode; // SVG or any React element
  };
}

export default function ValueCard({ value }: ValueProps) {
  return (
    <div className="flex items-stretch gap-4 p-3  rounded-lg bg-card border border-[#EAECF0] cursor-pointer hover:shadow-md transition-shadow duration-300">
      {/* Icon Section (auto-matches height of text section) */}
      <div className="flex items-center justify-center bg-[#EBF5FF] dark:bg-blue-900/20 rounded-[12px] min-w-[60px]">
        <div className="flex items-center justify-center h-full p-3">
          {value.icon}
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center flex-1">
        <h3 className="font-semibold text-foreground mb-1 text-[16px] md:text-[24px] leading-tight">
          {value.title}
        </h3>
        <p className="text-sm md:text-base text-[#667085] leading-relaxed">
          {value.description}
        </p>
      </div>
    </div>
  );
}
