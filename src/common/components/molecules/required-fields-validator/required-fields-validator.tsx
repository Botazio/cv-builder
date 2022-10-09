import { SET_DISPLAY_REQUIRED_FIELDS_ERROR } from 'modules/pages/builder/display.actions';
import { areRequiredFieldsPopulated, dispatchSnackbarMissingRequiredFields } from 'modules/pages/builder/personal/personal-utils';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'state/hooks';

/**
 * Component that validates the required fields of the personal form when the component loads.
 * If there is a required field that is empty, it will display an snackbar with a error message.
 */
export default function RequiredFieldsValidator({ children }: { children: React.ReactNode; }) {

  const state = useAppSelector(state => state.builder.personal);
  const dispatch = useAppDispatch();

  const handleClick = (e) => {
    if (!areRequiredFieldsPopulated(state)) {
      e.preventDefault();
      e.stopPropagation();
      dispatch({ type: SET_DISPLAY_REQUIRED_FIELDS_ERROR, payload: true });
      dispatchSnackbarMissingRequiredFields(dispatch);
    } else {
      dispatch({ type: SET_DISPLAY_REQUIRED_FIELDS_ERROR, payload: false });
    }
  };

  return (
    <div onClickCapture={(e) => handleClick(e)}>
      {children}
    </div>
  );
}
