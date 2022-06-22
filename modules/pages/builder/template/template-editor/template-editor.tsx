import CloseButton from "@common/components/atoms/buttons/close-button/close-button";
import Dialog from "@common/components/atoms/dialog/dialog";
import SpaceDivider from "@common/components/atoms/dividers/space-divider/space-divider";
import TemplatePreview from "@common/components/organisms/template-preview/template-preview";
import { ListTemplateThemes, TemplateTheme } from "@modules/cv-templates/utils/styles/interfaces/template-theme.interface";
import ColorSelector from "./color-selector/color-selector";
import styles from './template-editor.module.css';

interface TemplateEditorInterface {
  document: any,
  activeTheme: TemplateTheme,
  setActiveTheme: Function,
  listThemes: ListTemplateThemes,
  active: boolean,
  setActive: Function;
}

function TemplateEditor({ document, activeTheme, setActiveTheme, listThemes, active, setActive }: TemplateEditorInterface) {
  return (
    <Dialog
      active={active}
      setActive={setActive}>
      <div className={styles.container_editor}>

        <div className={styles.container_close_button}>
          <CloseButton setActive={setActive} />
        </div>

        <div className={styles.container_template}>
          <TemplatePreview document={document} delimitedBy="height" />
        </div>

        <SpaceDivider variant="medium" />

        <div className={styles.container_color_selectors}>
          {listThemes.elements.map((theme, index) => (
            <ColorSelector key={index} theme={theme} active={activeTheme} setActive={setActiveTheme} />
          ))}
        </div>

      </div>
    </Dialog>
  );
}

export default TemplateEditor;