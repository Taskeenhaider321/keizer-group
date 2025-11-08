import React from "react";
// import SectionCard from "../services/Services";
import HeadingWithLine from "../headline/Headline";
import SectionCard from "../services/ServicesCard";

export const MultiSector = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 pb-6 pt-10 sm:px-16 rounded-2xl bg-[#101828]">
      <HeadingWithLine
        title="Multi-Sector Leadership"
        color="text-white"
        lineColor="bg-[#475467]"
        align="left"
        className="mb-8 text-lg"
      />
      <SectionCard
        heading="The Keizer Group Division Wheel"
        headingClassName="text-[18px] md:text-[32px] font-bold text-white"
        image={{
          src: "/keizer-leadership.png",
          alt: "keizer about image",
        }}
        imageWidth={300}
        backgroundColor="bg-[#101828]"
        imagePosition="right"
        description={
          <div>
            <p className="text-[14px] sm:text-[22px] w-full max-w-[536px] text-[#d0d5dd]">
              Our division wheel represents the core strength of Keizer Group a
              unified ecosystem of diverse industries working together to drive
              growth, security, and innovation. Each segment of the wheel
              highlights a dedicated sector where we deliver world-class
              solutions: from healthcare and renewable energy to advanced
              security, telecom, and agriculture.
            </p>
            <br></br>
            <p className="text-[14px] sm:text-[22px] w-full max-w-[536px] text-[#d0d5dd]">
              This integrated structure ensures resilience, scalability, and the
              ability to meet the evolving needs of governments, corporations,
              and communities worldwide. By combining expertise across multiple
              industries, Keizer Group creates a powerful synergy that sets us
              apart as a trusted partner for high-impact projects.
            </p>
          </div>
        }
        // offerings={[
        //   { label: "Advanced healthcare facilities" },
        //   { label: "Emergency and specialist medical services" },
        //   { label: "Pharmaceutical supply chain solutions" },
        //   { label: "Health technology innovation" },
        // ]}
        button={{
          label: "Contact Our Team",
          //   onClick: () => console.log("Learn More clicked"),
        }}
      />
    </div>
  );
};
