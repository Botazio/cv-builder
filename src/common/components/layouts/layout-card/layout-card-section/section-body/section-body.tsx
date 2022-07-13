import LineDivider from "common/components/atoms/dividers/line-divider/line-divider";
import React from "react";
import styles from "./section-body.module.css";


/**
 * Body for the section.
 */
export default function SectionBody({ children }: { children?: React.ReactNode; }) {
  return (
    <>
      <div className={styles.container}>
        {children}
      </div>
      <LineDivider />
    </>
  );
}
