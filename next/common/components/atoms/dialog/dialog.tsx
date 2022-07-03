import cn from 'classnames';
import styles from './dialog.module.css';
import * as ReactDOM from 'react-dom';

interface DialogInterface {
  active: boolean,
  setActive: Function,
  children?: React.ReactNode,
}

/**
 * Displays a modal with the children inside
 */

function Dialog({ active, setActive, children }: DialogInterface) {

  return ReactDOM.createPortal(
    <div
      className={cn({
        [styles.dialog]: true,
        [styles.active]: active,
        [styles.inactive]: !active
      })}
      onClick={() => setActive(false)}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('__next')
  );
}

export default Dialog;