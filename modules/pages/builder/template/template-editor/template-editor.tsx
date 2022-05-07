import Dialog from "@common/components/atoms/dialog/dialog";
import TemplatePreview from "@common/components/organisms/template-preview/template-preview";
import ColorSelector from "./color-selector/color-selector";
import styles from './template-editor.module.css';

function TemplateEditor({ document, active, setActive }: { document: any, active: boolean, setActive: Function; }) {
  return (
    <Dialog
      active={active}
      setActive={setActive}>
      <div className={styles.container_editor}>
        <div className={styles.container_template}>
          <TemplatePreview document={document} delimitedBy="height" />
        </div>
        <div className={styles.container_color_selectors}>
          <ColorSelector primary="blue" secondary="red" />
          <ColorSelector primary="blue" secondary="red" />
          <ColorSelector primary="blue" secondary="red" />
          <ColorSelector primary="blue" secondary="red" />
        </div>
      </div>
    </Dialog>
  );
}

export default TemplateEditor;