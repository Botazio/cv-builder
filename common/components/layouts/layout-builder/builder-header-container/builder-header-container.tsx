import React from 'react';
import styles from './builder-header-container.module.css';
import cn from 'classnames';
import LineDivider from '../../../atoms/dividers/line-divider/line-divider';

interface BuilderHeaderInterface {
  title?: string;
  position?: 'left' | 'center' | 'right';
}

/**
 * Header for the different pages of the cv builder
 */
export default function BuilderHeaderContainer({ title, position }: BuilderHeaderInterface) {
  return (
    <div className={cn({
      [styles.container]: true,
      [styles.left]: position === "left",
      [styles.center]: position === "center",
      [styles.right]: position === "right",
    })}>
      <h2 className={styles.title}>{title}</h2>
      <LineDivider />
    </div>
  );
}
