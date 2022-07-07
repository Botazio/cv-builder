import { configureStore } from '@reduxjs/toolkit';
import builderReducer from 'modules/pages/builder/builder.reducer';
import { getPersistedState } from './utils';

export const store = configureStore({
  reducer: {
    builder: builderReducer
  },
  preloadedState: getPersistedState()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;