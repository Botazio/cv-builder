import Footer from '../../organisms/footer/footer';
import Navbar from '../../organisms/navbar/navbar';
import styles from './layout-default.module.css';

/**
  * This component is the default page layout for the application
  */
export default function LayoutDefault({ children }: { children?: React.ReactNode; }) {
  return (
    <div className={styles.content}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}