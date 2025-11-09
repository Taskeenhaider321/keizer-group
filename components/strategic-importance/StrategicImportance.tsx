"use client";
import React from "react";
import HeadingWithLine from "../headline/Headline";
import SectionCard from "../services/Services";

interface StrategicImportanceProps {
  sectionTitle?: string;
  sectionTitleColor?: string;
  sectionLineColor?: string;
  sectionAlign?: "left" | "center" | "right";
  sectionClassName?: string;

  // SectionCard Props
  heading?: string;
  headingClassName?: string;
  image?: { src: string; alt: string };
  imagePosition?: "left" | "right";
  description?: React.ReactNode;
  backgroundColor?: string;
  offerings?: Array<{ label: string; icon?: React.ReactNode }>;
  button?: {
    label: string;
    onClick?: () => void;
    href?: string;
    variant?:
      | "default"
      | "outline"
      | "secondary"
      | "ghost"
      | "destructive"
      | "primary";
    className?: string;
  } | null;
}

export const StrategicImportance = ({
  // Default heading section props
  sectionTitle = "Strategic Importances",
  sectionTitleColor = "text-black",
  sectionLineColor = "bg-[#e0e4f0]",
  sectionAlign = "left",
  sectionClassName = "mb-8 text-lg",

  // Default section card props
  heading = "Why Healthcare Comes First",
  headingClassName = "text-[18px] md:text-[32px] font-bold text-black",
  image = { src: "/strategic-importance.png", alt: "keizer about image" },
  imagePosition = "right",
  backgroundColor = "bg-[#EBF5FF]",
  description = (
    <p className="text-[14px] sm:text-[22px] w-full max-w-[536px] text-[#475467]">
      Healthcare is the foundation of economic growth and social stability.
      Keizer Medical recognizes that nations with strong health systems create
      stronger, more productive societies. Our role is to provide governments
      and partners with turnkey healthcare solutions: from building hospitals
      and training staff to deploying pharmaceuticals and cutting-edge digital
      technologies.
    </p>
  ),
  offerings,
  button,
}: StrategicImportanceProps) => {
  return (
    <div
      className={`w-full max-w-[1400px] mx-auto p-4 sm:p-16 rounded-2xl ${backgroundColor}`}
    >
      <HeadingWithLine
        title={sectionTitle}
        color={sectionTitleColor}
        lineColor={sectionLineColor}
        align={sectionAlign}
        className={sectionClassName}
      />

      <SectionCard
        heading={heading}
        headingClassName={headingClassName}
        image={image}
        imagePosition={imagePosition}
        backgroundColor={backgroundColor}
        description={description}
        offerings={offerings}
        button={button}
      />
    </div>
  );
};
