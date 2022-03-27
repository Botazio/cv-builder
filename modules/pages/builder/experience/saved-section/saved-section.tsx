import styles from './saved-section.module.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LineDivider from '../../../../../common/components/atoms/dividers/line-divider/line-divider';


interface SavedSectionInterface {
  id?: string;
  title: string;
  description: string;
}

/**
 * This component is shared by all the sections to indicate items that have
 * been saved
 */
export default function SavedSection({ id, title, description }: SavedSectionInterface) {
  return (
    <>
      <div id={id} className={styles.container}>
        <div className={styles.info}>
          <h4>{title ? title : "Title"}</h4>
          <p>{description}</p>
        </div>

        <div className={styles.buttons}>
          <div><CloseRoundedIcon /></div>
          <div><EditRoundedIcon /></div>
          <div><KeyboardArrowUpRoundedIcon /></div>
          <div><KeyboardArrowDownRoundedIcon /></div>
        </div>

      </div>
      <div className={styles.divider}>
        <LineDivider />
      </div>
    </>
  );
}
