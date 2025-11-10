import { BlogCardsGrid, FeatureData } from "@/components/blog/blog-card-grid";
import { BlogTwoGrid } from "@/components/blog/blog-two-grid";
import { ClientsStakeholder } from "@/components/clients-stakeholder/ClientsStakeholder";
import { CoreServices } from "@/components/core-services/CoreServices";
import HeadingWithLine from "@/components/headline/Headline";
import { HeroSection } from "@/components/hero/hero-section";
import { FullImage } from "@/components/image-component/Image";
import { IndustriesSection } from "@/components/industries/industries-section";
import ImagePdfViewerCompact from "@/components/PdfViewer/ImagePdfViewer";
import { SecurityServices } from "@/components/security-services/SecurityServices";
import SectionCard from "@/components/services/Services";
import { StrategicImportance } from "@/components/strategic-importance/StrategicImportance";
import { WhyGovernments } from "@/components/why-governments/WhyGovernments";
import {
  defenseFeaturedImage,
  defenseIndustries,
} from "@/data/defense-industries";
import { Divide } from "lucide-react";
import React from "react";
const contractImages = Array.from({ length: 12 }, (_, i) => `/pdf-images/terms/page-${i + 1}.png`);

const keizerCommunications = () => {
  const communicationFeatures: FeatureData[] = [
    {
      id: "comm-1",
      title: "Military-Grade Encryption",
      //   description: "End-to-end encrypted communication",
      features: [
        "End-to-end encrypted communications protected against interception.",
        "Compliant with defence and intelligence standards",
      ],
      imageUrl: "/tele-1.png",
      imageAlt: "Secure Messaging feature",
    },
    {
      id: "comm-2",
      title: "Privatised Base Stations",
      //   description: "Crystal clear audio communication",
      features: [
        "Independent infrastructure giving governments and enterprises full control",
        "Operates outside civilian networks for maximum sovereignty and resilience",
      ],
      imageUrl: "/tele-2.png",
      imageAlt: "Voice Calling feature",
    },
    {
      id: "comm-3",
      title: "Limitless Connectivity",
      //   description: "Crystal clear audio communication",
      features: [
        "Dual connectivity: works on cellular data and Wi-Fi for global reach",
        "No range limitations — unlike walkie-talkies, distance does not restrict communication.",
      ],
      imageUrl: "/tele-3.png",
      imageAlt: "Voice Calling feature",
    },
    {
      id: "comm-4",
      title: "Emergency SOS Button",
      //   description: "Crystal clear audio communication",
      features: [
        "Immediate distress signalling built into every device",
        "Direct alerts to command centres for rapid response",
      ],
      imageUrl: "/tele-4.png",
      imageAlt: "Voice Calling feature",
    },
    {
      id: "comm-5",
      title: "Live GPS Tracking",
      //   description: "Crystal clear audio communication",
      features: [
        "Real-time geolocation tracking for personnel and assets",
        "Command-and-control visibility for high-risk or dispersed operations",
      ],
      imageUrl: "/tele-5.png",
      imageAlt: "Voice Calling feature",
    },
    {
      id: "comm-4",
      title: "Advanced Features on Select Models",
      //   description: "Crystal clear audio communication",
      features: [
        "NFC capabilities enabling secure identification and access control",
        "Photo capture & transmission for rapid intelligence sharing in the field",
      ],
      imageUrl: "/tele-6.png",
      imageAlt: "Voice Calling feature",
    },
  ];
  return (
    <div>
      <HeroSection
        // badge="Trusted by leading industries across Africa"
        heading="Keizer Communication"
        description="Secure, sovereign, and borderless communication networks for governments and critical industries."
        // buttons={[
        //   {
        //     label: "Explore Our Companies",
        //     variant: "primary",
        //     href: "/companies",
        //   },
        //   {
        //     label: "Learn More",
        //     variant: "secondary",
        //     href: "/about",
        //   },
        // ]}
        backgroundImage="/telecom-hero.jpg"
        accentColor="from-cyan-400 to-blue-500"
      />
      <div className="w-full py-10 max-w-7xl mx-auto">
        <HeadingWithLine
          title="Introduction"
          color="text-black"
          lineColor="bg-[#e0e4f0]"
          align="left"
          className="mb-8 text-lg"
        />
        <SectionCard
          contentImage={{
            src: "/fabcom-telecom.png",
            alt: "Growth chart",
          }}
          heading="Fabcomm Telecommunications"
          image={{
            src: "/tele-into.png",
            alt: "Medical professional with shield",
          }}
          imagePosition="left"
          description={
            <div>
              <p className="text-black">
                Fabcomm, in partnership with Keizer Group, delivers
                sovereign-grade telecommunications systems designed for defense,
                government, and enterprise clients who cannot afford
                communication failure.
              </p>
            </div>
          }
        />
        <StrategicImportance
          sectionTitle="Strategic Importance"
          sectionLineColor="bg-[#D0D5DD]"
          backgroundColor="bg-[#EBF5FF]"
          heading="Why Fabcomm Matters"
          image={{
            src: "/why-febcomm.png",
            alt: "Security officers on duty",
          }}
          offerings={[
            { label: "Total security against interception" },
            {
              label:
                "Seamless communication across borders, oceans, and remote terrains",
            },
            {
              label:
                "Privatised networks ensuring complete communication sovereignty",
            },
          ]}
          description={
            <div>
              {" "}
              <p className="text-gray-700 text-lg">
                Unlike conventional walkie-talkies and consumer devices, Fabcomm
                technologies combine military-grade encryption, limitless
                connectivity, and privatised base station control to provide
                secure, uninterrupted communication across any geography.
              </p>
              <br></br>
              <p className="text-gray-700 text-lg">
                Our devices and systems are engineered for those who
                demand absolute reliability, operational security, and
                independence from public networks.
              </p>
              <br></br>
              <p className="text-gray-700 text-lg">
                In a world where data interception, network failures, and cyber
                threats can compromise missions, Fabcomm sets the standard
                for mission-critical communications. Whether deployed by
                military units, government agencies, or corporate security
                teams, our systems offer:
              </p>
              <br></br>
              <p className="text-gray-700 text-lg">
                Fabcomm provides the backbone for national security, emergency
                response, and corporate continuity.
              </p>
            </div>
          }
          // offerings={[
          //   { label: "Advanced security systems" },
          //   { label: "Training and consultancy" },
          //   { label: "Risk management" },
          // ]}
          // button={{
          //   label: "Explore Services",
          //   href: "/security",
          // }}
        />
        <section className="w-full max-w-[1400px] rounded-2xl sm:py-6 py-14 px-4 md:px-8 my-6 ">
          <HeadingWithLine
            title="Core Device Features"
            color="text-black"
            lineColor="bg-[#D0D5DD]"
            align="left"
            className="mb-12 mt-8 text-lg"
          />
          {/* <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3 my-10 leading-tight">
        Keizer Security Services
      </h2> */}
          <div>
            <BlogCardsGrid
              data={communicationFeatures}
              title="Keizer Communication Features"
              // subtitle="Stay connected with powerful communication tools"
            />
          </div>
        </section>
        <div className="bg-[#1a2131] rounded-2xl my-10 px-6 py-10">
          <HeadingWithLine
            title="Applications"
            color="text-white"
            lineColor="bg-[#D0D5DD]"
            align="left"
            className="mb-12 mt-8 bg-[#1a2131] text-lg"
          />
          <IndustriesSection
            industries={defenseIndustries}
            title="Industries & Mission-Critical Applications"
            featuredImage={defenseFeaturedImage}
          />
        </div>

        {/* <div className="my-10 w-full max-w-7xl mx-auto">
          <HeadingWithLine
            title="Sustainability & Responsibility"
            color="text-black"
            lineColor="bg-[#e0e4f0]"
            align="left"
            className="mb-8 text-lg"
          />
          <SectionCard
            // contentImage={{
            //   src: "/durani-image.png",
            //   alt: "Growth chart",
            // }}
            heading="Responsible Resource Management"
            image={{
              src: "/mineral-sustainability.png",
              alt: "Medical professional with shield",
            }}
            imagePosition="left"
            description={
              <div>
                <p className="text-[#475467]">
                  Keizer Minerals is committed to responsible resource
                  management. Across cement, palm oil, salt, and water, we
                  ensure our operations:
                </p>
              </div>
            }
            offerings={[
              {
                label:
                  "Protect the environment through reduced emissions and efficient processes.",
              },
              {
                label:
                  "Support local communities with employment, training, and development.",
              },
              {
                label:
                  "Operate transparently with full compliance to international trade and environmental standards.",
              },
              {
                label:
                  "Prioritize renewable energy integration within our production facilities.",
              },
            ]}
          />
        </div>

        <ClientsStakeholder
          title="Who We Serve"
          items={[
            {
              title: "Governments & Public Authorities -",
              description:
                "supplying materials for national infrastructure and essential resources.",
            },
            {
              title: "Construction & Industrial Corporations -",
              description:
                "guaranteed supply of cement, salt, and industrial inputs",
            },
            {
              title: "Food & Consumer Goods Companies -",
              description:
                "palm oil and mineral water for production and distribution.",
            },
          ]}
          columns={3}
        />

        <FullImage src="/mineral-full.png" alt="Keizer Medical Banner" /> */}

        {/* <WhyGovernments
          title="Why Global Organizations Trust Us"
          imageSrc="/why-security.png"
          industries={[
            {
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15.3333L14.6667 18L20.6667 12M26.6667 16C26.6667 22.5446 19.5281 27.3045 16.9307 28.8198C16.6355 28.992 16.4879 29.0781 16.2796 29.1228C16.118 29.1575 15.8821 29.1575 15.7205 29.1228C15.5122 29.0781 15.3646 28.992 15.0694 28.8198C12.472 27.3045 5.33337 22.5446 5.33337 16V9.62346C5.33337 8.55744 5.33337 8.02444 5.50772 7.56626C5.66174 7.16151 5.91202 6.80036 6.23692 6.51403C6.6047 6.18991 7.10377 6.00276 8.10191 5.62845L15.251 2.94756C15.5282 2.84361 15.6668 2.79163 15.8094 2.77103C15.9358 2.75276 16.0643 2.75276 16.1907 2.77103C16.3333 2.79163 16.4719 2.84361 16.7491 2.94756L23.8982 5.62845C24.8963 6.00276 25.3954 6.18991 25.7632 6.51403C26.0881 6.80036 26.3383 7.16151 26.4924 7.56626C26.6667 8.02444 26.6667 8.55744 26.6667 9.62346V16Z"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ),
              title: "Government & Corporate Trust",
              description:
                "Trusted partner for governments and multinational corporations.",
            },
            {
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15.3333L14.6667 18L20.6667 12M26.6667 16C26.6667 22.5446 19.5281 27.3045 16.9307 28.8198C16.6355 28.992 16.4879 29.0781 16.2796 29.1228C16.118 29.1575 15.8821 29.1575 15.7205 29.1228C15.5122 29.0781 15.3646 28.992 15.0694 28.8198C12.472 27.3045 5.33337 22.5446 5.33337 16V9.62346C5.33337 8.55744 5.33337 8.02444 5.50772 7.56626C5.66174 7.16151 5.91202 6.80036 6.23692 6.51403C6.6047 6.18991 7.10377 6.00276 8.10191 5.62845L15.251 2.94756C15.5282 2.84361 15.6668 2.79163 15.8094 2.77103C15.9358 2.75276 16.0643 2.75276 16.1907 2.77103C16.3333 2.79163 16.4719 2.84361 16.7491 2.94756L23.8982 5.62845C24.8963 6.00276 25.3954 6.18991 25.7632 6.51403C26.0881 6.80036 26.3383 7.16151 26.4924 7.56626C26.6667 8.02444 26.6667 8.55744 26.6667 9.62346V16Z"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ),
              title: "Integrated Security Solutions",
              description:
                "Integration of intelligence, technology, and protective services.",
            },
            {
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6 28C23.8402 28 24.9603 28 25.816 27.564C26.5686 27.1805 27.1805 26.5686 27.564 25.816C28 24.9603 28 23.8402 28 21.6V10.4C28 8.15979 28 7.03969 27.564 6.18404C27.1805 5.43139 26.5686 4.81947 25.816 4.43598C24.9603 4 23.8402 4 21.6 4L10.4 4C8.15979 4 7.03969 4 6.18404 4.43597C5.43139 4.81947 4.81947 5.43139 4.43597 6.18404C4 7.03968 4 8.15979 4 10.4L4 21.6C4 23.8402 4 24.9603 4.43597 25.816C4.81947 26.5686 5.43139 27.1805 6.18404 27.564C7.03968 28 8.15979 28 10.4 28H21.6Z"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3088 17.5929C18.2147 17.3107 18.1677 17.1696 18.1701 17.0542C18.1727 16.9328 18.1889 16.8692 18.2448 16.7614C18.298 16.6589 18.4401 16.5267 18.7243 16.2623C19.5091 15.5319 20 14.49 20 13.3333C20 11.1242 18.2091 9.33333 16 9.33333C13.7909 9.33333 12 11.1242 12 13.3333C12 14.49 12.4909 15.5319 13.2757 16.2623C13.5599 16.5267 13.702 16.6589 13.7552 16.7614C13.8111 16.8692 13.8273 16.9328 13.8299 17.0542C13.8323 17.1696 13.7853 17.3107 13.6912 17.5929L12.468 21.2627C12.31 21.7367 12.231 21.9737 12.2784 22.1624C12.3198 22.3275 12.4229 22.4705 12.5665 22.5621C12.7304 22.6667 12.9803 22.6667 13.4799 22.6667H18.5201C19.0197 22.6667 19.2696 22.6667 19.4335 22.5621C19.5771 22.4705 19.6802 22.3275 19.7216 22.1624C19.769 21.9737 19.69 21.7367 19.532 21.2627L18.3088 17.5929Z"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ),
              title: "Elite Protection Personnel",
              description:
                "Elite CPOs trained to the highest global standards.",
            },
            {
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99996 19.9998L10.6666 22.6665L16.6666 16.6665M10.6666 10.6665V6.93317C10.6666 5.4397 10.6666 4.69296 10.9573 4.12253C11.2129 3.62076 11.6209 3.21282 12.1227 2.95715C12.6931 2.6665 13.4398 2.6665 14.9333 2.6665H25.0666C26.5601 2.6665 27.3068 2.6665 27.8773 2.95715C28.379 3.21282 28.787 3.62076 29.0426 4.12253C29.3333 4.69296 29.3333 5.4397 29.3333 6.93317V17.0665C29.3333 18.56 29.3333 19.3067 29.0426 19.8771C28.787 20.3789 28.379 20.7869 27.8773 21.0425C27.3068 21.3332 26.5601 21.3332 25.0666 21.3332H21.3333M6.93329 29.3332H17.0666C18.5601 29.3332 19.3068 29.3332 19.8773 29.0425C20.379 28.7869 20.787 28.3789 21.0426 27.8771C21.3333 27.3067 21.3333 26.56 21.3333 25.0665V14.9332C21.3333 13.4397 21.3333 12.693 21.0426 12.1225C20.787 11.6208 20.379 11.2128 19.8773 10.9572C19.3068 10.6665 18.5601 10.6665 17.0666 10.6665H6.93329C5.43982 10.6665 4.69308 10.6665 4.12265 10.9572C3.62089 11.2128 3.21294 11.6208 2.95728 12.1225C2.66663 12.693 2.66663 13.4397 2.66663 14.9332V25.0665C2.66663 26.56 2.66663 27.3067 2.95728 27.8771C3.21294 28.3789 3.62089 28.7869 4.12265 29.0425C4.69308 29.3332 5.43982 29.3332 6.93329 29.3332Z"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ),
              title: "Advanced Training Technology",
              description:
                "Unique expertise in dry fire and laser-enhanced training systems, bridging safety with realism.",
            },
          ]}
        /> */}
        <ImagePdfViewerCompact
                    title="2025 Agriculture Partnership Contract"
                    images={contractImages}
                    pdfDownloadUrl="/pdf/agri-doc.pdf"
                  />
      </div>
    </div>
  );
};

export default keizerCommunications;
