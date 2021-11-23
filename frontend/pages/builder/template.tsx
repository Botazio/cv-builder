import React from 'react';
import FormHeader from '../../components/atoms/form-header/form-header';
import SpaceDivider from '../../components/atoms/space-divider/space-divider';
import SubmitButton from '../../components/atoms/submit-button/submit-button';
import LayoutBuilder from '../../components/layouts/layout-builder/layout-builder';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Link from 'next/link';
import BackButton from '../../components/atoms/back-button/back-button';
import TemplatesPreview from '../../components/templates/templates-preview/templates-preview';

/**
  * Third page of the builder. Ask the user to select a template for the CV.
  */
export default function Template() {
  return (
    <LayoutBuilder header={<FormHeader title="Template" />}>
      <TemplatesPreview />
      <SpaceDivider variant="large" />
      <Link href="/builder/download">
        <a>
          <SubmitButton label="Next" endIcon={<ArrowForwardIosRoundedIcon />} />
        </a>
      </Link>
      <SpaceDivider variant="small" />
      <Link href="/builder/experience">
        <a>
          <BackButton />
        </a>
      </Link>
    </LayoutBuilder>
  );
}