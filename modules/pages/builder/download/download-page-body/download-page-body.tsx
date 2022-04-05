import React from 'react';
import { useClientRect } from '@common/utils/hooks';
import BuilderBodyContainer from '@common/components/layouts/layout-builder/layout-builder-body/layout-builder-body';
import TemplatePreview from '@common/components/organisms/template-preview/template-preview';
import styles from './download-page-body.module.css';

export default function DownloadPageBody() {
  const [rect, ref] = useClientRect();

  return (
    <BuilderBodyContainer>
      <div className={styles.container}>
        <div className={styles.cv_preview}>
          <div ref={ref}>
            {rect !== null && <TemplatePreview rect={rect} />}
          </div>
        </div>
      </div>
    </BuilderBodyContainer>
  );
}
