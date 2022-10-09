
import LayoutCardBody from 'common/components/layouts/layout-card/layout-card-body/layout-card-body';
import React from 'react';
import styles from './download-page-body.module.css';

/**
 * Wrapper for the body of the download page.
 */
export default function DownloadPageBody({ children }: { children: React.ReactNode; }) {

  return (
    <LayoutCardBody>
      <div className={styles.container}>
        <div className={styles.cv_preview}>
          {children}
        </div>
      </div>
    </LayoutCardBody>
  );
}
