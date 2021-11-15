import React from 'react';
import styles from './multiline-text-field.module.css';

export default function MultilineTextField({ name, value, handleChange }: { name: string; value: string, handleChange?: any; }) {
  return (
    <textarea className={styles.input} name={name} value={value} rows={7} onChange={handleChange}></textarea>
  );
}