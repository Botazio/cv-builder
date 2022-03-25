import { Button } from '@mui/material';
import styles from './submit-button.module.css';

/**
 * 
 * Button used to navigate to the next section of the form.
 * It saves the current form data into local storage
 */
export default function SubmitButton({ label, ...restProps }) {
  return (
    <Button className={styles.btn} variant="contained" disableElevation {...restProps}>
      {label}
    </Button>
  );
}
