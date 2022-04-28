import React from 'react';
import dynamic from "next/dynamic";

const NextPDFViewer = dynamic(() => import("../next-pdf-viewer/next-pdf-viewer"), {
  ssr: false
});

/**
 * Displays a preview for a pdf document. Gets the dimensions from a container reference
 */
export default function TemplatePreview({ width, height, document }: { width: number, height: number, document: any; }) {

  return (
    <NextPDFViewer width={width} height={height} doc={document} />
  );
}