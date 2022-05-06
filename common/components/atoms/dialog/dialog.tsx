import cn from 'classnames';
import styles from './dialog.module.css';


function Dialog({ active, setActive, children }: { active: boolean, setActive: Function, children?: React.ReactChildren; }) {

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