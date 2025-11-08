"use client";

import React from "react";
import { cn } from "@/lib/utils"; // optional if you already use cn utility for class merging

interface HeadingWithLineProps {
  title: string;
  color?: string; // optional custom text color
  lineColor?: string; // color for the horizontal line
  align?: "left" | "center" | "right"; // alignment option
  className?: string;
}

const HeadingWithLine: React.FC<HeadingWithLineProps> = ({
  title,
  color = "text-gray-900",
  lineColor = "",
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
        `w-full flex flex-col  px-4 lg:mx-2 xl:mx-0 ${alignment} gap-2`,
        className
      )}
    >
      {/* Heading Row */}
      <div className="flex items-center gap-2">
        {/* SVG Dot */}
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <circle cx="4" cy="4" r="4" fill="black" />
        </svg>

        {/* Heading Text */}
        <h2 className={cn("text-lg font-semibold tracking-tight", color)}>
          {title}
        </h2>
      </div>

      {/* Horizontal Line */}
      <div
        className={cn(
          `w-full h-[2px] ${lineColor} rounded-full`,
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
