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
      }, 3000);
    }

    return () => {
      clearTimeout();
    };
  }, [active]);

  return ReactDOM.createPortal(
    <div className={cn({
      [styles.container]: true,
      [styles.info]: type === 'info',
      [styles.success]: type === 'success',
      [styles.error]: type === 'error',
    })}>
      {startIcon}
      <span>{value}</span>
      <CloseRoundedIcon />
    </div>,
    document.getElementById('root')
  );
}
