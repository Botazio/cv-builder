import cn from 'classnames';
import { ButtonInterface } from '../button-interface';
import styles from './outlined-button.module.css';

/**
 * Default outlined button. 
 */
export default function OutlinedButton({ value, startIcon, endIcon, type = "primary", isActive = true, handleClick }: ButtonInterface) {

  return (
    <button
      className={cn({
        [styles.btn]: true,
        [styles.disabled]: isActive === false,
        [styles.primary]: type === "primary" && isActive,
        [styles.secondary]: type === "secondary" && isActive,
      })}
      onClick={handleClick}
    >
      {startIcon}
      <span>{value}</span>
      {endIcon}
    </button>
  );
}
