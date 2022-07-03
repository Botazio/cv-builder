import SaveStateWrapper from "@common/components/molecules/save-state-wrapper/save-state-wrapper";
import ExperiencePage from "@modules/pages/builder/experience/experience-page";


/**
  * Second page of the builder. Ask the user for his experience information.
  */
export default function Experience() {
  return (
    <SaveStateWrapper>
      <ExperiencePage />
    </SaveStateWrapper>
  );
}
