import { ButtonInterface } from '../button-interface';
import styles from './submit-button.module.css';
import cn from 'classnames';

/**
 * 
 * Button used to navigate to the next section of the form.
 */
export default function SubmitButton({ value, startIcon, endIcon, isActive }: ButtonInterface) {

  return (
    <button
      className={cn({
        [styles.btn]: true,
        [styles.disabled]: isActive === false,
      })}
    >
      {startIcon}
      <span>{value}</span>
      {endIcon}
    </button>
  );
}
