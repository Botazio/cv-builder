import { Button } from '@mui/material';
import styles from './outlined-button.module.css';
import React from 'react';

/**
 * 
 * Default button in the application. 
 */
export default function OutlinedButton({ children, ...restProps }) {

  return (
    <Button className={styles.btn} {...restProps} variant="outlined">
      {children}
    </Button >
  );
}
