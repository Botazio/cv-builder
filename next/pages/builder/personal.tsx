import SaveStateWrapper from "@common/components/molecules/save-state-wrapper/save-state-wrapper";
import PersonalPage from "@modules/pages/builder/personal/personal-page";

/**
  * First page of the builder. Ask the user for personal information.
  */
export default function Personal() {
  return (
    <SaveStateWrapper>
      <PersonalPage />
    </SaveStateWrapper>
  );
}
