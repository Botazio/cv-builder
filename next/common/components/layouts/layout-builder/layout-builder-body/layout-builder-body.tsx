import React from 'react';
import styles from './layout-builder-body.module.css';

/**
 * Acts a wrapper for the body in the different pages of the cv builder
 */
export default function LayoutBuilderBody({ children }: { children?: React.ReactNode; }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
