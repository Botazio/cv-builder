import LineDivider from "../line-divider/line-divider";
import styles from "./section-header.module.css";

/**
 * 
 * This component displays a header for each section in the cv builder form
 */
export default function SectionHeader({ icon, title, handleClick }: { icon?: React.ReactNode, title: string, handleClick: any; }) {
  return (
    <div>
      <div className={styles.container} onClick={handleClick}>
        {icon}
        <h3>{title}</h3>
      </div>
      <LineDivider />
    </div>
  );
}
