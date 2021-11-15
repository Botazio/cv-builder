import SpaceDivider from '../../atoms/space-divider/space-divider';
import Footer from '../../organisms/footer/footer';
import Navbar from '../../organisms/navbar/navbar';
import ProgressBar from '../../organisms/progress-bar/progress-bar';
import styles from './layout-builder.module.css';

/**
  * This component is the layout shared by all the pages that are part of the builder.
  */
export default function LayoutBuilder({ header, children }: { header?: React.ReactNode, children?: React.ReactNode; }) {
  return (
    <>
      <Navbar />
      <div className={styles.page_header}>
        <SpaceDivider />
        <ProgressBar />
        <SpaceDivider />
        {header}
      </div>
      <div className={styles.builder}>
        {children}
      </div>
      <Footer />
    </>
  );
}