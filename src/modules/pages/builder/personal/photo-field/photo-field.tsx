import { useState } from 'react';
import { useAppSelector } from 'state/hooks';
import PhotoEditor from '../photo-editor/photo-editor';
import PhotoFieldActive from './photo-field-active/photo-field-active';
import PhotoFieldInactive from './photo-field-inactive/photo-field-inactive';
import styles from './photo-field.module.css';

/**
 * Input type of photo. It is part of the form data but
 * due to the data nature it is not store in with the rest of the elements in the provider.
 */
export default function PhotoField() {
  const [isEditorActive, setIsEditorActive] = useState<boolean>(false);

  const photoURL = useAppSelector(state => state.builder.personal.photoURL);

  return (
    <>
      {!photoURL && <div className={styles.container}>
        <PhotoFieldInactive setIsEditorActive={setIsEditorActive} />
      </div>}

      {isEditorActive && <PhotoEditor active={isEditorActive} setActive={setIsEditorActive} />}

      {photoURL && <div className={styles.container}>
        <PhotoFieldActive />
      </div>}
    </>
  );
}
