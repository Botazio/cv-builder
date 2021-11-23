import React from 'react';
import styles from './builder-header-container.module.css';
import cn from 'classnames';

interface BuilderHeaderInterface {
  children?: React.ReactNode;
  position?: 'left' | 'center' | 'right';
}

/**
 * Acts a wrapper for the header in the different pages of the cv builder
 */
export default function BuilderHeaderContainer({ children, position }: BuilderHeaderInterface) {
  return (
    <div className={cn({
      [styles.container]: true,
      [styles.left]: position === "left",
      [styles.center]: position === "center",
      [styles.right]: position === "right",
    })}>
      {children}
    </div>
  );
}
