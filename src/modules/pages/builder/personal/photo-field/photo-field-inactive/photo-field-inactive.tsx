import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import styles from './photo-field-inactive.module.css';

export default function PhotoFieldInactive({ setIsEditorActive }: { setIsEditorActive: Function; }) {
  return (
    <div
      className={styles.container_input}
      onClick={() => setIsEditorActive(true)}>
      <span><PersonRoundedIcon sx={{ fontSize: 75 }} /></span>
      <p>Add photo</p>
    </div>
  );
}
