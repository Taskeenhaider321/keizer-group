"use client";
import { useState } from "react";
import Marquee from "react-fast-marquee";

interface AnnouncementBarProps {
  text: string;
  repeat?: number; // number of times to repeat the text
  backgroundColor?: string;
  textColor?: string;
  separator?: string; // custom separator between texts
}

export function AnnouncementBar({
  text,
  repeat = 2,
  backgroundColor = "bg-[#004B8D]",
  textColor = "text-white",
  separator = "   •   ", // default spacing and separator
}: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  // Repeat text multiple times with separator
  const repeatedText = Array(repeat).fill(text).join("\u00A0\u00A0\u00A0\u00A0•\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"); 

  return (
    <div
      className={`${backgroundColor} ${textColor} flex items-center justify-between px-4 py-2`}
    >
      {/* Scrolling text */}
      <div className="flex-1">
        <Marquee gradient={false} speed={50}>
          {repeatedText}
        </Marquee>
      </div>

      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-white hover:text-gray-200 transition-colors"
        aria-label="Close announcement"
      >
        ✕
      </button>
    </div>
  );
}
