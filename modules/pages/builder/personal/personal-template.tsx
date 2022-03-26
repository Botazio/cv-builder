import Link from "next/link";
import SubmitButton from "../../../../common/components/atoms/buttons/submit-button/submit-button";
import SpaceDivider from "../../../../common/components/atoms/dividers/space-divider/space-divider";
import LayoutBuilder from "../../../../common/components/layouts/layout-builder/layout-builder";
import PersonalForm from "./personal-form/personal-form";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import BuilderBodyContainer from "../../../../common/components/layouts/layout-builder/builder-body-container/builder-body-container";

function PersonalTemplate() {
  return (
    <LayoutBuilder>

      <BuilderBodyContainer>
        <PersonalForm />
      </BuilderBodyContainer>

      <SpaceDivider variant="large" />

      <Link href="/builder/experience">
        <a>
          <SubmitButton label="Next" endIcon={<ArrowForwardIosRoundedIcon />} />
        </a>
      </Link>

    </LayoutBuilder>
  );
}

export default PersonalTemplate;