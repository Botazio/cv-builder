import styles from './text-field-error.module.css';

/**
 * 
 * Displays an error if the text field is empty.
 */
export default function TextFieldError({ value }: { value?: string; }) {
  return (
    <div className={styles.container_error}>
      {!value && <p className={styles.error}>This field is required</p>}
    </div>
  );
}