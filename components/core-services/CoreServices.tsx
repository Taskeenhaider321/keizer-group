"use client";
import React from "react";
import HeadingWithLine from "../headline/Headline";
import SectionCard from "../services/Services";
import { FeatureCard } from "../feature-card/feature-card";

const hospitalData = {
  image: {
    src: "/hospital-service.png",
    alt: "Education Facilities",
  },
  title: "Hospital & Healthcare Infrastructure",
  description: [
    "Design, financing, construction, and management of hospitals, clinics, and specialized centers.",
    "Modular and mobile hospitals for rapid deployment in conflict zones or disaster-hit regions.",
    "Modern facility management to ensure compliance with WHO and international standards.",
  ],
};
const emergencyData = {
  image: {
    src: "/hospital-emergency.png",
    alt: "Education Facilities",
  },
  title: "Emergency Response & Mobile Units",
  description: [
    "Manufacturing and deployment of fully equipped, state-of-the-art ambulances.",
    "Fleet customization: basic life support, advanced cardiac life support, and mobile ICUs.",
    "Integrated national ambulance networks with dispatch and tracking systems.",
  ],
};
const equipmentData = {
  image: {
    src: "/medical-emergency.png",
    alt: "Education Facilities",
  },
  title: "Medical Equipment & Device Manufacturing",
  description: [
    "Syringe Production: High-volume, sterile syringes meeting WHO and FDA standards.",
    "Critical Devices: Ventilators, infusion pumps, diagnostic kits, and surgical instruments.",
    "Protective Equipment: Gloves, masks, and disposable protective gear for frontline workers.",
    "Innovation Pipeline: Investing in smart medical devices and next-gen diagnostics.",
  ],
};
export const CoreServices = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4  sm:p-16 rounded-2xl bg-white">
      {" "}
      <HeadingWithLine
        title="Core Services"
        color="text-black"
        lineColor="bg-[#e0e4f0]"
        align="left"
        className="mb-8 text-lg"
      />
      <h2 className="text-xl md:text-[36px] font-bold mb-4 md:mb-10">
        Keizer Medical Services
      </h2>
      <div className="space-y-4">
        <FeatureCard {...hospitalData} />
        <FeatureCard {...emergencyData} />
        <FeatureCard {...equipmentData} />
      </div>
    </div>
  );
};
