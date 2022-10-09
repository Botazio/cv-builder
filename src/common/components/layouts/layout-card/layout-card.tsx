import LayoutDefault from '../layout-default/layout-default';
import styles from './layout-card.module.css';


/**
 * Default layout for pages where we want the default card display.
 */
export default function LayoutCard({ header, children }: { header?: React.ReactNode, children?: React.ReactNode; }) {
  return (
    <LayoutDefault>
      <div className={styles.page_header}>
        {header}
      </div>
      <div className={styles.builder}>
        {children}
      </div>
    </LayoutDefault>
  );
}
