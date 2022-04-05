import SpaceDivider from "../../../../../../common/components/atoms/dividers/space-divider/space-divider";
import styles from "./section-footer.module.css";


/**
 * Footer for the section
 */
export default function SectionFooter({ children }: { children: React.ReactNode; }) {

  return (
    <>
      <SpaceDivider />
      <div className={styles.container}>
        {children}
      </div>
    </>
  );
}
