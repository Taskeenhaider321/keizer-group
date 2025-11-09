"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export interface SectionCardProps {
  image?: { src: string; alt: string };
  imagePosition?: "left" | "right";
  imageRounded?: boolean;

  contentImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };

  heading?: string;
  headingClassName?: string;
  description?: string | ReactNode;
  descriptionClassName?: string;

  offerings?: Array<{ label: string; icon?: ReactNode }>;
  offeringsTitle?: string;
  offeringsClassName?: string;

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

  containerClassName?: string;
  contentClassName?: string;
  backgroundColor?: string;
  gap?: "gap-4" | "gap-6" | "gap-8" | "gap-12";
  imageHeight?: number;
  imageWidth?: number;
}

export default function SectionCard({
  image,
  imagePosition = "left",
  imageRounded = true,
  contentImage,
  heading,
  headingClassName = "text-xl md:text-4xl font-bold mb-4",
  description,
  descriptionClassName = "text-sm md:text-base text-gray-600 mb-8 leading-relaxed",
  offerings,
  offeringsTitle = "Key Offerings:",
  offeringsClassName = "space-y-1 md:space-y-2 mb-8",
  button,
  showButton = true,
  containerClassName = "",
  contentClassName = "",
  backgroundColor = "bg-white",
  gap = "gap-8",
  imageHeight = 300,
  imageWidth = 400,
}: SectionCardProps) {
  const isImageLeft = imagePosition === "left";

  const mainImage = image && (
    <div
      className={`flex-1 flex items-center justify-center overflow-hidden ${
        imageRounded ? "rounded-3xl" : ""
      }`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={imageWidth}
        height={imageHeight}
        className="w-full h-auto object-cover md:h-full"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  );

  const content = (
    <div className={`flex-1 text-left ${contentClassName}`}>
      {/* Show heading only on desktop */}
      {heading && (
        <h2 className={`${headingClassName} hidden md:block`}>{heading}</h2>
      )}

      {/* Optional content image */}
      {contentImage && (
        <div className="mb-6  flex items-center justify-center">
          <Image
            src={contentImage.src}
            alt={contentImage.alt}
            width={contentImage.width || 200}
            height={contentImage.height || 150}
            className="rounded-xl "
          />
        </div>
      )}

      {description && <div className={descriptionClassName}>{description}</div>}

      {offerings && offerings.length > 0 && (
        <div className={offeringsClassName}>
          {offeringsTitle && (
            <h3 className="font-semibold text-gray-900 mb-4">
              {offeringsTitle}
            </h3>
          )}
          <ul className="space-y-1 md:space-y-2 list-disc list-inside">
            {offerings.map((item, index) => (
              <li key={index} className="text-gray-700 text-sm md:text-lg">
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

  return (
    <section
      className={`${backgroundColor} px-5 lg:px-2 xl:px-0 py-8 rounded-lg ${containerClassName}`}
    >
      {/* Mobile layout */}
      <div className={`flex flex-col md:hidden ${gap}`}>
        {heading && (
          <h2 className={`${headingClassName} text-center`}>{heading}</h2>
        )}
        {mainImage}
        {content}
      </div>

      {/* Desktop layout */}
      <div
        className={`hidden md:flex md:flex-row ${gap} items-stretch lg:items-center ${
          isImageLeft ? "" : "md:flex-row-reverse"
        }`}
      >
        {mainImage}
        {content}
      </div>
    </section>
  );
}
