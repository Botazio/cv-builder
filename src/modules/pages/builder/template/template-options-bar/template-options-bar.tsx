import SwitchButton from "common/components/atoms/buttons/switch-button/switch-button";
import LineDivider from "common/components/atoms/dividers/line-divider/line-divider";
import { useState } from "react";
import styles from "./template-options-bar.module.css";

export default function TemplateOptionsBar() {
  const [useSampleData, setUseSampleData] = useState(false);

  return (
    <div className={styles.outer_container}>
      <div className={styles.inner_container}>
        <h4>Use sample data</h4>
        <SwitchButton checked={useSampleData} onChange={() => setUseSampleData(!useSampleData)} />
      </div>
      <LineDivider />
    </div>

  );
}
