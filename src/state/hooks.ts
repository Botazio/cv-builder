import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

/**
 * Hook to access the dispatch function inside the reducer
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Hook to access the root state
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;