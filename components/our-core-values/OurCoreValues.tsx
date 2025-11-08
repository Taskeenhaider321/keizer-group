import React from "react";
import HeadingWithLine from "../headline/Headline";
import ValuesSection from "../values/values-section";
import { valuesData } from "@/app/valuedata";

export const OurCoreValues = () => {
  const teamImage = {
    src: "/keizer-core.png",
    alt: "keizer-core",
  };
  return (
    <div className="w-full max-w-7xl py-10 mx-auto ">
      <div className="px-4 md:px-0">
        <HeadingWithLine
          title="Our core values"
          color="text-black"
          lineColor="bg-[#e0e4f0]"
          align="left"
          className="mb-8 text-lg"
        />
        <ValuesSection
          title="The Values We Stand For"
          description="The principles that guide every decision, every partnership, and every step we take forward."
          data={valuesData}
          image={teamImage}
        />
      </div>
    </div>
  );
};
