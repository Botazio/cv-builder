import React from 'react';
import styles from './layout-builder-header.module.css';
import cn from 'classnames';
import LineDivider from '../../../atoms/dividers/line-divider/line-divider';

interface BuilderHeaderInterface {
  title?: string;
  position?: 'left' | 'center' | 'right';
  fontSize?: 'small' | 'medium' | 'large';
}

/**
 * Header for the different pages of the cv builder
 */
export default function LayoutBuilderHeader({ title, position, fontSize = "medium" }: BuilderHeaderInterface) {
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
