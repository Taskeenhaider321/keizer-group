"use client";
import Link from "next/link";
import type { HeroButton } from "./hero-section";

interface HeroButtonsProps {
  buttons?: HeroButton[];
}

export function HeroButtons({ buttons }: HeroButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
      {buttons?.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className={`
            px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300
            ${
              button.variant === "secondary"
                ? "bg-white hover:bg-slate-700/50 hover:text-white text-[#344054] border border-slate-600/50"
                : "bg-[#004B8D] hover:bg-slate-100 hover:text-[#344054] text-white"
            }
          `}
        >
          {button.href ? (
            <Link href={button.href}>{button.label}</Link>
          ) : (
            button.label
          )}
        </button>
      ))}
    </div>
  );
}
