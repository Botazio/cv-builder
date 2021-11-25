import React from 'react';
import styles from './templates-preview.module.css';
import { Grid } from '@mui/material';
import TemplateCard from '../../organisms/template-card/template-card';
import BuilderBodyContainer from '../../atoms/builder-body-container/builder-body-container';

export default function TemplatesPreview() {
  const [selected, setSelected] = React.useState("london");

  return (
    <BuilderBodyContainer>
      <div className={styles.preview}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TemplateCard id="london" title="London" selected={selected} setSelected={setSelected} document={""} />
          </Grid>
        </Grid>
      </div>
    </BuilderBodyContainer>
  );
}