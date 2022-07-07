import styles from './outlined-button.module.css';
import React from 'react';
import { ButtonInterface } from '../button-interface';

/**
 * 
 * Default button in the application. 
 */
export default function OutlinedButton({ value, startIcon, endIcon, handleClick }: ButtonInterface) {

  return (
    <button
      className={styles.btn}
      onClick={handleClick}
    >
      {startIcon}
      <span>{value}</span>
      {endIcon}
    </button>
  );
}
