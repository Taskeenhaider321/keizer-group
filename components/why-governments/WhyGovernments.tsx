"use client";
import Image from "next/image";
import React from "react";
import { IndustryCard } from "../industries/industry-card";
import HeadingWithLine from "../headline/Headline";

interface IndustryItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyGovernmentsProps {
  title?: string;
  industries?: IndustryItem[];
  imageSrc?: string;
  imageAlt?: string;
}

const defaultIndustries: IndustryItem[] = [
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
          d="M2.66667 6.93341C2.66667 5.43994 2.66667 4.6932 2.95732 4.12277C3.21298 3.62101 3.62093 3.21306 4.1227 2.9574C4.69313 2.66675 5.43987 2.66675 6.93334 2.66675H17.0667C18.5601 2.66675 19.3069 2.66675 19.8773 2.9574C20.3791 3.21306 20.787 3.62101 21.0427 4.12277C21.3333 4.6932 21.3333 5.43994 21.3333 6.93341V17.0667C21.3333 18.5602 21.3333 19.307 21.0427 19.8774C20.787 20.3792 20.3791 20.7871 19.8773 21.0428C19.3069 21.3334 18.5601 21.3334 17.0667 21.3334H6.93334C5.43987 21.3334 4.69313 21.3334 4.1227 21.0428C3.62093 20.7871 3.21298 20.3792 2.95732 19.8774C2.66667 19.307 2.66667 18.5602 2.66667 17.0667V6.93341Z"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.6667 14.9334C10.6667 13.4399 10.6667 12.6932 10.9573 12.1228C11.213 11.621 11.6209 11.2131 12.1227 10.9574C12.6931 10.6667 13.4399 10.6667 14.9333 10.6667H25.0667C26.5601 10.6667 27.3069 10.6667 27.8773 10.9574C28.3791 11.2131 28.787 11.621 29.0427 12.1228C29.3333 12.6932 29.3333 13.4399 29.3333 14.9334V25.0667C29.3333 26.5602 29.3333 27.307 29.0427 27.8774C28.787 28.3792 28.3791 28.7871 27.8773 29.0428C27.3069 29.3334 26.5601 29.3334 25.0667 29.3334H14.9333C13.4399 29.3334 12.6931 29.3334 12.1227 29.0428C11.6209 28.7871 11.213 28.3792 10.9573 27.8774C10.6667 27.307 10.6667 26.5602 10.6667 25.0667V14.9334Z"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "End-to-End Integration",
    description: "Integrated solutions managed under one trusted partner.",
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
          d="M16 19.9999L12 15.9999M16 19.9999C17.8625 19.2916 19.6492 18.3982 21.3333 17.3333M16 19.9999V26.6666C16 26.6666 20.04 25.9333 21.3333 23.9999C22.7733 21.8399 21.3333 17.3333 21.3333 17.3333M12 15.9999C12.7095 14.1592 13.6029 12.3947 14.6667 10.7333C16.2202 8.24924 18.3835 6.20399 20.9507 4.79205C23.5178 3.3801 26.4035 2.64842 29.3333 2.66659C29.3333 6.29326 28.2933 12.6666 21.3333 17.3333M12 15.9999H5.33333C5.33333 15.9999 6.06666 11.9599 8 10.6666C10.16 9.22659 14.6667 10.6666 14.6667 10.6666M5.99999 21.9999C3.99999 23.6799 3.33333 28.6666 3.33333 28.6666C3.33333 28.6666 8.32 27.9999 10 25.9999C10.9467 24.8799 10.9333 23.1599 9.87999 22.1199C9.36174 21.6253 8.67905 21.3394 7.96296 21.3173C7.24687 21.2951 6.54783 21.5382 5.99999 21.9999Z"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Rapid Large-Scale Delivery",
    description: "Proven capability to execute major projects quickly.",
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
          d="M12 16.0001L14.6667 18.6667L20.6667 12.6667M23.8682 6.66476C24.1428 7.32879 24.6698 7.85661 25.3334 8.13218L27.6603 9.09605C28.3244 9.37112 28.852 9.89874 29.127 10.5628C29.4021 11.2269 29.4021 11.9731 29.127 12.6372L28.1639 14.9625C27.8887 15.6269 27.8883 16.3738 28.1648 17.0378L29.1262 19.3625C29.2626 19.6914 29.3328 20.044 29.3329 20.4C29.3329 20.7561 29.2628 21.1087 29.1266 21.4376C28.9903 21.7666 28.7906 22.0655 28.5388 22.3172C28.287 22.5689 27.988 22.7686 27.659 22.9047L25.3338 23.8679C24.6698 24.1425 24.142 24.6695 23.8664 25.3331L22.9026 27.6601C22.6275 28.3242 22.0999 28.8518 21.4359 29.1269C20.7718 29.402 20.0257 29.402 19.3616 29.1269L17.0364 28.1637C16.3723 27.8893 15.6264 27.8899 14.9628 28.1653L12.6359 29.1278C11.9722 29.4022 11.2267 29.402 10.5632 29.1271C9.89964 28.8523 9.37234 28.3253 9.09709 27.6619L8.13296 25.3342C7.85841 24.6702 7.3314 24.1423 6.6678 23.8668L4.34089 22.9029C3.67712 22.628 3.14968 22.1007 2.87451 21.437C2.59935 20.7733 2.59898 20.0275 2.87348 19.3635L3.83662 17.0381C4.11101 16.374 4.11045 15.6282 3.83507 14.9645L2.8733 12.6358C2.73694 12.3069 2.66673 11.9543 2.66667 11.5983C2.66661 11.2422 2.73672 10.8896 2.87297 10.5607C3.00922 10.2317 3.20896 9.93282 3.46076 9.68109C3.71257 9.42935 4.0115 9.22971 4.34049 9.09355L6.66573 8.13037C7.32917 7.85604 7.85665 7.32968 8.13241 6.66682L9.09625 4.33983C9.37131 3.67574 9.89891 3.14813 10.563 2.87305C11.227 2.59798 11.9732 2.59798 12.6372 2.87305L14.9625 3.83624C15.6265 4.11063 16.3724 4.11007 17.0361 3.83468L19.364 2.87455C20.0279 2.59963 20.7739 2.59968 21.4378 2.8747C22.1018 3.14972 22.6293 3.67719 22.9044 4.3411L23.8685 6.66879L23.8682 6.66476Z"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "International Compliance Standards",
    description: "Meets WHO, EU, and FDA medical requirements.",
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
          d="M16 8.00008V16.0001L21.3333 18.6667M29.3333 16.0001C29.3333 23.3639 23.3638 29.3334 16 29.3334C8.63621 29.3334 2.66667 23.3639 2.66667 16.0001C2.66667 8.63628 8.63621 2.66675 16 2.66675C23.3638 2.66675 29.3333 8.63628 29.3333 16.0001Z"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Sustainable Long-Term Commitment",
    description: "Focused on resilience, sustainability, and self-sufficiency.",
  },
];

export const WhyGovernments: React.FC<WhyGovernmentsProps> = ({
  title = "Why Governments and Corporations Choose Keizer Medical",
  industries = defaultIndustries,
  imageSrc = "/why-governments.png",
  imageAlt = "Why Governments",
}) => {
  return (
    <section className="w-full max-w-[1400px] rounded-2xl sm:py-6 py-14 px-4 md:px-8 my-6 bg-[#101828]">
      <HeadingWithLine
        title={title}
        color="text-white"
        lineColor="bg-[#475467]"
        align="left"
        className="mb-12 mt-8 text-lg"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-stretch">
        {/* Left - Image */}
        <div className="relative w-full h-full">
          <div className="relative w-full h-full min-h-[400px] md:min-h-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right - Dynamic Industry Cards */}
        <div className="flex flex-col gap-6 justify-between">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              className="p-2 sm:p-4"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
