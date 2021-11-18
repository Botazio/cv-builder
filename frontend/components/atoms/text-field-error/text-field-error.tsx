import styles from './text-field-error.module.css';

export default function TextFieldError({ value }: { value?: string; }) {
  return (
    <p className={styles.error}>{value ? value : "This field is required"}</p>
  );
}