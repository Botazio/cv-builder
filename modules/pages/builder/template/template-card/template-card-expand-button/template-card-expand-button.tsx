import EditRoundedIcon from '@mui/icons-material/EditRounded';
import styles from './template-card-expand-button.module.css';

function TemplateCardExpandButton() {
  return (
    <div className={styles.container}>
      <EditRoundedIcon fontSize='medium' />
    </div>
  );
}

export default TemplateCardExpandButton;