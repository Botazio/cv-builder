import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { SET_FORM_FIELD } from '../../personal.actions';
import styles from './photo-field-active.module.css';

export default function PhotoFieldActive() {
  const photoURL = useAppSelector(state => state.builder.personal.photoURL);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container_photo}>
      <img className={styles.photo} src={photoURL} alt="Profile photo" />
      <button
        className={styles.delete_button}
        onClick={() => dispatch({ type: SET_FORM_FIELD, payload: '', field: "photoURL" })}>
        <DeleteRoundedIcon />
        <span>Delete</span>
      </button>
    </div>
  );
}
