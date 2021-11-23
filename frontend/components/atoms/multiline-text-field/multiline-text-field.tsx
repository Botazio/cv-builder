import { InputUnstyled } from '@mui/core';
import React from 'react';


interface TextFieldInterface {
  name: string;
  value: string;
  required?: boolean;
  handleChange?: any;
}

/**
 * 
 * Same as the other text fields but multiline. It is used for descriptions and large paragrahs.
 */
export default function MultilineTextField({ name, value, required, handleChange }: TextFieldInterface) {
  return (
    <InputUnstyled
      required={required ? required : false}
      onChange={handleChange}
      multiline={true}
      value={value}
      type="text"
      name={name}
    />
  );
}