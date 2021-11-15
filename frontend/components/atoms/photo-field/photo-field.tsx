import React from 'react';
import styles from './photo-field.module.css';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

export default function PhotoField() {
  return (
    <div className={styles.container}>
      <input type="file" />
      <span><PersonRoundedIcon sx={{ fontSize: 75 }} /></span>
      <p>Add photo</p>
    </div>
  );
}
