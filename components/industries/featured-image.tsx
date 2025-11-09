import { FeaturedImageProps } from "@/types/industries";

export function FeaturedImage({
  src = "/military-operations-command-center.jpg",
  alt = "Defense and Military Operations Command Center",
}: FeaturedImageProps) {
  return (
    <div className="relative w-full h-full min-h-[350px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center">
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
        {/* Fallback gradient background if image fails to load */}
        <div className="absolute inset-0 bg-gradient-to-br  z-0"></div>

        {/* Image container */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Hide the image if it fails to load, showing only the gradient background
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/10 z-10"></div>
      </div>
    </div>
  );
}
