import { configureStore } from '@reduxjs/toolkit';
import builderReducer from '../modules/pages/builder/builder-reducer';
import { getPersistedState } from './utils';

const persistedState = getPersistedState();

export const store = configureStore({
  reducer: {
    builder: builderReducer
  },
  preloadedState: persistedState
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;