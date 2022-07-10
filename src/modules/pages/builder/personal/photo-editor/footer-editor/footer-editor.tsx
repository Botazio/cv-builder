import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { Grid } from "@mui/material";
import FilledButton from "common/components/atoms/buttons/filled-button/filled-button";
import styles from './footer-editor.module.css';

export default function FooterEditor() {
  return (
    <div className={styles.container}>
      <Grid container spacing={2} direction="row-reverse">
        <Grid item xs={12} sm={3}>
          <FilledButton value="Save" type="primary" startIcon={<SaveRoundedIcon />} isActive={false} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FilledButton value="Reset" type="secondary" startIcon={<RestoreRoundedIcon />} isActive={false} />
        </Grid>
      </Grid>
    </div>
  );
}
