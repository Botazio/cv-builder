import cn from 'classnames';
import { useId } from 'react';
import styles from './switch-button.module.css';


interface SwitchInterface {
  checked: boolean;
  onChange: React.ChangeEventHandler;
  type?: "primary" | "secondary";
}

export default function SwitchButton({ checked, onChange, type = "primary" }: SwitchInterface) {
  const id = useId();

  return (
    <>
      <input
        className={styles.switch_checkbox}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={id}
      />
      <label
        htmlFor={id}
        className={cn({
          [styles.switch_label]: true,
          [styles.switch_label_primary]: type === "primary",
          [styles.switch_label_secondary]: type === "secondary",
        })}>
        <span className={cn({
          [styles.switch_knob]: true,
          [styles.switch_knob_primary]: type === "primary",
          [styles.switch_knob_secondary]: type === "secondary",
        })} />
      </label>
    </>
  );
}
