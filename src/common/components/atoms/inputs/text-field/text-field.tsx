import { useEffect, useState } from 'react';
import TextFieldError from '../text-field-error/text-field-error';
import styles from './text-field.module.css';


interface TextFieldInterface {
  name: string;
  value: string;
  required?: boolean;
  error?: boolean;
  handleChange?: any;
}


/**
 * Default text field.
 */
export default function TextField({ name, value, required, error, handleChange }: TextFieldInterface) {
  const [displayError, setDisplayError] = useState(false);
  const [hasFieldBeenTouched, setHasFieldBeenTouched] = useState(false);

  useEffect(() => {
    if (!!value) {
      setHasFieldBeenTouched(true);
    }
  }, [value]);

  useEffect(() => {
    if (!required) {
      return;
    }

    if (value === '' && (error || hasFieldBeenTouched)) {
      setDisplayError(true);
    } else {
      setDisplayError(false);
    }

  }, [error, hasFieldBeenTouched, required, value]);


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
      {displayError && <TextFieldError />}
    </div>

  );
}
