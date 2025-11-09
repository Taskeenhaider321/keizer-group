"use client";
import Image from "next/image";
// import { IndustryCard } from "./industry-card";
import { Shield, Lock, Globe } from "lucide-react"; // Example icons
import { IndustryCard } from "../industries/industry-card";
import HeadingWithLine from "../headline/Headline";
import { BlogTwoGrid } from "../blog/blog-two-grid";
import { BlogCardsGrid, FeatureData } from "../blog/blog-card-grid";

export function SecurityServices() {
  const communicationFeatures: FeatureData[] = [
    {
      id: "comm-1",
      title: "Close Protection Services",
      //   description: "End-to-end encrypted communication",
      features: [
        "Highly trained Close Protection Officers (CPOs) for government officials, executives, and high-net-worth individuals.",
        "Discreet and overt security for events, travel, and daily operations.",
        "Teams trained in threat avoidance, emergency evacuation, and advanced driving.",
      ],
      imageUrl: "/security-services-one.png",
      imageAlt: "Secure Messaging feature",
    },
    {
      id: "comm-2",
      title: "Specialist Intelligence & Risk Consultancy",
      //   description: "Crystal clear audio communication",
      features: [
        "Threat monitoring and intelligence gathering.",
        "Political, geographic, and operational risk assessments.",
        "Crisis planning and contingency management.",
      ],
      imageUrl: "/security-services-two.png",
      imageAlt: "Voice Calling feature",
    },
  ];

  const servicesFeatures: FeatureData[] = [
    {
      id: "comm-1",
      title: "Security Training Programs",
      description: "End-to-end encrypted communication",
      features: [
        "Custom training for military, law enforcement, and corporate teams.",
        "Curriculum covering surveillance detection, crisis management, and tactical operations.",
        "Delivered by seasoned instructors with decades of operational experience.",
      ],
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8NgJvDkCroRrV9MmiUn68Twl2Yn6wa.png",
      imageAlt: "Secure Messaging feature",
    },
    {
      id: "comm-2",
      title: "Dry Fire Weapons Training",
      description: "Crystal clear audio communication",
      features: [
        "Cutting-edge dry fire training weapons with built-in laser technology for precision marksmanship training.",
        "Weapons engineered for retention and realistic handling without live ammunition risk.",
        "Used to train CPOs, security teams, and law enforcement in safe, repeatable, and cost-effective environments.",
      ],
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8NgJvDkCroRrV9MmiUn68Twl2Yn6wa.png",
      imageAlt: "Voice Calling feature",
    },
    {
      id: "comm-3",
      title: "Infrastructure & Asset Protection",
      description: "High-quality video communication",
      features: [
        "Cutting-edge dry fire training weapons with built-in laser technology for precision marksmanship training.",
        "Weapons engineered for retention and realistic handling without live ammunition risk.",
        "Used to train CPOs, security teams, and law enforcement in safe, repeatable, and cost-effective environments.",
      ],
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8NgJvDkCroRrV9MmiUn68Twl2Yn6wa.png",
      imageAlt: "Video Conferencing feature",
    },
  ];

  return (
    <section className="w-full max-w-[1400px] rounded-2xl sm:py-6 py-14 px-4 md:px-8 my-6 ">
      <HeadingWithLine
        title="Core Services"
        color="text-black"
        lineColor="bg-[#D0D5DD]"
        align="left"
        className="mb-12 mt-8 text-lg"
      />
      {/* <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3 my-10 leading-tight">
        Keizer Security Services
      </h2> */}
      <div>
        <BlogTwoGrid
          data={communicationFeatures}
          title="Keizer Security Services"
          //   subtitle="Stay connected with powerful communication tools"
        />
        <BlogCardsGrid
          data={servicesFeatures}
          //   title="Communication Features"
          //   subtitle="Stay connected with powerful communication tools"
        />
      </div>
    </section>
  );
}
