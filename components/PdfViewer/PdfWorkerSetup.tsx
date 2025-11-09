// components/PdfWorkerSetup.tsx
'use client';

import { useEffect } from 'react';
import { pdfjs } from 'react-pdf';

export default function PdfWorkerSetup() {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  }, []);

  return null;
}