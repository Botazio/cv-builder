import React from 'react';
import LineDivider from '../../atoms/line-divider/line-divider';
import OutlinedButton from '../../atoms/outlined-button/outlined-button';
import styles from './form-footer.module.css';

export default function FormFooter({ children, divider, ...restProps }) {
  return (
    <>
      {divider && <LineDivider />}
      <div className={styles.container}>
        <OutlinedButton {...restProps}>
          {children}
        </OutlinedButton>
      </div>
    </>
  );
}
