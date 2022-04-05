import React from 'react';
import SpaceDivider from '@common/components/atoms/dividers/space-divider/space-divider';
import SubmitButton from '@common/components/atoms/buttons/submit-button/submit-button';
import LayoutBuilder from '@common/components/layouts/layout-builder/layout-builder';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Link from 'next/link';
import BackButton from '@common/components/atoms/buttons/back-button/back-button';
import TemplatePreview from './template-preview/template-preview';

/**
  * Third page of the builder. Ask the user to select a template for the CV.
  */
export default function TemplatePage() {
  return (
    <LayoutBuilder>
      <TemplatePreview />
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