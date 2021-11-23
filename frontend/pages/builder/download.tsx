import React from 'react';
import FormHeader from '../../components/atoms/form-header/form-header';
import SpaceDivider from '../../components/atoms/space-divider/space-divider';
import SubmitButton from '../../components/atoms/submit-button/submit-button';
import LayoutBuilder from '../../components/layouts/layout-builder/layout-builder';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Link from 'next/link';
import BackButton from '../../components/atoms/back-button/back-button';
import ExperienceForm from '../../components/templates/experience-form/experience-form';

/**
  * Second page of the builder. Ask the user for his experience information.
  */
export default function Experience() {
  return (
    <LayoutBuilder header={<FormHeader title="Experience" />}>
      <ExperienceForm />
      <SpaceDivider variant="large" />
      <Link href="/builder/template">
        <a>
          <SubmitButton label="Next" endIcon={<ArrowForwardIosRoundedIcon />} />
        </a>
      </Link>
      <SpaceDivider variant="small" />
      <Link href="/builder/personal">
        <a>
          <BackButton />
        </a>
      </Link>
    </LayoutBuilder>
  );
}