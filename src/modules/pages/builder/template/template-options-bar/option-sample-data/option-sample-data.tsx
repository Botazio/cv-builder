import SwitchButton from "common/components/atoms/buttons/switch-button/switch-button";
import { SET_DISPLAY_SAMPLE_DATA_IN_TEMPLATES } from "state/display/display.actions";
import { useAppDispatch, useAppSelector } from "state/hooks";
import styles from "./option-sample-data.module.css";

export default function OptionSampleData() {

  const state = useAppSelector(state => state.display.displaySampleDataInTemplates);
  const dispatch = useAppDispatch();

  return (
    <>
      <h4 className={styles.title}>Use sample data</h4>
      <SwitchButton
        checked={state}
        onChange={() => dispatch({ type: SET_DISPLAY_SAMPLE_DATA_IN_TEMPLATES, payload: !state })} />
    </>
  );
}
