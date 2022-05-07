import cn from 'classnames';
import styles from './dialog.module.css';

interface DialogInterface {
  active: boolean,
  setActive: Function,
  children?: React.ReactNode,
}

function Dialog({ active, setActive, children }: DialogInterface) {

  return (
    <div
      className={cn({
        [styles.dialog]: true,
        [styles.active]: active,
        [styles.inactive]: !active
      })}
      onClick={() => setActive(false)}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default Dialog;