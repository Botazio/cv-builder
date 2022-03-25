import SpaceDivider from "../dividers/space-divider/space-divider";
import styles from "./section-footer.module.css";


/**
 * Footer for the sections in the experience form
 */
export default function SectionFooter({ children }) {
  return (
    <>
      <SpaceDivider />
      <div className={styles.container}>
        {children}
      </div>
    </>
  );
}
