import LineDivider from "common/components/atoms/dividers/line-divider/line-divider";
import styles from "./section-header.module.css";

/**
 * 
 * Header for the different sections.
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
