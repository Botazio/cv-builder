import { ButtonInterface } from '../button-interface';
import styles from './submit-button.module.css';

/**
 * 
 * Button used to navigate to the next section of the form.
 */
export default function SubmitButton({ value, startIcon, endIcon }: ButtonInterface) {

  return (
    <button
      className={styles.btn}
    >
      {startIcon}
      <span>{value}</span>
      {endIcon}
    </button>
  );
}
