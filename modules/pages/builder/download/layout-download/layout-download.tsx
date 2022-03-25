import DownloadHeader from '../../../../common/components/atoms/download-header/download-header';
import SpaceDivider from '../../../../../common/components/atoms/dividers/space-divider/space-divider';
import LayoutDefault from '../../../../../common/components/layouts/layout-default/layout-default';
import styles from './layout-download.module.css';

/**
  * This component is the layout for the download page
  */
export default function LayoutDownload({ children }: { children?: React.ReactNode; }) {
  return (
    <LayoutDefault>
      <div className={styles.page_header}>
        <SpaceDivider variant="large" />
        <DownloadHeader title="YOUR PROFESSIONAL CV IS READY!" />
      </div>
      <div className={styles.page_body}>
        {children}
      </div>
    </LayoutDefault>
  );
}