import BackButton from "common/components/atoms/buttons/back-button/back-button";
import SubmitButton from "common/components/atoms/buttons/submit-button/submit-button";
import SpaceDivider from "common/components/atoms/dividers/space-divider/space-divider";
import LayoutBuilder from "common/components/layouts/layout-builder/layout-builder";
import ExperienceForm from "./experience-form";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import LayoutBuilderHeader from "common/components/layouts/layout-builder/layout-builder-header/layout-builder-header";
import { Link } from "react-router-dom";

function ExperiencePage() {
  return (
    <LayoutBuilder header={<LayoutBuilderHeader title="Experience" />}>
      <ExperienceForm />
      <SpaceDivider variant="large" />
      <Link to="/builder/template">
        <a>
          <SubmitButton value="Next" endIcon={<ArrowForwardIosRoundedIcon />} />
        </a>
      </Link>
      <SpaceDivider variant="small" />
      <Link to="/builder/personal">
        <a>
          <BackButton />
        </a>
      </Link>
    </LayoutBuilder>
  );
}

export default ExperiencePage;