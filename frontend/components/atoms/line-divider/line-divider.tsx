import styles from './line-divider.module.css';

/**
  * Line of width 1px that is used to divide the different sections in the builder form.
  * The color of the divider is defined in the global styles css file.
  */
export default function LineDivider() {
  return (
    <div className={styles.container}>
    </div>
  );
}