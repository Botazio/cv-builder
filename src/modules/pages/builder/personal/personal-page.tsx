import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import SubmitButton from "common/components/atoms/buttons/submit-button/submit-button";
import SpaceDivider from "common/components/atoms/dividers/space-divider/space-divider";
import LayoutBuilder from "common/components/layouts/layout-builder/layout-builder";
import LayoutCardBody from 'common/components/layouts/layout-card/layout-card-body/layout-card-body';
import LayoutCardHeader from 'common/components/layouts/layout-card/layout-card-header/layout-card-header';
import RequiredFieldsValidator from 'common/components/molecules/required-fields-validator/required-fields-validator';
import SaveStateLink from 'common/components/molecules/save-state/save-state-link/save-state-link';
import PersonalForm from "./personal-form/personal-form";

function PersonalPage() {
  return (
    <LayoutBuilder header={<LayoutCardHeader title="Personal information" />}>

      <LayoutCardBody>
        <PersonalForm />
      </LayoutCardBody>

      <SpaceDivider variant="large" />

      <RequiredFieldsValidator>
        <SaveStateLink to="/builder/experience">
          <SubmitButton value="Next" endIcon={<ArrowForwardIosRoundedIcon fontSize="small" />} />
        </SaveStateLink>
      </RequiredFieldsValidator>

    </LayoutBuilder >
  );
}

export default PersonalPage;