import React from 'react';
import SpaceDivider from '../../common/components/atoms/dividers/space-divider/space-divider';
import SubmitButton from '../../common/components/atoms/buttons/submit-button/submit-button';
import LayoutBuilder from '../../common/components/layouts/layout-builder/layout-builder';
import PersonalForm from '../../modules/pages/builder/personal/personal-form/personal-form';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Link from 'next/link';

/**
  * First page of the builder. Ask the user for personal information.
  */
export default function Personal() {

  return (
    <LayoutBuilder>
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
