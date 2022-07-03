import styles from './logo.module.css';
import Image from 'next/image';

/**
  * Logo for the web app.
  */
export default function Logo() {
  return (
    <div className={styles.container}>
      <Image src="/logo.svg" height={45} width={200} />
    </div>
  );
}
