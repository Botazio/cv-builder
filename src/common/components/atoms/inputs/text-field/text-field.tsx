import styles from './text-field.module.css';


interface TextFieldInterface {
  name: string;
  value: string;
  required?: boolean;
  handleChange?: any;
}


/**
 * Default text field.
 */
export default function TextField({ name, value, required, handleChange }: TextFieldInterface) {

  return (
    <div>
      <input
        className={styles.input}
        required={required ? required : false}
        onInput={handleChange}
        value={value}
        type="text"
        name={name}
      />
    </div>

  );
}
