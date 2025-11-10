"use client";
import Link from "next/link";
import type { HeroButton } from "./hero-section";

interface HeroButtonsProps {
  buttons?: HeroButton[];
}

export function HeroButtons({ buttons }: HeroButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
      {buttons?.map((button, index) => {
        const baseClasses = `
          px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300
        `;

        const variantClasses =
          button.variant === "secondary"
            ? "bg-white hover:bg-slate-700/50 hover:text-white text-[#344054] border border-slate-600/50"
            : "bg-[#004B8D] hover:bg-slate-100 hover:text-[#344054] text-white";

        // If the button has an href, render as Link or <a>
        if (button.href) {
          const isAnchorLink = button.href.startsWith("#");

          if (isAnchorLink) {
            // For same-page anchor navigation
            return (
              <a
                key={index}
                href={button.href}
                className={`${baseClasses} ${variantClasses}`}
              >
                {button.label}
              </a>
            );
          } else {
            // For Next.js route navigation
            return (
              <Link
                key={index}
                href={button.href}
                className={`${baseClasses} ${variantClasses}`}
              >
                {button.label}
              </Link>
            );
          }
        }

        // Otherwise render as normal button
        return (
          <button
            key={index}
            onClick={button.onClick}
            className={`${baseClasses} ${variantClasses}`}
          >
            {button.label}
          </button>
        );
      })}
    </div>
  );
}
