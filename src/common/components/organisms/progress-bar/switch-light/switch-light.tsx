import cn from 'classnames';
import React from 'react';
import styles from './switch-light.module.css';

/**
  * Circle that lights up when activated. 
  */
export default function SwitchLight({ children, isActive, title }: { children?: React.ReactNode, isActive: boolean; title?: String; }) {
  return (
    <div className={styles.container}>
      <div
        className={cn({
          [styles.wrapper]: true,
          [styles.active]: isActive,
          [styles.inactive]: !isActive
        })}>
        {children}
      </div>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
    </div>
  );
}
