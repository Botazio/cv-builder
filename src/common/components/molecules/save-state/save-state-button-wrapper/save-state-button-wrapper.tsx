import { SnackBarDisplayState } from "modules/pages/builder/display-utils";
import { SET_DISPLAY_SNACKBAR } from "modules/pages/builder/display.actions";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { saveState } from "state/utils";

const snackBarState: SnackBarDisplayState = {
  display: true,
  value: "Your information has been correctly saved",
  type: "success"
};

/**
 * Wrapper around buttons that save the state of the application.
 * It also dispatches an action to set the display state to show a snackbar informing the user that the state has been saved.
 */
export default function SaveStateButtonWrapper({ children }) {

  const state = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const hasStateBeenSaved: boolean = saveState(state);

    if (hasStateBeenSaved) {
      dispatch({ type: SET_DISPLAY_SNACKBAR, payload: snackBarState });
    }
  };

  return (
    <div onClick={() => handleClick()}>
      {children}
    </div>
  );
}
