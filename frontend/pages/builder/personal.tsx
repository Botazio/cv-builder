import React from 'react';
import FormHeader from '../../components/atoms/form-header/form-header';
import SpaceDivider from '../../components/atoms/space-divider/space-divider';
import SubmitButton from '../../components/atoms/submit-button/submit-button';
import LayoutBuilder from '../../components/layouts/layout-builder/layout-builder';
import PersonalForm from '../../components/templates/personal-form/personal-form';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Link from 'next/link';

/**
  * First page of the builder. Ask the user for personal information.
  */
export default function Personal() {
  return (
    <LayoutBuilder header={<FormHeader title="Personal information" />}>
      <PersonalForm />
      <SpaceDivider variant="large" />
      <Link href="/builder/experience">
        <a>
          <SubmitButton label="Next" endIcon={<ArrowForwardIosRoundedIcon />} />
        </a>
      </Link>
    </LayoutBuilder>
  );
}
