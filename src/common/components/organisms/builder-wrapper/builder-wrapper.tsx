import BuilderSnackBar from "common/components/molecules/builder-snackbar/builder-snackbar";
import ConditionsDialog from "common/components/molecules/conditions-dialog/conditions-dialog";


/**
 * Wrapper around the builder pages that groups the functionality of multiple components in one.
 * This functionality includes:
 * - Displaying an snackbar informing the user when the state is saved.
 * - Showing the conditions dialog when the component mounts. 
 */
export default function BuilderWrapper({ children }) {
  return (
    <>
      {children}

      <BuilderSnackBar />

      <ConditionsDialog />
    </>
  );
}
