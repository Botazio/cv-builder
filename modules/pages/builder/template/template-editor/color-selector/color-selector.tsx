import styles from './color-selector.module.css';


function ColorSelector({ primary, secondary }: { primary: string, secondary: string; }) {
  return (
    <div className={styles.container}>
      <div style={{ "backgroundColor": primary }}></div>
      <div style={{ "backgroundColor": secondary }}></div>
    </div>
  );
}

export default ColorSelector;