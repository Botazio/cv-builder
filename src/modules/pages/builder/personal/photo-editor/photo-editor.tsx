
import CloseButton from "common/components/atoms/buttons/close-button/close-button";
import Dialog from "common/components/atoms/dialog/dialog";
import SpaceDivider from "common/components/atoms/dividers/space-divider/space-divider";
import { useState } from "react";
import FooterEditor from "./footer-editor/footer-editor";
import styles from './photo-editor.module.css';
import PhotoPreview from "./photo-preview/photo-preview";
import PhotoSelector from "./photo-selector/photo-selector";

interface PhotoEditorInterface {
  active: boolean,
  setActive: Function;
}

/**
 * Allows the user to select a photo for the CV and displays it.
 */
export default function PhotoEditor({ active, setActive }: PhotoEditorInterface) {
  const [photo, setPhoto] = useState(null);

  return (
    <Dialog active={active} setActive={setActive} type="secondary">
      <div className={styles.container}>

        <div className={styles.header}>
          <h2>Upload photo</h2>
          <div className={styles.close_button}>
            <CloseButton setActive={setActive} />
          </div>
        </div>

        <SpaceDivider />

        <div className={styles.body}>
          {!photo && <PhotoSelector setPhoto={setPhoto} />}
          {photo && <PhotoPreview photo={photo} />}
        </div>

        <SpaceDivider />

        {photo && <div className={styles.footer}>
          <FooterEditor setActive={setActive} photoURL={photo.url} setPhoto={setPhoto} />
        </div>}

      </div>
    </Dialog>
  );
}
