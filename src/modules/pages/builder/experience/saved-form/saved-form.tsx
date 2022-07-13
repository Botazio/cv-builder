import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import LineDivider from 'common/components/atoms/dividers/line-divider/line-divider';
import { useAppDispatch } from 'state/hooks';
import { IterativeExperienceSections } from '../experience-sections.enum';
import { DELETE_FORM, MOVE_FORM_DOWN, MOVE_FORM_UP, UPDATE_FORM } from '../experience.actions';
import styles from './saved-form.module.css';


interface SavedSectionInterface {
  id?: string;
  title: string;
  description?: string;
  elementID: string;
  sectionCode: IterativeExperienceSections;
}

/**
 * Displays information about items that have been saved
 */
export default function SavedForm({ id, title, description, elementID, sectionCode }: SavedSectionInterface) {
  const dispatch = useAppDispatch();

  return (
    <>
      <div id={id} className={styles.container}>
        <div className={styles.info}>
          <h4 className={styles.title}>{title ? title : "Title"}</h4>
          <p className={styles.description}>{description ? description : ""}</p>
        </div>

        <div className={styles.buttons}>
          <div onClick={() => dispatch({ type: DELETE_FORM, payload: elementID, section: sectionCode })}>
            <CloseRoundedIcon />
          </div>
          <div onClick={() => dispatch({ type: UPDATE_FORM, payload: elementID, section: sectionCode })}>
            <EditRoundedIcon />
          </div>
          <div onClick={() => dispatch({ type: MOVE_FORM_UP, payload: elementID, section: sectionCode })}>
            <KeyboardArrowUpRoundedIcon />
          </div>
          <div onClick={() => dispatch({ type: MOVE_FORM_DOWN, payload: elementID, section: sectionCode })}>
            <KeyboardArrowDownRoundedIcon />
          </div>
        </div>

      </div>
      <div className={styles.divider}>
        <LineDivider />
      </div>
    </>
  );
}
