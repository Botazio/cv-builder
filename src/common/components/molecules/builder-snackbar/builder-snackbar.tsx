import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SnackBar from "common/components/atoms/snackbar/snackbar";
import { SnackBarDisplayState } from 'modules/pages/builder/display-utils';
import { RESET_DISPLAY_SNACKBAR } from 'modules/pages/builder/display.actions';
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from 'state/hooks';


/**
 * Snackbar wrapper that shows snackbar when activated on the state.
 */
export default function BuilderSnackBar() {
  const [active, setActive] = useState<boolean>();
  const [value, setValue] = useState<string>();
  const [type, setType] = useState<SnackBarDisplayState["type"]>();

  const state = useAppSelector(state => state.builder.display.snackBar);
  const dispatch = useAppDispatch();

  const displaySnackbar = () => {
    setActive(true);

    // Save the store value to the local state
    setValue(state.value);
    setType(state.type);

    // Reset the store value
    dispatch({ type: RESET_DISPLAY_SNACKBAR });
  };

  useEffect(() => {
    if (!state.display) {
      return;
    }

    if (active) {
      // Snackbar was already active, so we need to set it to inactive first to reset the animation
      setActive(false);
      setTimeout(() => {
        displaySnackbar();
      }, 200);
    } else {
      displaySnackbar();
    }
  }, [state]);

  return (
    <SnackBar
      startIcon={<CheckRoundedIcon />}
      value={value}
      active={active}
      setActive={setActive}
      type={type}
    />
  );
}
