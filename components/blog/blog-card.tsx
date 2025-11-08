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
  description,
  features,
  imageUrl,
  imageAlt,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md">
      {/* Image Section */}
      <div className="w-full bg-muted p-4 sm:p-5 md:p-6">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-md"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5 md:p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-card-foreground sm:text-xl">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-muted-foreground sm:text-base leading-relaxed">
            {description}
          </p>
        )}

        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-muted-foreground sm:text-base"
              >
                <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
