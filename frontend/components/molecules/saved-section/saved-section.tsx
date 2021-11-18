import styles from './saved-section.module.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import LineDivider from '../../atoms/line-divider/line-divider';

/**
 * This component is shared by all the sections to indicate items that have
 * been saved
 */

export default function SavedSection({ id, title, description, handleDelete, handleEdit }: { id?: string, title: string, description: string, handleDelete: any; handleEdit: any; }) {
  return (
    <>
      <div id={id} className={styles.container}>
        <div className={styles.info}>
          <h4>{title ? title : "Title"}</h4>
          <p>{description}</p>
        </div>

        <div className={styles.buttons}>
          <div onClick={handleDelete}><CloseRoundedIcon /></div>
          <div onClick={handleEdit}><EditRoundedIcon /></div>
        </div>

      </div>
      <div className={styles.divider}>
        <LineDivider />
      </div>
    </>
  );
}
