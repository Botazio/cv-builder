import SpaceDivider from '@common/components/atoms/dividers/space-divider/space-divider';
import SubmitButton from '@common/components/atoms/buttons/submit-button/submit-button';
import LayoutBuilder from '@common/components/layouts/layout-builder/layout-builder';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import BackButton from '@common/components/atoms/buttons/back-button/back-button';
import LayoutBuilderHeader from '@common/components/layouts/layout-builder/layout-builder-header/layout-builder-header';
import LayoutBuilderBody from '@common/components/layouts/layout-builder/layout-builder-body/layout-builder-body';
import ContainerTemplateCards from './container-template-cards/container-template-cards';
import { Link } from 'react-router-dom';

/**
  * Third page of the builder. Ask the user to select a template for the CV.
  */
export default function TemplatePage() {


  return (
    <LayoutBuilder header={<LayoutBuilderHeader title="Template" />}>

      <LayoutBuilderBody>
        <ContainerTemplateCards />
      </LayoutBuilderBody>

      <SpaceDivider variant="large" />

      <Link to="/builder/download">
        <a>
          <SubmitButton value="Next" endIcon={<ArrowForwardIosRoundedIcon />} />
        </a>
      </Link>

      <SpaceDivider variant="small" />

      <Link to="/builder/experience">
        <a>
          <BackButton />
        </a>
      </Link>

    </LayoutBuilder>
  );
}