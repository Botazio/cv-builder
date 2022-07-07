import { useSaveState } from 'state/hooks';
import React from 'react';

/**
 * Saves the redux state to local storage when the component unmounts.
 */
export default function SaveStateWrapper({ children }) {

  useSaveState();

  return (
    <>{children}</>
  );
}
