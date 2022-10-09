import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { CircularProgress } from '@mui/material';
import { usePDF } from '@react-pdf/renderer';
import { useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import styles from './next-pdf-viewer.module.css';


/**
 * Creates and displays a PDF template with the data from the builder form.
 */
export default function NextPDFViewer({ doc, width, height, setURL }: { doc: any; width?: number; height?: number; setURL?: Function; }) {
  const [instance, updateInstance] = usePDF({ document: doc });

  useEffect(() => {
    if (instance) {
      updateInstance();
    }
  }, [doc]);

  useEffect(() => {
    if (instance && setURL) {
      setURL(instance.url);
    }
  }, [instance, setURL]);


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
