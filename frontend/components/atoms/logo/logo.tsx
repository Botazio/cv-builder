import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import styles from './logo.module.css';

/**
  * Logo for the web app.
  */
export default function Logo() {
  return (
    <div className={styles.container}>
      <DescriptionRoundedIcon fontSize="large" />
      <h2>CV Builder</h2>
    </div>
  );
}
