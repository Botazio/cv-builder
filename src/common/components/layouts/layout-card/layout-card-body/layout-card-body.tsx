import React from 'react';
import styles from './layout-card-body.module.css';

/**
 * Acts a wrapper for the body for the different pages that use the card layout.
 */
export default function LayoutCardBody({ children }: { children?: React.ReactNode; }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
