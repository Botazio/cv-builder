import cn from 'classnames';
import { ButtonInterface } from '../button-interface';
import styles from './filled-button.module.css';


export default function FilledButton({ value, startIcon, endIcon, type = "primary", isActive }: ButtonInterface) {

  return (
    <button
      className={cn({
        [styles.btn]: true,
        [styles.disabled]: isActive === false,
        [styles.primary]: type === "primary" && isActive,
        [styles.secondary]: type === "secondary" && isActive,
      })}
    >
      {startIcon}
      <span>{value}</span>
      {endIcon}
    </button>
  );
}
