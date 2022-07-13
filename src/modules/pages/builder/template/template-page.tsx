import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import BackButton from 'common/components/atoms/buttons/back-button/back-button';
import SubmitButton from 'common/components/atoms/buttons/submit-button/submit-button';
import SpaceDivider from 'common/components/atoms/dividers/space-divider/space-divider';
import LayoutBuilder from 'common/components/layouts/layout-builder/layout-builder';
import LayoutCardBody from 'common/components/layouts/layout-card/layout-card-body/layout-card-body';
import LayoutCardHeader from 'common/components/layouts/layout-card/layout-card-header/layout-card-header';
import { Link } from 'react-router-dom';
import ContainerTemplateCards from './container-template-cards/container-template-cards';

/**
  * Third page of the builder. Ask the user to select a template for the CV.
  */
export default function TemplatePage() {


  return (
    <LayoutBuilder header={<LayoutCardHeader title="Template" />}>

      <LayoutCardBody>
        <ContainerTemplateCards />
      </LayoutCardBody>

      <SpaceDivider variant="large" />

      <Link to="/builder/download">
        <SubmitButton value="Next" endIcon={<ArrowForwardIosRoundedIcon />} />
      </Link>

      <SpaceDivider variant="small" />

      <Link to="/builder/experience">
        <BackButton />
      </Link>

    </LayoutBuilder>
  );
}