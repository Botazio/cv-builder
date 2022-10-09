import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import BackButton from "common/components/atoms/buttons/back-button/back-button";
import SubmitButton from "common/components/atoms/buttons/submit-button/submit-button";
import SpaceDivider from "common/components/atoms/dividers/space-divider/space-divider";
import LayoutBuilder from "common/components/layouts/layout-builder/layout-builder";
import LayoutCardHeader from "common/components/layouts/layout-card/layout-card-header/layout-card-header";
import SaveStateLink from 'common/components/molecules/save-state/save-state-link/save-state-link';
import ExperienceForm from "./experience-form";

function ExperiencePage() {
  return (
    <LayoutBuilder header={<LayoutCardHeader title="Experience" />}>
      <ExperienceForm />
      <SpaceDivider variant="large" />
      <SaveStateLink to="/builder/template">
        <SubmitButton value="Next" endIcon={<ArrowForwardIosRoundedIcon />} />
      </SaveStateLink>
      <SpaceDivider variant="small" />
      <SaveStateLink to={"/builder/personal"}>
        <BackButton />
      </SaveStateLink>
    </LayoutBuilder>
  );
}

export default ExperiencePage;