"use client";

import { BlogCard } from "./blog-card";

export interface FeatureData {
  id: string;
  title: string;
  description?: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
}

interface FeatureCardsGridProps {
  data: FeatureData[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function BlogTwoGrid({
  data,
  title,
  subtitle,
  className = "",
}: FeatureCardsGridProps) {
  return (
    <section
      className={`w-full mx-auto max-w-7xl py-8 sm:py-12 md:py-16 ${className}`}
    >
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          {title && (
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl mb-2 text-balance">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base text-muted-foreground sm:text-lg md:text-xl text-balance">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Grid Container */}
      <div className="grid w-full gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2">
        {data.map((item) => (
          <BlogCard
            key={item.id}
            title={item.title}
            description={item.description ?? ""}
            features={item.features}
            imageUrl={item.imageUrl}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}
