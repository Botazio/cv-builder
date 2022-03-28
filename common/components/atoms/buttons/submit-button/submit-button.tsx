import { useAppSelector } from '../../../../../state/hooks';
import { saveState } from '../../../../../state/utils';
import { ButtonInterface } from '../button-interface';
import styles from './submit-button.module.css';

/**
 * 
 * Button used to navigate to the next section of the form.
 * It saves the current state into local storage
 */
export default function SubmitButton({ value, startIcon, endIcon }: ButtonInterface) {
  const state = useAppSelector(state => state);

  return (
    <button
      className={styles.btn}
      onClick={() => saveState(state)}
    >
      {startIcon}
      <span>{value}</span>
      {endIcon}
    </button>
  );
}
