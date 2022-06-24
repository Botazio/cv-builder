import React, { useEffect } from 'react';
import styles from './next-pdf-viewer.module.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { usePDF } from '@react-pdf/renderer';
import workerSrc from "../../../../pdf-worker";
import { CircularProgress } from '@mui/material';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;


export default function NextPDFViewer({ doc, width, height }: { doc: any; width?: number; height?: number; }) {
  const [instance, updateInstance] = usePDF({ document: doc });

  useEffect(() => {
    if (instance) {
      updateInstance();
    }
  });

  if (!instance) return <div></div>;

  if (instance.error) return <div><ErrorOutlineRoundedIcon className={styles.error} sx={{ width: '50px', height: '50px' }} /></div>;

  return (
    <div className={styles.container} style={{ width: width, height: height }}>
      <Document
        file={instance.blob}
        renderMode="svg"
        loading={<CircularProgress className={styles.loading} size={50} />}
        noData={''}
        error={<ErrorOutlineRoundedIcon className={styles.error} sx={{ width: '50px', height: '50px' }} />}
      >
        <Page
          width={width}
          height={height}
          loading={null}
          pageNumber={1} />
      </Document>
    </div>
  );
}
