import { IndustryItem } from "@/types/industries";

export function IndustryCard({
  icon,
  title,
  description,
  className = "",
}: Pick<IndustryItem, "icon" | "title" | "description" | "className">) {
  return (
    <div
      className={`backdrop-blur-sm rounded-[16px] bg-[#101828] transition-colors duration-300  ${className}`}
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 leading-tight">
        {title}
      </h3>

      
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
