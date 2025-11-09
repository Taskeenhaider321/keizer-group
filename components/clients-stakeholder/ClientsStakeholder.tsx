"use client";
import React from "react";
import HeadingWithLine from "../headline/Headline";
import { ServiceCardsGrid } from "../services-label/ServiceLabelGrid";

interface ClientsStakeholderProps {
  title?: string;
  items?: {
    title: string;
    description: string;
  }[];
  columns?: number;
}

const defaultServiceData = [
  {
    title: "Governments & Ministries of Health",
    description: "seeking national healthcare expansion.",
  },
  {
    title: "International NGOs",
    description: "responding to humanitarian crises.",
  },
  {
    title: "Corporations & Industrial Clients",
    description: "requiring private healthcare services for staff.",
  },
  {
    title: "Private High-Net-Worth Individuals",
    description: "seeking bespoke medical solutions.",
  },
];

export const ClientsStakeholder: React.FC<ClientsStakeholderProps> = ({
  title = "Clients & Stakeholders",
  items = defaultServiceData,
  columns = 4,
}) => {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 sm:p-0 my-10 rounded-2xl bg-white">
      <HeadingWithLine
        title={title}
        color="text-black"
        lineColor="bg-[#e0e4f0]"
        align="left"
        className="mb-10 text-lg"
      />

      <div className="space-y-4">
        <ServiceCardsGrid items={items} columns={columns} />
      </div>
    </div>
  );
};
