import type { Value } from "@/types/values";
import ValuesHero from "./values-hero";
import ValuesGrid from "./values-grid";

interface ValuesSectionProps {
  data: Value[];
  image: {
    src: string;
    alt: string;
  };
  title?: string;
  description?: string;
}

export default function ValuesSection({
  data,
  image,
  title = "",
  description = "",
}: ValuesSectionProps) {
  return (
    <section className="py-6">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 md:grid-cols-2 md:auto-rows-fr">
          <ValuesHero image={image} />
          <ValuesGrid data={data} title={title} description={description} />
        </div>
      </div>
    </section>
  );
}
