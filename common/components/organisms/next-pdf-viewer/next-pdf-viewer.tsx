import React from 'react';
import styles from './next-pdf-viewer.module.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { usePDF } from '@react-pdf/renderer';
import workerSrc from "../../../../pdf-worker";
import { CircularProgress } from '@mui/material';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;


export default function NextPDFViewer({ doc, width, height }: { doc: any; width?: number; height?: number; }) {
  const [instance] = usePDF({ document: doc });

  if (!instance) return <div></div>;

  if (instance.error) return <div><ErrorOutlineRoundedIcon className={styles.error} sx={{ width: '50px', height: '50px' }} /></div>;

  return (
    <Document
      file={instance.url}
      renderMode="svg"
      loading={<CircularProgress className={styles.loading} size={50} />}
      noData={''}
      error={<ErrorOutlineRoundedIcon className={styles.error} sx={{ width: '50px', height: '50px' }} />}
    >
      <Page
        width={width}
        height={height}
        pageNumber={1} />
    </Document>
  );
}
