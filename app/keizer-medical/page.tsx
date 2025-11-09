import { ClientsStakeholder } from "@/components/clients-stakeholder/ClientsStakeholder";
import { CoreServices } from "@/components/core-services/CoreServices";
import { FeatureCard } from "@/components/feature-card/feature-card";
import HeadingWithLine from "@/components/headline/Headline";
import { HeroSection } from "@/components/hero/hero-section";
import { FullImage } from "@/components/image-component/Image";
import SectionCard from "@/components/services/Services";
import { StrategicImportance } from "@/components/strategic-importance/StrategicImportance";
import { WhyGovernments } from "@/components/why-governments/WhyGovernments";

const keizerMedical = () => {
  return (
    <div>
      <HeroSection
        // badge="Trusted by leading industries across Africa"
        heading="Keizer Medical"
        description="Building stronger, self-sufficient healthcare systems for nations and communities."
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
        backgroundImage="/medical-hero.jpg"
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
          heading="Introduction to Keizer Medical"
          image={{
            src: "/medical-introduction.png",
            alt: "Medical professional with shield",
          }}
          imagePosition="left"
          description={
            <div>
              <p className="text-black">
                Keizer Medical is the healthcare and life sciences division of
                Keizer Group, dedicated to building stronger, healthier nations
                through comprehensive medical solutions. At a time when the
                world demands resilient, self-sufficient healthcare systems,
                Keizer Medical stands as a trusted partner to governments,
                corporations, and humanitarian organizations.
              </p>
              <br></br>
              <p className="text-black">
                We do not simply deliver healthcare services we design, produce,
                and manage entire ecosystems: hospitals, pharmaceuticals,
                equipment, emergency fleets, and the technology that connects
                them. By integrating infrastructure, supply chains, and
                innovation under one banner, Keizer Medical ensures that
                healthcare is accessible, secure, and future-ready.
              </p>
            </div>
          }
        />
        <StrategicImportance />
        <CoreServices />
        <ClientsStakeholder />
        <FullImage src="/medical-full.png" alt="Keizer Medical Banner" />
        <WhyGovernments />
      </div>
    </div>
  );
};

export default keizerMedical;
