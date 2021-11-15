import React from 'react';
import styles from './text-field.module.css';

export default function TextField({ name, value, handleChange }: { name: string; value?: string, handleChange?: any; }) {
  return (
    <input onChange={handleChange} className={styles.input} value={value} type="text" name={name} />
  );
}
