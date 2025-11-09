// components/ImagePdfViewerCompact.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

interface ImagePdfViewerCompactProps {
  title: string;
  images: string[];
  pdfDownloadUrl: string;
}

export default function ImagePdfViewerCompact({
  title,
  images,
  pdfDownloadUrl,
}: ImagePdfViewerCompactProps) {
  const [page, setPage] = useState(0);
  const totalPages = images.length;

  const prevPage = () => setPage((p) => Math.max(0, p - 1));
  const nextPage = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <div className="py-6 px-2 sm:px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="overflow-hidden shadow-md border-0">
          {/* Header */}
          <div className="bg-[#004B8D] text-white p-2 flex justify-between items-center">
            <h3 className="text-sm sm:text-lg font-semibold">{title}</h3>
            <Button
              asChild
              size="sm"
              className="bg-white text-[#004B8D] hover:bg-gray-100 font-medium rounded-md"
            >
              <a
                href={pdfDownloadUrl}
                download
                className="flex items-center gap-1"
              >
                <Download className="h-4 w-4" />
                <span className="text-xs">Download</span>
              </a>
            </Button>
          </div>

          {/* Image Viewer */}
          <div className="bg-gray-50 p-4">
            <div
              className="relative bg-white shadow rounded-lg overflow-hidden mx-auto border border-gray-200"
              style={{ maxWidth: "600px" }}
            >
              <Image
                src={images[page]}
                alt={`Page ${page + 1}`}
                width={600}
                height={600}
                className="w-full "
                priority={page < 2}
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-0.5 rounded text-xs">
                {page + 1} / {totalPages}
              </div>
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="p-3 bg-gray-100 border-t border-gray-200 flex justify-center gap-3">
            <Button
              onClick={prevPage}
              disabled={page === 0}
              size="sm"
              variant="outline"
              className="disabled:opacity-50 disabled:cursor-not-allowed text-black border-gray-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={nextPage}
              disabled={page === totalPages - 1}
              size="sm"
              variant="outline"
              className="disabled:opacity-50 disabled:cursor-not-allowed text-black border-gray-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        <p className="text-center text-xs text-gray-500 mt-4">
          Use the arrows above to navigate. Download full PDF for offline
          access.
        </p>
      </div>
    </div>
  );
}
