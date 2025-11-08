import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        priority
        className="object-cover w-full h-full"
        quality={85}
      />
    </div>
  );
}
