import React from 'react';
import styles from './photo-field.module.css';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

/**
 * Input type of photo. It is part of the form data but
 * due to the data nature it is not store in with the rest of the elements in the provider.
 */
export default function PhotoField() {
  return (
    <div className={styles.container}>
      <input type="file" />
      <span><PersonRoundedIcon sx={{ fontSize: 75 }} /></span>
      <p>Add photo</p>
    </div>
  );
}
