import React from 'react';
import styles from './multiline-text-field.module.css';

export default function MultilineTextField({ name, handleChange }: { name: string; handleChange?: any; }) {
  return (
    <textarea className={styles.input} name={name} rows={7} onChange={handleChange}></textarea>
  );
}