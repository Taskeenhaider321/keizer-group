"use client";
import { OfferingSection } from "@/components/core-offerings/OfferingsSection";
import { CoreServices } from "@/components/core-services/CoreServices";
import HeadingWithLine from "@/components/headline/Headline";
import { HeroSection } from "@/components/hero/hero-section";
import { FullImage } from "@/components/image-component/Image";
import { IndustriesSection } from "@/components/industries/industries-section";
import ImagePdfViewer from "@/components/PdfViewer/ImagePdfViewer";
import PdfViewer from "@/components/PdfViewer/ImagePdfViewer";
// import { PdfViewer } from "@/components/PdfViewer/PdfViewer";
// import PdfViewer from "@/components/PdfViewer/PdfViewer";
import { SecurityServices } from "@/components/security-services/SecurityServices";
import SectionCard from "@/components/services/Services";
import { StrategicImportance } from "@/components/strategic-importance/StrategicImportance";
import { WhyGovernments } from "@/components/why-governments/WhyGovernments";
import {
  defenseFeaturedImage,
  defenseIndustries,
} from "@/data/defense-industries";
import { IndustryItem } from "@/types/industries";

import dynamic from "next/dynamic";
const contractImages = Array.from(
  { length: 12 },
  (_, i) => `/pdf-images/contract/page-${i + 1}.png`
);
// Dynamically import PdfViewer to avoid SSR issues
// const PdfViewer = dynamic(() => import("@/components/PdfViewer/PdfViewer"), {
//   ssr: false,
// });
const pdf1 = "/docs/agri-doc.pdf";
const keizerAgriculture = () => {
  const productHeroData = {
    title: "Organic Fertiliser Machines",
    imageUrl: "/offerings-one.png",
    imageAlt: "Advanced production facility",
    features: [
      {
        id: "1",
        title: "Food Waste Conversion Units:",
        description:
          "Transform organic waste into nutrient-rich fertiliser in pellet or powder form.",
      },
      {
        id: "2",
        title: "Scalable Production Lines:",
        description:
          "Machines designed for small farms, cooperatives, and national-scale industrial operations.",
      },
      {
        id: "3",
        title: "Energy-Efficient Technology:",
        description:
          "Low-power systems optimized for both rural and industrial environments.",
      },
      {
        id: "4",
        title: "Turnkey Solutions:",
        description:
          "From installation to operator training, enabling rapid adoption.",
      },
    ],
  };
  const pelletsData = {
    title: "Organic Fertiliser Pellets",
    imageUrl: "/powder-data.png",
    imageAlt: "Advanced production facility",
    features: [
      {
        id: "1",
        title: "High-Nutrient Content:",
        description:
          "Balanced organic formula that improves soil structure and fertility.",
      },
      {
        id: "2",
        title: "Easy Application:",
        description:
          "Mechanised spreading compatible with modern agricultural equipment.",
      },
      {
        id: "3",
        title: "Moisture Retention:",
        description:
          "Pellets enhance soil’s ability to retain water, reducing irrigation needs.",
      },
      {
        id: "4",
        title: "Long-Lasting Release:",
        description:
          "Nutrients delivered over time, minimizing waste and maximizing impact.",
      },
    ],
  };
  const powderData = {
    title: "Organic Fertiliser Powder",
    imageUrl: "/pellet-data.png",
    imageAlt: "Advanced production facility",
    features: [
      {
        id: "1",
        title: "Rapid Absorption:",
        description: "Powder form ensures quick uptake by crops.",
      },
      {
        id: "2",
        title: "Customizable Blends:",
        description:
          "Tailored formulations for specific crops or soil conditions.",
      },
      {
        id: "3",
        title: "Flexible Use:",
        description:
          "Can be mixed with irrigation water, sprayed, or applied directly.",
      },
      {
        id: "4",
        title: "Cost-Effective:",
        description: "Reduces dependency on expensive chemical imports.",
      },
    ],
  };
  const defenseIndustries: IndustryItem[] = [
    {
      id: "defense",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0002 15.3333L14.6668 18L20.6668 12M26.6668 16C26.6668 22.5446 19.5282 27.3045 16.9308 28.8198C16.6356 28.992 16.488 29.0781 16.2797 29.1228C16.1181 29.1575 15.8822 29.1575 15.7206 29.1228C15.5123 29.0781 15.3647 28.992 15.0695 28.8198C12.4721 27.3045 5.3335 22.5446 5.3335 16V9.62346C5.3335 8.55744 5.3335 8.02444 5.50784 7.56626C5.66186 7.16151 5.91214 6.80036 6.23704 6.51403C6.60482 6.18991 7.10389 6.00276 8.10204 5.62845L15.2511 2.94756C15.5283 2.84361 15.6669 2.79163 15.8095 2.77103C15.9359 2.75276 16.0644 2.75276 16.1908 2.77103C16.3334 2.79163 16.472 2.84361 16.7492 2.94756L23.8983 5.62845C24.8964 6.00276 25.3955 6.18991 25.7633 6.51403C26.0882 6.80036 26.3385 7.16151 26.4925 7.56626C26.6668 8.02444 26.6668 8.55744 26.6668 9.62346V16Z"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Circular Economy in Action:",
      description: "Converts food waste into productive agricultural inputs.",
    },
    {
      id: "government",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.33333 14.6667V10.6667C9.33333 6.98477 12.3181 4 16 4C19.2253 4 21.9156 6.29035 22.5333 9.33333M10.4 28H21.6C23.8402 28 24.9603 28 25.816 27.564C26.5686 27.1805 27.1805 26.5686 27.564 25.816C28 24.9603 28 23.8402 28 21.6V21.0667C28 18.8265 28 17.7064 27.564 16.8507C27.1805 16.0981 26.5686 15.4861 25.816 15.1026C24.9603 14.6667 23.8402 14.6667 21.6 14.6667H10.4C8.15979 14.6667 7.03969 14.6667 6.18404 15.1026C5.43139 15.4861 4.81947 16.0981 4.43597 16.8507C4 17.7064 4 18.8265 4 21.0667V21.6C4 23.8402 4 24.9603 4.43597 25.816C4.81947 26.5686 5.43139 27.1805 6.18404 27.564C7.03969 28 8.15979 28 10.4 28Z"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Reduced Emissions:",
      description:
        "Organic production lowers greenhouse gases compared to synthetic fertilisers.",
    },
    {
      id: "corporate",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9998 2.66675C19.9998 5.33341 21.2302 11.0561 21.3332 16.0001C21.2302 20.944 19.9998 26.6667 15.9998 29.3334M15.9998 2.66675C11.9998 5.33342 10.7695 11.0561 10.6665 16.0001C10.7695 20.944 11.9998 26.6667 15.9998 29.3334M15.9998 2.66675C8.63604 2.66675 2.6665 8.63628 2.6665 16.0001M15.9998 2.66675C23.3636 2.66675 29.3332 8.63628 29.3332 16.0001M15.9998 29.3334C23.3636 29.3334 29.3332 23.3639 29.3332 16.0001M15.9998 29.3334C8.63604 29.3334 2.6665 23.3639 2.6665 16.0001M29.3332 16.0001C26.6665 20.0001 20.9438 21.2304 15.9998 21.3334C11.0559 21.2304 5.33317 20.0001 2.6665 16.0001M29.3332 16.0001C26.6665 12.0001 20.9438 10.7697 15.9998 10.6667C11.0559 10.7697 5.33317 12.0001 2.6665 16.0001"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Soil Regeneration:",
      description:
        "Restores degraded soils and boosts long-term agricultural productivity.",
    },
    {
      id: "highrisk",
      // ✅ Example: your inline SVG
      icon: (
        <svg
          width="30"
          height="27"
          viewBox="0 0 30 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9346 9.92218V15.2555M14.9346 20.5888H14.9479M13.0883 3.11115L2.12181 22.0533C1.51354 23.104 1.2094 23.6293 1.25435 24.0604C1.29356 24.4365 1.49059 24.7782 1.7964 25.0006C2.14701 25.2555 2.75402 25.2555 3.96806 25.2555H25.9011C27.1151 25.2555 27.7221 25.2555 28.0727 25.0006C28.3786 24.7782 28.5756 24.4365 28.6148 24.0604C28.6597 23.6293 28.3556 23.104 27.7473 22.0533L16.7808 3.11114C16.1747 2.06426 15.8717 1.54082 15.4763 1.36501C15.1314 1.21166 14.7377 1.21166 14.3928 1.36501C13.9975 1.54082 13.6944 2.06426 13.0883 3.11115Z"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "National Security:",
      description:
        "Supports governments in reducing dependency on imported fertilisers.",
    },
  ];

  const defenseFeaturedImage = {
  src: "/vertical-agri.png",
  alt: "Sustainability & Environmental Benefits",
};

  return (
    <div>
      <HeroSection
        // badge="Trusted by leading industries across Africa"
        heading="Keizer Agriculture"
        description="Modernizing agriculture through responsible cultivation, community development, and high-efficiency farming."
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
        backgroundImage="/agriculture-hero.jpg"
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
            src: "/escobia-logo.png",
            alt: "Growth chart",
          }}
          heading="Ecobia"
          image={{
            src: "/agri-intro.png",
            alt: "Medical professional with shield",
          }}
          imagePosition="left"
          description={
            <div>
              <p className="text-black">
                EcoBia, in partnership with Keizer Group, delivers cutting-edge
                organic fertiliser technologies that transform food waste and
                agricultural by-products into high-value inputs for farming.
              </p>
            </div>
          }
        />
        <StrategicImportance
          sectionTitle="Strategic Importance"
          sectionLineColor="bg-[#D0D5DD]"
          backgroundColor="bg-[#EBF5FF]"
          heading="Transforming Waste into Growth"
          image={{
            src: "/agri-why.png",
            alt: "Security officers on duty",
          }}
          offerings={[
            { label: "Improve soil fertility and biodiversity" },
            {
              label: "Increase crop resilience and yields",
            },
            {
              label: "Close the loop on food waste and organic by-products",
            },
            {
              label: "Support national sustainability and climate goals",
            },
          ]}
          description={
            <div>
              {" "}
              <p className="text-gray-700 text-lg">
                Our mission is simple yet powerful: to enhance crop yields,
                restore soil health, and support sustainable agriculture, while
                reducing environmental waste.
              </p>
              <br></br>
              <p className="text-gray-700 text-lg">
                Through our organic fertiliser machines and production lines,
                EcoBia empowers nations, agribusinesses, and farmers to achieve
                food security while protecting the planet for future generations
              </p>
              <br></br>
              <p className="text-gray-700 text-lg">
                Agriculture lies at the heart of every economy, and fertiliser
                is the engine that drives it. Yet traditional chemical
                fertilisers often degrade soil quality, pollute ecosystems, and
                create long-term dependencies. EcoBia changes this dynamic by
                offering organic, nutrient-rich alternatives that:
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
        {/* <section className="w-full max-w-[1400px] rounded-2xl sm:py-6 py-14 px-4 md:px-8 my-6 ">
          <HeadingWithLine
            title="Core Device Features"
            color="text-black"
            lineColor="bg-[#D0D5DD]"
            align="left"
            className="mb-12 mt-8 text-lg"
          />
          <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3 my-10 leading-tight">
        Keizer Security Services
      </h2>
          <div>
            <BlogCardsGrid
              data={communicationFeatures}
              title="Keizer Communication Features"
              subtitle="Stay connected with powerful communication tools"
            />
          </div>
        </section> */}
        <div className="bg-[#1a2131] rounded-2xl my-10 px-6 py-10">
          <HeadingWithLine
            title="Benefits"
            color="text-white"
            lineColor="bg-[#D0D5DD]"
            align="left"
            className="mb-12 mt-8 bg-[#1a2131] text-lg"
          />
          <IndustriesSection
            industries={defenseIndustries}
            title="Sustainability & Environmental Benefits"
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
        <OfferingSection
          title={productHeroData.title}
          imageUrl={productHeroData.imageUrl}
          imageAlt={productHeroData.imageAlt}
          features={productHeroData.features}
          imagePosition="left"
        />
        <OfferingSection
          title={pelletsData.title}
          imageUrl={pelletsData.imageUrl}
          imageAlt={pelletsData.imageAlt}
          features={pelletsData.features}
          imagePosition="left"
        />
        <OfferingSection
          title={powderData.title}
          imageUrl={powderData.imageUrl}
          imageAlt={powderData.imageAlt}
          features={powderData.features}
          imagePosition="left"
        />
        {/* <PdfViewer title="Document 1" fileUrl="/docs/agri-doc.pdf" /> */}
        <StrategicImportance
          sectionTitle="Awards"
          sectionLineColor="bg-[#D0D5DD]"
          backgroundColor="bg-[#F2F4F7]"
          imagePosition="left"
          heading="IFEX Innovation Awards 2024 Winner"
          image={{
            src: "/agri-prize.png",
            alt: "Security officers on duty",
          }}
          description={
            <div>
              {" "}
              <p className="text-gray-700 text-lg">
                We are honoured to have won the IFEX Innovation Award 2024 for
                our organic fertiliser machines.
              </p>
              <br></br>
              <p className="text-gray-700 text-lg">
                This award is a recognition of our mission to make sustainable
                agriculture accessible to everyone. Our technology enables
                farmers and growers to transform organic waste into
                nutrient-rich fertiliser, cutting costs, reducing environmental
                impact, and supporting healthier soil.
              </p>
              <br></br>
              <p className="text-gray-700 text-lg">
                At Ecobia, innovation is driven by our passion for a greener
                future, and this award inspires us to keep pushing forward
                creating practical, eco-friendly solutions that truly make a
                difference.
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
        <ImagePdfViewer
          title="2025 Agriculture Partnership Contract"
          images={contractImages}
          pdfDownloadUrl="/pdf/agri-doc.pdf"
        />
      </div>
    </div>
  );
};

export default keizerAgriculture;
