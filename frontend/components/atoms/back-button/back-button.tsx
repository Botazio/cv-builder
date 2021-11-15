import { Button } from '@mui/material';
import styles from './back-button.module.css';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

export default function BackButton() {
  return (
    <Button className={styles.btn} startIcon={<ArrowBackIosRoundedIcon />} variant="contained" disableElevation >
      Back
    </Button>
  );
}