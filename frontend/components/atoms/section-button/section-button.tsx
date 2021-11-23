import { Button } from '@mui/material';
import styles from './section-button.module.css';
import React from 'react';
import cn from 'classnames';

/**
 * Buttons used to save and to cancel in the form experience
 */
export default function SectionButton({ children, startIcon, type, handleClick }: { children: React.ReactNode, startIcon: React.ReactNode, type: string, handleClick?: any; }) {

  return (
    <Button className={cn({
      [styles.btn]: true,
      [styles.primary]: type === "primary",
      [styles.secondary]: type === "secondary"
    })}
      onClick={handleClick}
      variant="outlined"
      sx={{ width: "150px" }}
      startIcon={startIcon}>
      {children}
    </Button >
  );
}