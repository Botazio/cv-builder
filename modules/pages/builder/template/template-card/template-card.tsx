import styles from './template-card.module.css';
import cn from 'classnames';
import TemplateCardHeader from './template-card-header/template-card-header';
import SpaceDivider from '@common/components/atoms/dividers/space-divider/space-divider';
import TemplateCardEditorButton from './template-card-editor-button/template-card-editor-button';
import { useState } from 'react';
import TemplateEditor from '../template-editor/template-editor';
import TemplatePreview from '@common/components/organisms/template-preview/template-preview';
import { useAppDispatch, useAppSelector } from '@state/hooks';
import { getActiveTemplateID, getTemplate } from '../template.reducer';
import { SET_ACTIVE_TEMPLATE } from '../template.actions';
import { TemplateNames } from '@modules/cv-templates/templates/template-names.enum';

interface TemplateCardInterface {
  id: TemplateNames;
  title: string;
  document: any;
}

/**
 * Renders a card used to display a preview of a CV.
 */
export default function TemplateCard({ id, title, document }: TemplateCardInterface) {
  const [isEditorActive, setIsEditorActive] = useState(false);

  const state = useAppSelector(state => state.builder);
  const activeTemplateName = getActiveTemplateID(state);
  const template = getTemplate(state, id);

  const dispatch = useAppDispatch();

  return (
    <div
      className={cn({
        [styles.container]: true,
        [styles.selected]: id === activeTemplateName,
        [styles.unselected]: id !== activeTemplateName
      })}
      onClick={() => dispatch({ type: SET_ACTIVE_TEMPLATE, payload: template.name })}>

      <TemplateCardHeader title={title} checked={id === activeTemplateName} />

      <SpaceDivider variant="small" />

      <TemplatePreview document={document} delimitedBy="width" />

      <div className={styles.editor_button}>
        <TemplateCardEditorButton active={isEditorActive} setActive={setIsEditorActive} />
      </div>

      {isEditorActive &&
        <TemplateEditor
          document={document}
          template={template}
          active={isEditorActive}
          setActive={setIsEditorActive} />}

    </div>
  );
}
