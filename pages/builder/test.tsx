import dynamic from 'next/dynamic';
import React from 'react';
import { LondonTemplate } from '../../components/templates/cv-templates/london-template/london-template';
const NextPDFViewer = dynamic(() => import("../../components/organisms/next-pdf-viewer/next-pdf-viewer"), {
  ssr: false
});

export default function Test() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <NextPDFViewer doc={LondonTemplate()} />
    </div>
  );
}
