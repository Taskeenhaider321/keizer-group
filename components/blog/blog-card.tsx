import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
}

export function BlogCard({
  title,
  // description,
  features,
  imageUrl,
  imageAlt,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[#D0D5DD] bg-card shadow-sm transition-all hover:shadow-md">
      {/* Image Section */}
      <div className="w-full bg-muted p-3 sm:p-3 md:p-4">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-md"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col gap-4 p-2 sm:p-3 md:p-6 ">
        {/* Title */}
        <h3 className="text-lg font-semibold text-card-foreground sm:text-xl">
          {title}
        </h3>

        {/* Description */}
        {/* {description && (
          <p className="text-sm text-muted-foreground sm:text-base leading-relaxed">
            {description}
          </p>
        )} */}

        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="list-disc list-inside space-y-2 text-sm text-[#667085] sm:text-base">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
