import { configureStore } from '@reduxjs/toolkit';
import builderReducer from 'modules/pages/builder/builder.reducer';
import { legalReducer } from 'modules/pages/legal/legal.reducer';
import { getPersistedState } from './utils';

export const store = configureStore({
  reducer: {
    builder: builderReducer,
    legal: legalReducer
  },
  preloadedState: getPersistedState()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;