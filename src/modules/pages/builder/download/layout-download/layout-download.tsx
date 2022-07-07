import SpaceDivider from 'common/components/atoms/dividers/space-divider/space-divider';
import LayoutBuilderHeader from 'common/components/layouts/layout-builder/layout-builder-header/layout-builder-header';
import LayoutDefault from 'common/components/layouts/layout-default/layout-default';
import styles from './layout-download.module.css';

/**
  * This component is the layout for the download page
  */
export default function LayoutDownload({ children }: { children?: React.ReactNode; }) {
  return (
    <LayoutDefault>
      <div className={styles.page_header}>
        <SpaceDivider variant="large" />
        <LayoutBuilderHeader title="YOUR PROFESSIONAL CV IS READY!" position='center' fontSize='large' />
      </div>
      <div className={styles.page_body}>
        {children}
      </div>
    </LayoutDefault>
  );
}