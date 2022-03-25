import React from 'react';
import dynamic from "next/dynamic";
import { LondonTemplate } from '../../../../../common/cv-templates/london-template/london-template';

const NextPDFViewer = dynamic(() => import("../next-pdf-viewer/next-pdf-viewer"), {
  ssr: false
});

/**
 * Displays a preview for a pdf document. Gets the dimensions from a container reference
 */
export default function TemplatePreview({ rect, document }: { rect: any, document?: any; }) {
  return (
    <NextPDFViewer width={rect.width} height={rect.height} doc={LondonTemplate()} />
  );
}