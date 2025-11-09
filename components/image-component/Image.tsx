"use client";

import Image from "next/image";

interface FullImageProps {
  src: string;
  alt?: string;
}

export function FullImage({ src, alt = "Image" }: FullImageProps) {
  return (
    <div className="w-full max-w-[1320px] mx-auto flex items-center justify-center overflow-hidden">
        <div className="mx-4">

<Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className="w-full h-full object-cover rounded-2xl"
        priority
      />
        </div>
      
    </div>
  );
}
