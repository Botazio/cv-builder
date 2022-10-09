import styles from './text-field-error.module.css';

/**
 * Displays a text field error.
 */
export default function TextFieldError() {
  return (
    <div className={styles.container_error}>
      <p className={styles.error}>This field is required</p>
    </div>
  );
}