import React from 'react';
import styles from './input-wrapper.module.css';


/**
 * 
 * This component acts as a wrapper around inputs. 
 * It appends a label to them.
 */
export default function InputWrapper({ label, labelPlaceHolder, children }: { label: string, labelPlaceHolder: string, children: React.ReactNode; }) {
  return (
    <div className={styles.container}>

      {label && labelPlaceHolder && (
        <label htmlFor={label}>{labelPlaceHolder}</label>
      )}

      {children}
    </div>
  );
}