"use client";
import React from "react";
import HeadingWithLine from "../headline/Headline";
import SectionCard from "../services/Services";

export const WhoWeAre = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4  sm:p-16 rounded-2xl bg-[#F2F4F7]">
      {" "}
      <HeadingWithLine
        title="Who we are"
        color="text-black"
        lineColor="bg-[#e0e4f0]"
        align="left"
        className="mb-8 text-lg"
      />
      <SectionCard
        heading="About Keizer Group"
        headingClassName="text-[18px] md:text-[32px] font-bold text-black"
        image={{
          src: "/keizer-about.png",
          alt: "keizer about image",
        }}
        backgroundColor="bg-[#F2F4F7]"
        imagePosition="right"
        description={
          <p className="text-[14px] sm:text-[24px] w-full max-w-[536px] text-[#475467]">
            Keizer Group is a multi-sector investment and operations powerhouse.
            From cutting-edge medical solutions to advanced security services,
            from sustainable energy to telecom and agriculture, our companies
            are united under one vision: building a safer, healthier, and more
            prosperous world. {" "}
          </p>
        }
        // offerings={[
        //   { label: "Advanced healthcare facilities" },
        //   { label: "Emergency and specialist medical services" },
        //   { label: "Pharmaceutical supply chain solutions" },
        //   { label: "Health technology innovation" },
        // ]}
        button={{
          label: "Contact Our Team",
          href: "#contact-us",
          // onClick: () => console.log("Learn More clicked"),
        }}
      />
    </div>
  );
};
