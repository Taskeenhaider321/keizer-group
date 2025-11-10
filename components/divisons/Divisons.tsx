"use client";

// import React from "react";
import Heading from "@/components/ui/heading";
// import { Text } from "@/components/ui/";
// import { CustomButton } from "@/components/ui/CustomButton";
// import { Badge } from "@/components/ui/Badge";
import SectionCard from "@/components/services/Services";
import HeadingWithLine from "../headline/Headline";

export default function OurDivison() {
  return (
    <main id="our-divisions" className="">
      <div className="max-w-7xl py-10 mx-auto">
        <HeadingWithLine
          title="Our Divisions"
          color="text-black"
          lineColor="bg-[#D0D5DD]"
          align="left"
          className="mb-8"
        />
        {/* Section Cards */}
        <SectionCard
          heading="Keizer Medical"
          image={{
            src: "/keizer-medical.png",
            alt: "Medical professional with shield",
          }}
          imagePosition="left"
          description={
            <p>
              Delivering world-class healthcare solutions to meet the needs of
              growing populations. Our services include hospital operations,
              specialized clinics, medical supply distribution.
            </p>
          }
          offerings={[
            { label: "Advanced healthcare facilities." },
            { label: "Emergency and specialist medical services." },
            { label: "Pharmaceutical supply chain solutions." },
            { label: "Health technology innovation." },
          ]}
          button={{
            label: "Learn More",
            href: "/keizer-medical",
            // onClick: () => console.log("Learn More clicked"),
          }}
        />

        <div className="mt-8">
          <SectionCard
            heading="Mcgee&Durraniconsulting / Security Services"
            image={{
              src: "/keizer-security.png",
              alt: "Medical technology",
            }}
            imagePosition="right"
            description={
              <p>
                Trusted by governments and corporations for advanced security
                solutions.
              </p>
            }
            offerings={[
              { label: "Specialist intelligence consultancy." },
              { label: "Close protection and executive security." },
              { label: "Risk assessment & crisis management." },
              { label: "Corporate and government training programs." },
            ]}
            button={{
              label: "Learn More",
              href: "/keizer-security",
              // onClick: () => console.log("Learn More clicked"),
            }}
          />
        </div>
        <div className="mt-8">
          <SectionCard
            heading="Minerals, Cement & Salt (Keizer Minerals)"
            image={{
              src: "/keizer-minerals.png",
              alt: "Minerals and cements",
            }}
            imagePosition="left"
            description={
              <p>
                With a strong presence in natural resource markets, Keizer Group
                is engaged in sustainable extraction, production, and global
                trade.
              </p>
            }
            offerings={[
              { label: "Mineral trading and supply." },
              { label: "Salt production for industrial and consumer markets." },
              { label: "Ethical, environmentally responsible sourcing." },
            ]}
            button={{
              label: "Learn More",
              href: "/keizer-minerals",
              // onClick: () => console.log("Learn More clicked"),
            }}
          />
        </div>

        <div className="mt-8">
          <SectionCard
            heading="Telecom (Keizer Telecom, with Fabcomm)"
            image={{
              src: "/keizer-telecom.png",
              alt: "Team collaboration",
            }}
            imagePosition="right"
            description={
              <p>
                Delivering sovereign, military-grade communication systems
                designed for governments, defense, and enterprises that require
                uncompromising security and resilience.
              </p>
            }
            offerings={[
              { label: "Military-Grade Encrypted Networks." },
              { label: "Privatised, Sovereign Base Stations." },
              { label: "Borderless Satellite Connectivity." },
            ]}
            button={{
              label: "Learn More",
              href: "/keizer-communications",
              // onClick: () => console.log("Learn More clicked"),
            }}
          />
        </div>

        <div className="mt-8">
          <SectionCard
            heading="Agriculture & Fertiliser (Keizer Agriculture, with EcoBia Food Waste Solutions)"
            image={{
              src: "/keizer-agriculture.png",
              alt: "Team collaboration",
            }}
            imagePosition="left"
            description={
              <p>
                Transforming agriculture with innovation and sustainability.
              </p>
            }
            offerings={[
              { label: "Organic fertilisers and soil enhancement." },
              { label: "EcoBia food waste solutions." },
              { label: "Custom built fertiliser machines." },
            ]}
            button={{
              label: "Learn More",
              href: "/keizer-agriculture",
              // onClick: () => console.log("Learn More clicked"),
            }}
          />
        </div>
      </div>
    </main>
  );
}
