import React from 'react';
import LineDivider from '../../atoms/dividers/line-divider/line-divider';
import OutlinedButton from '../../atoms/buttons/outlined-button/outlined-button';
import styles from './form-footer.module.css';

export default function FormFooter({ children, topDivider, bottomDivider }) {
  return (
    <>
      {topDivider && <LineDivider />}
      <div className={styles.container}>
        {children}
      </div>
      {bottomDivider && <LineDivider />}
    </>
  );
}
