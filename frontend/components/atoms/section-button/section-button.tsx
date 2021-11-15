import { Button } from '@mui/material';
import styles from './section-button.module.css';
import React from 'react';
import cn from 'classnames';

export default function SectionButton({ children, startIcon, type }: { children: React.ReactNode, startIcon: React.ReactNode, type: string; }) {

  return (
    <Button className={cn({
      [styles.btn]: true,
      [styles.primary]: type === "primary",
      [styles.secondary]: type === "secondary"
    })}
      variant="outlined"
      sx={{ width: "150px" }}
      startIcon={startIcon}>
      {children}
    </Button >
  );
}