import React from "react";
import LineDivider from "../line-divider/line-divider";
import styles from "./section-body.module.css";


/**
 * Body for the sections data in the experience form.
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
