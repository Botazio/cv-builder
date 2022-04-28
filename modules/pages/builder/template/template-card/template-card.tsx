import styles from './template-card.module.css';
import cn from 'classnames';
import TemplateCardHeader from './template-card-header/template-card-header';
import SpaceDivider from '@common/components/atoms/dividers/space-divider/space-divider';
import TemplateCardBody from './template-card-body/template-card-body';
import TemplateCardExpandButton from './template-card-expand-button/template-card-expand-button';
import { useState } from 'react';

/**
 * Renders a card used to display a preview of a CV.
 */
export default function TemplateCard({ id, title, document, selected, setSelected }: { id: string; title: string; document: any; selected: string; setSelected: Function; }) {
  const [expanded, setExpanded] = useState(false);

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

      <TemplateCardBody document={document} />

      <div className={styles.expand_button}>
        <TemplateCardExpandButton />
      </div>

    </div>
  );
}
