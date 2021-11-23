import DownloadHeader from '../../atoms/download-header/download-header';
import SpaceDivider from '../../atoms/space-divider/space-divider';
import LayoutDefault from '../layout-default/layout-default';
import styles from './layout-download.module.css';

/**
  * This component is the layout for the download page
  */
export default function LayoutDownload({ children }: { children?: React.ReactNode; }) {
  return (
    <LayoutDefault>
      <div className={styles.page_header}>
        <SpaceDivider variant="large" />
        <DownloadHeader title="Your professional CV is ready!" />
      </div>
      <div className={styles.page_body}>
        {children}
      </div>
    </LayoutDefault>
  );
}