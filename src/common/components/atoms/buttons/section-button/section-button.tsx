import styles from './section-button.module.css';
import cn from 'classnames';
import { ButtonInterface } from '../button-interface';

/**
 * Buttons used to save and to cancel in the form experience
 */
export default function SectionButton({ value, type, startIcon, endIcon, handleClick }: ButtonInterface) {

  return (
    <button className={cn({
      [styles.btn]: true,
      [styles.primary]: type === "primary",
      [styles.secondary]: type === "secondary"
    })}
      onClick={handleClick}>
      {startIcon}
      <span>{value}</span>
      {endIcon}
    </button >
  );
}