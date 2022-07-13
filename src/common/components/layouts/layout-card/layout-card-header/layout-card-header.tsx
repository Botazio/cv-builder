import cn from 'classnames';
import LineDivider from '../../../atoms/dividers/line-divider/line-divider';
import styles from './layout-card-header.module.css';

interface BuilderHeaderInterface {
  title?: string;
  position?: 'left' | 'center' | 'right';
  fontSize?: 'small' | 'medium' | 'large';
}

/**
 * Header for pages that use the card display
 */
export default function LayoutCardHeader({ title, position, fontSize = "medium" }: BuilderHeaderInterface) {
  return (
    <div className={cn({
      [styles.container]: true,
      [styles.left]: position === "left",
      [styles.center]: position === "center",
      [styles.right]: position === "right",
    })}>
      {(fontSize === "small") && <h3 className={styles.title}>{title}</h3>}
      {(fontSize === "medium") && <h2 className={styles.title}>{title}</h2>}
      {(fontSize === "large") && <h1 className={styles.title}>{title}</h1>}
      <LineDivider />
    </div>
  );
}
