import TextFieldError from '../text-field-error/text-field-error';
import styles from './text-field.module.css';


interface TextFieldInterface {
  name: string;
  value: string;
  required?: boolean;
  displayError?: boolean;
  handleChange?: any;
}


/**
 * Default text field.
 */
export default function TextField({ name, value, required, displayError, handleChange }: TextFieldInterface) {

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
      {required && displayError && <TextFieldError value={value} />}
    </div>

  );
}
