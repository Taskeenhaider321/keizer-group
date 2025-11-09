export interface ServiceCardItem {
  title: string;
  description: string;
}

interface ServiceCardProps {
  item: ServiceCardItem;
}

export function ServiceLabel({ item }: ServiceCardProps) {
  return (
    <div className="bg-[#004B8D] rounded-lg p-6 text-white flex flex-col gap-2 min-h-full">
      {/* Bullet point */}
      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-sm sm:text-base font-medium leading-snug">
          <span className="font-semibold">{item.title}</span>
          <span className="mx-1">/</span>
          <span>{item.description}</span>
        </p>
      </div>
    </div>
  );
}
