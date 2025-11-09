"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface HeadingWithLineProps {
  title: string;
  color?: string; // text color class
  lineColor?: string; // line color class
  align?: "left" | "center" | "right";
  className?: string;
}

const HeadingWithLine: React.FC<HeadingWithLineProps> = ({
  title,
  color = "text-gray-900",
  lineColor = "bg-gray-300",
  align = "left",
  className,
}) => {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <div
      className={cn(
        `w-full flex flex-col px-4 lg:mx-2 xl:mx-0 ${alignment} gap-2`,
        className
      )}
    >
      {/* Heading Row */}
      <div className="flex items-center gap-2">
        {/* SVG Dot (color matches title) */}
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("shrink-0 fill-current", color)}
        >
          <circle cx="4" cy="4" r="4" />
        </svg>

        {/* Heading Text */}
        <h2 className={cn("text-lg font-semibold tracking-tight", color)}>
          {title}
        </h2>
      </div>

      {/* Horizontal Line */}
      <div
        className={cn(
          `w-full h-[2px] rounded-full ${lineColor}`,
          align === "center"
            ? "mx-auto"
            : align === "right"
            ? "ml-auto"
            : "mr-auto"
        )}
      />
    </div>
  );
};

export default HeadingWithLine;
