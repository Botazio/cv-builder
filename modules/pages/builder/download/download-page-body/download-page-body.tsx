import React from 'react';
import BuilderBodyContainer from '@common/components/layouts/layout-builder/layout-builder-body/layout-builder-body';
import TemplatePreview from '@common/components/organisms/template-preview/template-preview';
import styles from './download-page-body.module.css';

export default function DownloadPageBody() {

  return (
    <BuilderBodyContainer>
      <div className={styles.container}>
        <div className={styles.cv_preview}>
          <TemplatePreview document={''} delimitedBy="width" />
        </div>
      </div>
    </BuilderBodyContainer>
  );
}
