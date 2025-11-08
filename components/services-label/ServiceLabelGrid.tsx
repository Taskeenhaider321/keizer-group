import { ServiceLabel, type ServiceCardItem } from "./ServiceLabel";

interface ServiceCardsGridProps {
  items: ServiceCardItem[];
  columns?: number;
}

export function ServiceCardsGrid({
  items,
  columns = 4,
}: ServiceCardsGridProps) {
  // Responsive column configuration
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const gridClass =
    columnClasses[columns as keyof typeof columnClasses] || columnClasses[4];

  return (
    <div className={`grid w-full max-w-7xl mx-auto ${gridClass} gap-4 w-full`}>
      {items.map((item, index) => (
        <ServiceLabel key={index} item={item} />
      ))}
    </div>
  );
}
