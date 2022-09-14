import ConditionsDialog from "common/components/molecules/conditions-dialog/conditions-dialog";
import SaveStateSnackBar from "common/components/molecules/save-state/save-state-snackbar/save-state-snackbar";
import SaveStateWrapper from "common/components/molecules/save-state/save-state-wrapper/save-state-wrapper";


/**
 * Wrapper around the builder pages that groups the functionality of multiple components in one.
 * This functionality includes:
 * - Saving the state to local storage when the component unmounts.
 * - Showing the conditions dialog when the component mounts. 
 */
export default function BuilderWrapper({ children }) {
  return (
    <>
      <SaveStateWrapper>
        {children}
      </SaveStateWrapper>

      <SaveStateSnackBar />

      <ConditionsDialog />
    </>
  );
}
