import { Shield, Lock, Globe, AlertTriangle } from "lucide-react";
import { IndustryItem } from "@/types/industries";

export const defenseIndustries: IndustryItem[] = [
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

export const defenseFeaturedImage = {
  src: "/benefits-vertical.png",
  alt: "Sustainability & Environmental Benefits",
};
