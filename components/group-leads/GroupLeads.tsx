import HeadingWithLine from "../headline/Headline";
import { IndustryCard } from "../industries/industry-card";
import { groupleads } from "@/data/group-leads";

export const GroupLeads = () => {
  return (
    <div className="w-full max-w-[1400px] rounded-3xl mx-auto bg-[#101828] my-10 py-10">
      <div className="w-full max-w-7xl mx-auto">
        <HeadingWithLine
          title="Why Keizer Group Leads"
          color="text-white"
          lineColor="bg-[#475467]"
          align="left"
          className="mb-8 text-lg"
        />
        <div className="flex flex-col w-full md:flex-row gap-8  mx-auto py-10 px-4 sm:px-0">
          <IndustryCard
            icon={groupleads[0].icon}
            title={groupleads[0].title}
            description={groupleads[0].description}
            className="p-6 sm:p-8"
          />
          <IndustryCard
            icon={groupleads[1].icon}
            title={groupleads[1].title}
            description={groupleads[1].description}
             className="p-6 sm:p-8"
          />
          <IndustryCard
            icon={groupleads[2].icon}
            title={groupleads[2].title}
            description={groupleads[2].description}
             className="p-6 sm:p-8"
          />
        </div>
      </div>
    </div>
  );
};
