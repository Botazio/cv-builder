import React from 'react';
import styles from './next-pdf-viewer.module.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { usePDF } from '@react-pdf/renderer';
import workerSrc from "../../../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;


export default function NextPDFViewer({ doc, width, height }: { doc: any; width?: number; height?: number; }) {
  const [instance] = usePDF({ document: doc });

  if (instance.loading) return <div>Loading ...</div>;

  if (instance.error) return <div>Something went wrong</div>;

  return (
    <Document file={instance.url} renderMode="svg">
      <Page
        className={styles.container}
        width={width}
        height={height}

        pageNumber={1} />
    </Document>
  );
}
