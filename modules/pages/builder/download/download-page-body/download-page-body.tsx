import React from 'react';
import BuilderBodyContainer from '@common/components/layouts/layout-builder/layout-builder-body/layout-builder-body';
import styles from './download-page-body.module.css';

export default function DownloadPageBody({ children }: { children: React.ReactNode; }) {

  return (
    <BuilderBodyContainer>
      <div className={styles.container}>
        <div className={styles.cv_preview}>
          {children}
        </div>
      </div>
    </BuilderBodyContainer>
  );
}
