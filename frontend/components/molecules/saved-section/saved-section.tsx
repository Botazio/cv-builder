import styles from './saved-section.module.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import LineDivider from '../../atoms/line-divider/line-divider';

/**
 * This component is shared by all the sections to indicate items that have
 * been saved
 */

export default function SavedSection({ id, title, description }: { id?: string, title: string, description: string; }) {
  return (
    <>
      <div id={id} className={styles.container}>
        <div className={styles.info}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>

        <div className={styles.buttons}>
          <div><CloseRoundedIcon /></div>
          <div><EditRoundedIcon /></div>
        </div>

      </div>
      <div className={styles.divider}>
        <LineDivider />
      </div>
    </>
  );
}
