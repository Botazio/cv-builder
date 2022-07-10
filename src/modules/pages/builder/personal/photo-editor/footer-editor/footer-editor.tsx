import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { Grid } from "@mui/material";
import OutlinedButton from 'common/components/atoms/buttons/outlined-button/outlined-button';
import styles from './footer-editor.module.css';

export default function FooterEditor({ setActive }: { setActive: Function; }) {
  return (
    <div className={styles.container}>
      <Grid container spacing={2} direction="row-reverse">
        <Grid item xs={12} sm={3}>
          <OutlinedButton
            value="Save"
            type="primary"
            startIcon={<SaveRoundedIcon />} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <OutlinedButton
            value="Discard"
            type="secondary"
            startIcon={<DeleteRoundedIcon />}
            handleClick={() => setActive(false)} />
        </Grid>
      </Grid>
    </div>
  );
}
