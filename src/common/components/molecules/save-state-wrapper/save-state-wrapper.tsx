import { useSaveStateWhenUnmounts } from 'state/hooks';

/**
 * Wrapper that saves the redux state to local storage when the component unmounts.
 */
export default function SaveStateWrapper({ children }) {

  useSaveStateWhenUnmounts();

  return (
    <>{children}</>
  );
}
