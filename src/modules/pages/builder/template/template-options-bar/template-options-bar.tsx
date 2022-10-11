import OptionSampleData from "./option-sample-data/option-sample-data";
import styles from "./template-options-bar.module.css";

export default function TemplateOptionsBar() {

  return (
    <div className={styles.container}>
      <OptionSampleData />
    </div>
  );
}
