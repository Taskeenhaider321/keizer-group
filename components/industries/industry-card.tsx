import { IndustryItem } from "@/types/industries";

export function IndustryCard({
  icon,
  title,
  description,
}: Pick<IndustryItem, "icon" | "title" | "description">) {
  return (
    <div className=" backdrop-blur-sm rounded-[16px] p-6 sm:p-8 bg-[#1a2131] transition-colors duration-300">
      {/* Icon */}
      <div className="mb-6">
        <div className="w-12 h-12  rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
