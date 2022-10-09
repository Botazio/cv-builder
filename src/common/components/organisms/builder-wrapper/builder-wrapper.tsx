import BuilderSnackBar from "common/components/molecules/builder-snackbar/builder-snackbar";
import ConditionsDialog from "common/components/molecules/conditions-dialog/conditions-dialog";
import useAreRequiredFieldsPopulated from "modules/pages/builder/personal/personal-utils";


/**
 * Wrapper around some of the builder pages (personal, experience, template) that 
 * groups the functionality of multiple components and hooks in one.
 * This functionality includes:
 * - Redirecting to the personal page if the required fields are not populated
 * - Displaying an snackbar informing the user when the state is saved.
 * - Showing the conditions dialog when the component mounts. 
 */
export default function BuilderWrapper({ children }) {
  useAreRequiredFieldsPopulated();

  return (
    <>
      {children}

      <BuilderSnackBar />

      <ConditionsDialog />
    </>
  );
}
