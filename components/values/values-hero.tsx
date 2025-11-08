import Image from "next/image";

interface ValuesHeroProps {
  image: {
    src: string;
    alt: string;
  };
}

export default function ValuesHero({ image }: ValuesHeroProps) {
  return (
    <div className="flex flex-col justify-center h-full">
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        width={400}
        height={500}
        className="rounded-lg object-cover w-full h-full"
        priority
      />
    </div>
  );
}
