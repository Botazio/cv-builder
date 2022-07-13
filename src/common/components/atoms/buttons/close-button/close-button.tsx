import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styles from './close-button.module.css';

/**
 * Standard close button with a cross icon in the middle.
 */
export default function CloseButton({ setActive }: { setActive: Function; }) {
  return (
    <div className={styles.container}
      onClick={() => setActive(false)}>
      <CloseRoundedIcon fontSize='large' />
    </div>
  );
}
