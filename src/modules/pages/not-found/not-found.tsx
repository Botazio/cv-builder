import LayoutDefault from "common/components/layouts/layout-default/layout-default";
import styles from "./not-found.module.css";


export default function NotFound() {
  return (
    <LayoutDefault>
      <div className={styles.container}>
        <h1>404</h1>
        <h3>This page could not be found.</h3>
      </div>
    </LayoutDefault>
  );
}
