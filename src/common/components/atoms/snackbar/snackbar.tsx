import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import cn from 'classnames';
import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from './snackbar.module.css';

interface SnackBarInterface {
  value: string,
  active: boolean,
  setActive: Function,
  type?: 'success' | 'error' | 'info',
  startIcon?: React.ReactNode,
}


export default function SnackBar({ value, active, setActive, type = 'success', startIcon }: SnackBarInterface) {

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActive(false);
      }, 2000);
    }

    return () => {
      clearTimeout();
    };
  }, [active]);

  if (!active) return;

  return ReactDOM.createPortal(
    <div className={cn({
      [styles.container]: true,
      [styles.info]: type === 'info',
      [styles.success]: type === 'success',
      [styles.error]: type === 'error',
    })}>
      {startIcon}
      <span>{value}</span>
      <div className={cn({
        [styles.close_icon]: true,
        [styles.close_icon_info]: type === 'info',
        [styles.close_icon_success]: type === 'success',
        [styles.close_icon_error]: type === 'error',
      })}
        onClick={() => setActive(false)}>
        <CloseRoundedIcon />
      </div>
    </div>,
    document.getElementById('root')
  );
}
