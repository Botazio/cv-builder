import { useState } from 'react';
import styles from './photo-field.module.css';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PhotoEditor from '../photo-editor/photo-editor';

/**
 * Input type of photo. It is part of the form data but
 * due to the data nature it is not store in with the rest of the elements in the provider.
 */
export default function PhotoField() {
  const [isEditorActive, setIsEditorActive] = useState<boolean>(false);

  return (
    <>
      <div className={styles.container} onClick={() => setIsEditorActive(true)}>
        <span><PersonRoundedIcon sx={{ fontSize: 75 }} /></span>
        <p>Add photo</p>
      </div>

      {isEditorActive && <PhotoEditor active={isEditorActive} setActive={setIsEditorActive} />}
    </>
  );
}
