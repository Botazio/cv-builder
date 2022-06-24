import styles from './template-card.module.css';
import cn from 'classnames';
import TemplateCardHeader from './template-card-header/template-card-header';
import SpaceDivider from '@common/components/atoms/dividers/space-divider/space-divider';
import TemplateCardEditorButton from './template-card-editor-button/template-card-editor-button';
import { useEffect, useState } from 'react';
import TemplateEditor from '../template-editor/template-editor';
import TemplatePreview from '@common/components/organisms/template-preview/template-preview';
import { ListTemplateThemes } from '@modules/cv-templates/templates/template-theme.interface';

interface TemplateCardInterface {
  id: string;
  title: string;
  document: any;
  listThemes: ListTemplateThemes,
  selected: string;
  setSelected: Function;
}

/**
 * Renders a card used to display a preview of a CV.
 */
export default function TemplateCard({ id, title, document, listThemes, selected, setSelected }: TemplateCardInterface) {
  const [isEditorActive, setIsEditorActive] = useState(false);
  const [activeTheme, setActiveTheme] = useState(null);

  useEffect(() => {
    setActiveTheme(listThemes[0]);
  }, []);

  const handleChange = () => {
    setSelected(id);
  };

  return (
    <div
      className={cn({
        [styles.container]: true,
        [styles.selected]: id === selected,
        [styles.unselected]: id !== selected
      })}
      onClick={handleChange}>

      <TemplateCardHeader title={title} checked={id === selected} />

      <SpaceDivider variant="small" />

      <TemplatePreview document={document} delimitedBy="width" />

      <div className={styles.editor_button}>
        <TemplateCardEditorButton active={isEditorActive} setActive={setIsEditorActive} />
      </div>

      {isEditorActive &&
        <TemplateEditor
          document={document}
          activeTheme={activeTheme}
          setActiveTheme={setActiveTheme}
          listThemes={listThemes}
          active={isEditorActive}
          setActive={setIsEditorActive} />}

    </div>
  );
}
