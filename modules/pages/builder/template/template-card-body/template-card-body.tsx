import React from 'react';
import styles from './template-card-body.module.css';
import TemplatePreview from '../template-preview/template-preview';
import { useClientRect } from '@common/utils/hooks';


/**
 * Displays a small card with a cv template preview
 */
export default function TemplateCardBody({ document }: { document: any; }) {
  const [rect, ref] = useClientRect();

  return (
    <div ref={ref} className={styles.container}>
      {rect !== null && <TemplatePreview rect={rect} />}
    </div>
  );
}
