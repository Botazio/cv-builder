import SubmitButton from "common/components/atoms/buttons/submit-button/submit-button";
import SpaceDivider from "common/components/atoms/dividers/space-divider/space-divider";
import LayoutBuilder from "common/components/layouts/layout-builder/layout-builder";
import PersonalForm from "./personal-form/personal-form";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import LayoutBuilderBody from "common/components/layouts/layout-builder/layout-builder-body/layout-builder-body";
import LayoutBuilderHeader from "common/components/layouts/layout-builder/layout-builder-header/layout-builder-header";
import { Link } from "react-router-dom";

function PersonalPage() {
  return (
    <LayoutBuilder header={<LayoutBuilderHeader title="Personal information" />}>

      <LayoutBuilderBody>
        <PersonalForm />
      </LayoutBuilderBody>

      <SpaceDivider variant="large" />

      <Link to="/builder/experience">
        <SubmitButton value="Next" endIcon={<ArrowForwardIosRoundedIcon fontSize="small" />} />
      </Link>

    </LayoutBuilder >
  );
}

export default PersonalPage;