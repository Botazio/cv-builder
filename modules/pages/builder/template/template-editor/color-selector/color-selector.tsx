import { TemplateTheme } from '@modules/cv-templates/templates/template-theme.interface';
import styles from './color-selector.module.css';
import cn from 'classnames';
import { Template } from '@modules/cv-templates/templates/template.interface';
import { useAppDispatch } from '@state/hooks';
import { SET_TEMPLATE_THEME } from '../../template.actions';


function ColorSelector({ theme, template }: { theme: TemplateTheme; template: Template; }) {

  const dispatch = useAppDispatch();

  return (
    <div
      className={cn({
        [styles.container]: true,
        [styles.active]: JSON.stringify(template.activeTheme) === JSON.stringify(theme),
      })}
      onClick={() => dispatch({ type: SET_TEMPLATE_THEME, payload: theme, templateName: template.name })}>
      <div style={{ "backgroundColor": theme.primary }}></div>
      <div style={{ "backgroundColor": theme.secondary }}></div>
    </div>
  );
}

export default ColorSelector;