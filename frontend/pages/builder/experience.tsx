import React from 'react';
import FormHeader from '../../components/atoms/form-header/form-header';
import SpaceDivider from '../../components/atoms/space-divider/space-divider';
import SubmitButton from '../../components/atoms/submit-button/submit-button';
import LayoutBuilder from '../../components/layouts/layout-builder/layout-builder';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Link from 'next/link';
import ExperienceForm from '../../components/organisms/experience-form/experience-form';
import BackButton from '../../components/atoms/back-button/back-button';

/**
  * Second page of the builder. Ask the user for his experience information.
  */
export default function Experience() {
  return (
    <LayoutBuilder header={<FormHeader title="Experience" />}>
      <ExperienceForm />
      <SpaceDivider />
      <Link href="/builder/template">
        <a>
          <SubmitButton label="Next" endIcon={<ArrowForwardIosRoundedIcon />} />
        </a>
      </Link>
      <SpaceDivider />
      <Link href="/builder/personal">
        <a>
          <BackButton />
        </a>
      </Link>
    </LayoutBuilder>
  );
}
