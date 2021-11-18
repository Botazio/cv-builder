import { useEffect, useState } from 'react';
import TextFieldError from '../text-field-error/text-field-error';
import styles from './text-field.module.css';
import cn from 'classnames';
import { useForm } from '../../../providers/form-provider';

interface TextFieldInterface {
  name: string;
  value: string;
  required?: boolean;
  min?: number;
  max?: number;
  handleChange?: any;
}

export default function TextField({ name, value, required, min, max, handleChange }: TextFieldInterface) {
  const [error, setError] = useState<string>(null);

  const { formError } = useForm();

  useEffect(() => {
    if (required && formError && value === "") {
      setError("This field is required");
    }
  }, [formError]);

  function handleOnBlur() {
    if (required && value === "") {
      setError("This field is required");
    }
    else if (min && value.length <= min) {
      setError(`It must have more than ${min} characters`);
    }
    else {
      setError(null);
    }
  }

  return (
    <div>
      <input
        required={required ? required : false}
        onChange={handleChange}
        className={cn({
          [styles.input]: true,
          [styles.error]: error,
        })}
        value={value}
        type="text"
        name={name}
        onBlur={() => handleOnBlur()}
        maxLength={max ? max : 2000}
      />

      {error && <TextFieldError value={error} />}
    </div>

  );
}
