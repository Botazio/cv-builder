import React, { useEffect, useRef, useState } from 'react';
import styles from './template-card-body.module.css';
import dynamic from "next/dynamic";
import { LondonTemplate } from '../../templates/cv-templates/london-template/london-template';

const NextPDFViewer = dynamic(() => import("../../organisms/next-pdf-viewer/next-pdf-viewer"), {
  ssr: false
});



export default function TemplateCardBody({ document }: { document: any; }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    setWidth(containerRef.current.clientWidth);
    setHeight(containerRef.current.clientWidth);
  }, [containerRef]);

  return (
    <div ref={containerRef} className={styles.container}>
      {width && height && <NextPDFViewer width={width} height={height} doc={LondonTemplate()} />}
    </div>
  );
}
