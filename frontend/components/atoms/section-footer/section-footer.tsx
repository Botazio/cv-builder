import SpaceDivider from "../space-divider/space-divider";
import styles from "./section-footer.module.css";

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
