import EditRoundedIcon from '@mui/icons-material/EditRounded';
import styles from './template-card-editor-button.module.css';

function TemplateCardEditorButton({ active, setActive }: { active: boolean, setActive: Function; }) {
  return (
    <div className={styles.container} onClick={() => setActive(!active)}>
      <EditRoundedIcon fontSize='medium' />
    </div>
  );
}

export default TemplateCardEditorButton;