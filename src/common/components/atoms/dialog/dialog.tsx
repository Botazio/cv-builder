import cn from 'classnames';
import * as ReactDOM from 'react-dom';
import styles from './dialog.module.css';

interface DialogInterface {
  active: boolean,
  setActive: Function,
  type?: string,
  closeOnOutsideClick?: boolean,
  children?: React.ReactNode,
}

/**
 * Displays a modal with the children inside
 */

function Dialog({ active, setActive, type = 'primary', closeOnOutsideClick = true, children }: DialogInterface) {

  const handleOutsideClick = () => {
    if (closeOnOutsideClick) {
      setActive(false);
    }
  };

  if (!active) return;

  return ReactDOM.createPortal(
    <div
      className={cn({
        [styles.dialog]: true,
        [styles.active]: active,
        [styles.inactive]: !active,
      })}
      onClick={() => handleOutsideClick()}>
      <div
        className={cn({
          [styles.content]: true,
          [styles.primary]: type === 'primary',
          [styles.secondary]: type === 'secondary',
        })}
        onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('root')
  );
}

export default Dialog;