import OurDivison from "@/components/divisons/Divisons";
import ValuesSection from "@/components/values/values-section";
import React from "react";
import { valuesData } from "./valuedata";
import { IndustriesSection } from "@/components/industries/industries-section";
import {
  defenseFeaturedImage,
  defenseIndustries,
} from "@/data/defense-industries";
import { FeatureCard } from "@/components/feature-card/feature-card";
import { BlogCardsGrid, FeatureData } from "@/components/blog/blog-card-grid";
import { BlogTwoGrid } from "@/components/blog/blog-two-grid";
import { ServiceLabel } from "@/components/services-label/ServiceLabel";
import { ServiceCardsGrid } from "@/components/services-label/ServiceLabelGrid";
import SectionCard from "@/components/services/Services";
import HeadingWithLine from "@/components/headline/Headline";
import { WhoWeAre } from "@/components/who-we-are/WhoWeAre";
import { OurCoreValues } from "@/components/our-core-values/OurCoreValues";
import { MultiSector } from "@/components/multi-sector/MultiSector";
import { ContactForm } from "@/components/contact/ContactUs";
import Footer from "@/components/footer/Footer";
import { GroupLeads } from "@/components/group-leads/GroupLeads";
import { HeroSection } from "@/components/hero/hero-section";
import { Divide } from "lucide-react";

const communicationFeatures: FeatureData[] = [
  {
    id: "comm-1",
    title: "Secure Messaging",
    description: "End-to-end encrypted communication",
    features: [
      "Military-grade encryption",
      "Instant message delivery",
      "Group chat support",
    ],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8NgJvDkCroRrV9MmiUn68Twl2Yn6wa.png",
    imageAlt: "Secure Messaging feature",
  },
  {
    id: "comm-2",
    title: "Voice Calling",
    description: "Crystal clear audio communication",
    features: [
      "HD voice quality",
      "Background noise cancellation",
      "Conference calling",
    ],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8NgJvDkCroRrV9MmiUn68Twl2Yn6wa.png",
    imageAlt: "Voice Calling feature",
  },
  {
    id: "comm-3",
    title: "Video Conferencing",
    description: "High-quality video communication",
    features: [
      "Up to 4K resolution",
      "Screen sharing",
      "Recording capabilities",
    ],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8NgJvDkCroRrV9MmiUn68Twl2Yn6wa.png",
    imageAlt: "Video Conferencing feature",
  },
];

// Example 2: Education facilities (reusing same component with different data)
const educationData = {
  image: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8NgJvDkCroRrV9MmiUn68Twl2Yn6wa.png",
    alt: "Education Facilities",
  },
  title: "Education & Learning Centers",
  description: [
    "Design and construction of state-of-the-art educational facilities.",
    "Technology-integrated classrooms and learning spaces.",
    "Sustainable and accessible infrastructure for all students.",
  ],
};

const serviceData = [
  {
    title: "Government Agencies & Ministries of Defence",
    description: "Interior – elite-level training and protective services.",
  },
  {
    title: "Corporate Clients & Multinationals",
    description:
      "executive protection, risk assessment, and security for operations.",
  },
  {
    title: "High-Net-Worth Individuals & Families",
    description: "discreet, 24/7 personal security and protective services.",
  },
  {
    title: "Critical infrastructure Operators",
    description: "airports, ports, telecom hubs, and energy facilities.",
  },
];
const page = () => {
  const teamImage = {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8NgJvDkCroRrV9MmiUn68Twl2Yn6wa.png",
    alt: "Team collaboration - hands coming together",
  };
  return (
    <div>
      <HeroSection
        badge="Trusted by leading industries across Africa"
        heading="Driving Growth. Securing Futures. Empowering "
        headingHighlight="Communities."
        description="Transforming industries through innovation, security, and opportunity— creating long-term impact for people and businesses."
        // buttons={[
        //   {
        //     label: "Explore Our Company",
        //     variant: "primary",
        //     href: "#our-journey",
        //   },
          // {
          //   label: "Learn More",
          //   variant: "secondary",
          //   href: "/about",
          // },
        // ]}
        backgroundImage="/hero-image.jpg"
        accentColor="from-cyan-400 to-blue-500"
      />
      <div className="w-full max-w-7xl mx-auto">
        <SectionCard
          heading="The Keizer Group Journey"
          image={{
            src: "/keizer-journey.png",
            alt: "Medical professional with shield",
          }}
          imagePosition="right"
          description={
            <div>
              <p>
                KeizerGroup is a premier multi-sector enterprise dedicated to
                fostering innovation and building a safer, healthier, and more
                prosperous world. Our journey began with a tangible commitment
                to progress with the establishment of Keizer Medical Equipment
                in Lagos, Nigeria in 2018. This foundational experience on the
                ground provided invaluable insight into the dynamic
                opportunities and unique challenges within African markets.
              </p>
              <br></br>
              <p>
                Under the strategic stewardship of our parent investment firm,
                Alice Capital, we have since evolved into a unified ecosystem.
                From our initial base in Nigeria, our vision has expanded to
                implant integrated, sustainable solutions across the continent.
                We are strategically building a portfolio of synergistic
                companies designed to address critical needs and drive
                meaningful development.
              </p>
            </div>
          }
        />
      </div>
      <WhoWeAre />
      <OurCoreValues />
      <MultiSector />
      <OurDivison />

      <GroupLeads />

      {/* <ValuesSection data={valuesData} image={teamImage} />
      <IndustriesSection
        industries={defenseIndustries}
        title="Defense & Military Applications"
        featuredImage={defenseFeaturedImage}
      /> */}
      {/* <FeatureCard {...educationData} />
      <BlogCardsGrid
        data={communicationFeatures}
        title="Communication Features"
        subtitle="Stay connected with powerful communication tools"
      />
      <BlogTwoGrid
        data={communicationFeatures}
        title="Communication Features"
        subtitle="Stay connected with powerful communication tools"
      />
      <ServiceCardsGrid items={serviceData} columns={4} /> */}
    </div>
  );
};

export default page;
