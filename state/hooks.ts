import { useEffect, useRef } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
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
 * Hook to store root state in local storage when it unmounts
 */
export function useSaveState() {
  const state = useAppSelector(state => state);
  const stateRef = useRef(state);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    return () => {
      saveState(stateRef.current);
    };
  }, []);
}