import styles from './text-field-error.module.css';

/**
 * 
 * Work in progress. Displays an error if the text field is empty.
 */
export default function TextFieldError({ value }: { value?: string; }) {
  return (
    <p className={styles.error}>{value ? value : "This field is required"}</p>
  );
}