import { Button } from '@mui/material';
import styles from './submit-button.module.css';

export default function SubmitButton({ label, ...restProps }) {
  return (
    <Button className={styles.btn} variant="contained" disableElevation {...restProps}>
      {label}
    </Button>
  );
}
