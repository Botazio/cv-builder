import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import styles from './back-button.module.css';

/**
 * 
 * Used to navigate back in the form builder.
 */
export default function BackButton() {
  return (
    <button className={styles.btn}>
      <ArrowBackIosRoundedIcon />
      <span>Back</span>
    </button>
  );
}