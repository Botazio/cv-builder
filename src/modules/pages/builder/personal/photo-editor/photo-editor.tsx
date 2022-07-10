
import CloseButton from "common/components/atoms/buttons/close-button/close-button";
import Dialog from "common/components/atoms/dialog/dialog";
import SpaceDivider from "common/components/atoms/dividers/space-divider/space-divider";
import FooterEditor from "./footer-editor/footer-editor";
import styles from './photo-editor.module.css';
import PhotoPreview from "./photo-preview/photo-preview";

interface PhotoEditorInterface {
  active: boolean,
  setActive: Function;
}

/**
 * Allows the user to select a photo for the CV and displays it.
 */
export default function PhotoEditor({ active, setActive }: PhotoEditorInterface) {
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
          <PhotoPreview />
        </div>

        <SpaceDivider />

        <div className={styles.footer}>
          <FooterEditor />
        </div>
      </div>
    </Dialog>
  );
}
