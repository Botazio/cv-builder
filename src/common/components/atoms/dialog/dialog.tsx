import cn from 'classnames';
import styles from './dialog.module.css';
import * as ReactDOM from 'react-dom';

interface DialogInterface {
  active: boolean,
  setActive: Function,
  type?: string,
  children?: React.ReactNode,
}

/**
 * Displays a modal with the children inside
 */

function Dialog({ active, setActive, type = 'primary', children }: DialogInterface) {
  console.log(active);

  return ReactDOM.createPortal(
    <div
      className={cn({
        [styles.dialog]: true,
        [styles.active]: active,
        [styles.inactive]: !active,
      })}
      onClick={() => setActive(false)}>
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