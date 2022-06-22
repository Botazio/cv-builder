import { TemplateTheme } from '@modules/cv-templates/templates/template-theme.interface';
import styles from './color-selector.module.css';
import cn from 'classnames';


function ColorSelector({ theme, active, setActive }: { theme: TemplateTheme; active: TemplateTheme; setActive: Function; }) {
  return (
    <div
      className={cn({
        [styles.container]: true,
        [styles.active]: active === theme,
      })}
      onClick={() => setActive(theme)}>
      <div style={{ "backgroundColor": theme.primary }}></div>
      <div style={{ "backgroundColor": theme.secondary }}></div>
    </div>
  );
}

export default ColorSelector;