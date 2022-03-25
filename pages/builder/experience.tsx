import React from 'react';
import SpaceDivider from '../../common/components/atoms/dividers/space-divider/space-divider';
import SubmitButton from '../../common/components/atoms/buttons/submit-button/submit-button';
import LayoutBuilder from '../../common/components/layouts/layout-builder/layout-builder';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Link from 'next/link';
import BackButton from '../../common/components/atoms/buttons/back-button/back-button';
import ExperienceForm from '../../modules/pages/builder/experience/experience-form/experience-form';

/**
  * Second page of the builder. Ask the user for his experience information.
  */
export default function Experience() {
  return (
    <LayoutBuilder>
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
