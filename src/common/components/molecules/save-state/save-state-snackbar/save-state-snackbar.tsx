import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SnackBar from "common/components/atoms/snackbar/snackbar";
import { SET_DISPLAY } from 'modules/pages/builder/display.actions';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { BUILDER_LOCATION_STATE } from '../../builder-link/builder-link';


/**
 * Snackbar that shows a message when the form information is saved.
 * It also reads from the router to know when to show the snackbar.
 * This is when the user is switching between the builder pages.
 */
export default function SaveStateSnackBar() {
  const [active, setActive] = useState<boolean>();

  const locationState: any = useLocation().state;

  const state = useAppSelector(state => state.builder.display);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state.displayStateHasBeenSaved && locationState === BUILDER_LOCATION_STATE) {
      setActive(true);
      dispatch({ type: SET_DISPLAY, payload: false, field: "displayStateHasBeenSaved" });
    }
  }, [state.displayStateHasBeenSaved]);

  return (
    <SnackBar
      startIcon={<CheckRoundedIcon />}
      value="Your information has been correctly saved"
      active={active}
      setActive={setActive} />
  );
}
