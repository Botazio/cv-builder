import styles from './text-area.module.css';


interface TextAreaInterface {
  name: string;
  value: string;
  required?: boolean;
  handleChange?: any;
}

/**
 * 
 * Same as the other text fields but multiline. It is used for descriptions and large paragrahs.
 */
export default function TextArea({ name, value, required, handleChange }: TextAreaInterface) {
  return (
    <textarea
      className={styles.textarea}
      required={required ? required : false}
      onChange={handleChange}
      value={value}
      name={name}
    />
  );
}