import SpaceDivider from '../../atoms/dividers/space-divider/space-divider';
import ProgressBar from '../../organisms/progress-bar/progress-bar';
import LayoutDefault from '../layout-default/layout-default';
import styles from './layout-builder.module.css';

/**
  * This component is the layout shared by all the pages that are part of the builder.
  */
export default function LayoutBuilder({ header, children }: { header?: React.ReactNode, children?: React.ReactNode; }) {
  return (
    <LayoutDefault>
      <div className={styles.page_header}>
        <SpaceDivider />
        <ProgressBar />
        <SpaceDivider />
        {header}
      </div>
      <div className={styles.builder}>
        {children}
      </div>
    </LayoutDefault>
  );
}