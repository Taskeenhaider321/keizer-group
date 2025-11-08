"use client";

import type { ReactNode } from "react";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Button } from "../ui/button";

export interface SectionCardProps {
  // Image settings
  image?: {
    src: string;
    alt: string;
  };
  imagePosition?: "left" | "right";
  imageBgColor?: string;
  imageRounded?: boolean;

  // Heading and description
  heading?: string;
  headingClassName?: string;
  description?: string | ReactNode;
  descriptionClassName?: string;

  // Key offerings / list items
  offerings?: Array<{
    label: string;
    icon?: ReactNode;
  }>;
  offeringsTitle?: string;
  offeringsClassName?: string;

  // Button configuration
  button?: {
    label: string;
    onClick?: () => void;
    variant?:
      | "default"
      | "outline"
      | "secondary"
      | "ghost"
      | "destructive"
      | "primary";
    className?: string;
    href?: string;
  } | null;
  showButton?: boolean;

  // Layout and styling
  containerClassName?: string;
  contentClassName?: string;
  backgroundColor?: string;
  gap?: "gap-4" | "gap-6" | "gap-8" | "gap-12";
  padding?: "p-4" | "p-6" | "p-8" | "p-12";

  // Responsive control
  imageHeight?: number;
  imageWidth?: number;
}

export default function SectionCard({
  image,
  imagePosition = "left",
  // imageBgColor = "bg-slate-200",
  imageRounded = true,
  heading,
  headingClassName = "text-xl md:text-4xl font-bold mb-4",
  description,
  descriptionClassName = "text-base text-gray-600 mb-8 leading-relaxed",
  offerings,
  offeringsTitle = "Key Offerings:",
  offeringsClassName = "space-y-2 mb-8",
  button,
  showButton = true,
  containerClassName = "",
  contentClassName = "",
  backgroundColor = "bg-white",
  gap = "gap-4",
  // padding = "py-8",
  imageHeight = 300,
  imageWidth = 400,
}: SectionCardProps) {
  const isImageLeft = imagePosition === "left";

  const content = (
    <div className={`flex-1 ${contentClassName}`}>
      {heading && <h2 className={headingClassName}>{heading}</h2>}

      {description && <div className={descriptionClassName}>{description}</div>}

      {offerings && offerings.length > 0 && (
        <div className={offeringsClassName}>
          {offeringsTitle && (
            <h3 className="font-semibold text-gray-900 mb-4">
              {offeringsTitle}
            </h3>
          )}
          <ul className="space-y-2 list-disc list-inside">
            {offerings.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showButton && button && (
        <div className="mt-6">
          {button.href ? (
            <a href={button.href}>
              <Button
                variant={button.variant || "primary"}
                className={button.className}
              >
                {button.label}
              </Button>
            </a>
          ) : (
            <Button
              size="lg"
              rounded="full"
              variant={button.variant || "primary"}
              onClick={button.onClick}
              className={button.className}
            >
              {button.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );

  const imageElement = image && (
    <div
      className={`flex-1 flex items-center justify-center overflow-hidden  ${
        imageRounded ? "rounded-3xl" : ""
      }`}
    >
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        width={imageWidth}
        height={imageHeight}
        className="w-full h-auto object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  );

  return (
    <section
      className={`${backgroundColor} py-8 rounded-lg ${containerClassName}`}
    >
      <div className={`flex flex-col md:flex-row ${gap} items-stretch`}>
        {isImageLeft ? (
          <>
            {imageElement}
            {content}
          </>
        ) : (
          <>
            {content}
            {imageElement}
          </>
        )}
      </div>
    </section>
  );
}
