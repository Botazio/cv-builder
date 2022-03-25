import React from 'react';
import styles from './builder-body-container.module.css';

/**
 * Acts a wrapper for the body in the different pages of the cv builder
 */
export default function BuilderBodyContainer({ children }: { children?: React.ReactNode; }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
