import { SET_DISPLAY } from 'modules/pages/builder/display.actions';
import { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { saveState } from './utils';

/**
 * Hook to access the dispatch function inside the reducer
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Hook to access the root state
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


/**
 * Hook to store root state in local storage when it unmounts.
 * It also dispatches the action to set the display of the message informing the user that the state has been saved.
 */
export function useSaveStateWhenUnmounts() {
  const state = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      const hasStateBeenSaved: boolean = saveState(state);
      dispatch({ type: SET_DISPLAY, payload: hasStateBeenSaved, field: 'displayStateHasBeenSaved' });
    };
  }, []);
}