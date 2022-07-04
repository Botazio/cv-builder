import styles from './logo.module.css';

/**
  * Logo for the web app.
  */
export default function Logo() {
  return (
    <div className={styles.container}>
      <img src="/logo.svg" height={45} width={200} />
    </div>
  );
}
