import { useAppDispatch, useAppSelector } from "state/hooks";
import { saveStateAndDisplaySnackBar } from "state/utils";


/**
 * Wrapper around buttons that save the state of the application.
 * It also dispatches an action to set the display state to show a snackbar informing the user that the state has been saved.
 */
export default function SaveStateButtonWrapper({ children }) {

  const state = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    saveStateAndDisplaySnackBar(state, dispatch);
  };

  return (
    <div onClick={() => handleClick()}>
      {children}
    </div>
  );
}


