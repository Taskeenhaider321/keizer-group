import Image from "next/image";

interface FeatureImageProps {
  src: string;
  alt: string;
}

export function FeatureImage({ src, alt }: FeatureImageProps) {
  return (
    <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[208px] rounded-lg overflow-hidden flex-shrink-0">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
