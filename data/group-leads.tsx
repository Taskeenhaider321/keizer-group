// data/industries.tsx
import { Shield, Lock, Globe, AlertTriangle } from "lucide-react";
import { IndustryItem } from "@/types/industries";

export const groupleads: IndustryItem[] = [
  {
    id: "defense",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.75 1.75V22.15C1.75 25.5103 1.75 27.1905 2.40396 28.4739C2.9792 29.6029 3.89708 30.5208 5.02606 31.096C6.30953 31.75 7.98969 31.75 11.35 31.75H25.75M25.75 31.75C25.75 35.0637 28.4363 37.75 31.75 37.75C35.0637 37.75 37.75 35.0637 37.75 31.75C37.75 28.4363 35.0637 25.75 31.75 25.75C28.4363 25.75 25.75 28.4363 25.75 31.75ZM1.75 11.75L25.75 11.75M25.75 11.75C25.75 15.0637 28.4363 17.75 31.75 17.75C35.0637 17.75 37.75 15.0637 37.75 11.75C37.75 8.43629 35.0637 5.75 31.75 5.75C28.4363 5.75 25.75 8.43629 25.75 11.75Z"
          stroke="white"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Our Strategic Edge",
    description:
      "Global expertise with local impact, trusted partnerships with governments and corporations, commitment to sustainable growth, and a proven track record across industries.",
  },
  {
    id: "government",
    icon: (
      <svg
        width="44"
        height="40"
        viewBox="0 0 44 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.75 37.75V33.75C41.75 30.0223 39.2005 26.8901 35.75 26.002M28.75 2.33152C31.6818 3.51829 33.75 6.39262 33.75 9.75C33.75 13.1074 31.6818 15.9817 28.75 17.1685M31.75 37.75C31.75 34.0225 31.75 32.1587 31.141 30.6885C30.3291 28.7283 28.7717 27.1709 26.8115 26.359C25.3413 25.75 23.4775 25.75 19.75 25.75H13.75C10.0225 25.75 8.1587 25.75 6.68853 26.359C4.72831 27.1709 3.17092 28.7283 2.35896 30.6885C1.75 32.1587 1.75 34.0225 1.75 37.75M24.75 9.75C24.75 14.1683 21.1683 17.75 16.75 17.75C12.3317 17.75 8.75 14.1683 8.75 9.75C8.75 5.33172 12.3317 1.75 16.75 1.75C21.1683 1.75 24.75 5.33172 24.75 9.75Z"
          stroke="white"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Trusted Partnerships",
    description:
      "Keizer Group stands stronger through collaboration with McGee & Durrani Consulting, Fabcomm, EcoBia, Admant Renewable, and Alice Capital.",
  },
  {
    id: "corporate",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.1235 29.0402L6.93989 26.8371C7.14661 26.7178 7.38919 26.6763 7.62381 26.7202L15.1328 28.1256C15.7499 28.241 16.3196 27.766 16.3168 27.1382L16.2875 20.5589C16.2867 20.3801 16.3339 20.2044 16.424 20.0501L20.2135 13.5624C20.4107 13.2248 20.393 12.8032 20.1682 12.4832L13.7878 3.40137M35.7504 7.4681C24.7504 12.7501 30.7501 19.7501 32.7504 20.7501C36.5046 22.6268 41.7253 22.75 41.7253 22.75C41.7416 22.4187 41.75 22.0853 41.75 21.75C41.75 10.7043 32.7957 1.75 21.75 1.75C10.7043 1.75 1.75 10.7043 1.75 21.75C1.75 32.7957 10.7043 41.75 21.75 41.75C22.0853 41.75 22.4187 41.7417 22.75 41.7254M31.2656 41.6296L24.932 24.932L41.6296 31.2656L34.2253 34.2253L31.2656 41.6296Z"
          stroke="white"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Global Reach Section",
    description:
      "From 32 African countries to Europe, our operations serve communities, governments, and enterprises with tailored solutions that meet the highest international standards. ",
  },
];
