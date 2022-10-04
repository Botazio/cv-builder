import { Link, LinkProps } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { saveStateAndDispatchSnackBarDisplay } from "state/utils";


/**
 * Wrapper around the Link component from react-router-dom.
 * It saves the state of the application into local storage and 
 * displays an snackbar indicating the action has been performed.
 */
export default function SaveStateLink(props: LinkProps) {

  const state = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    saveStateAndDispatchSnackBarDisplay(state, dispatch);
  };


  return (
    <Link {...props} onClick={() => handleClick()} />
  );
}
