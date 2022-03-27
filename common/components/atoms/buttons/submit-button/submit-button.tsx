import { Button } from '@mui/material';
import { useAppSelector } from '../../../../../state/hooks';
import { saveState } from '../../../../../state/utils';
import styles from './submit-button.module.css';

interface SubmitButtonInterface {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

/**
 * 
 * Button used to navigate to the next section of the form.
 * It saves the current state into local storage
 */
export default function SubmitButton({ label, startIcon, endIcon }: SubmitButtonInterface) {
  const state = useAppSelector(state => state);

  return (
    <button
      className={styles.btn}
      onClick={() => saveState(state)}
    >
      {startIcon}
      <span>{label}</span>
      {endIcon}
    </button>
  );
}
