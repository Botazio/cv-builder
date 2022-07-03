import SaveStateWrapper from "@common/components/molecules/save-state-wrapper/save-state-wrapper";
import TemplatePage from "@modules/pages/builder/template/template-page";

/**
  * Third page of the builder. Ask the user to select a template for the CV.
  */
export default function Template() {
  return (
    <SaveStateWrapper>
      <TemplatePage />
    </SaveStateWrapper>
  );
}