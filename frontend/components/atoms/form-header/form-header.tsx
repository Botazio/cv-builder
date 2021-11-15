import LineDivider from '../line-divider/line-divider';
import styles from './form-header.module.css';

/**
  * Header for the builder form
  */
export default function FormHeader({ title }: { title: String; }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <LineDivider />
    </div>
  );
}