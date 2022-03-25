import React from 'react';
import BackButton from '../../common/components/atoms/buttons/back-button/back-button';
import SpaceDivider from '../../common/components/atoms/dividers/space-divider/space-divider';
import SubmitButton from '../../common/components/atoms/buttons/submit-button/submit-button';
import LayoutDownload from '../../modules/pages/builder/download/layout-download/layout-download';
import DownloadPageBody from '../../modules/pages/builder/download/download-page-body/download-page-body';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import Link from 'next/link';

/**
  * Download page of the builder
  */
export default function Download() {
  return (
    <LayoutDownload>
      <DownloadPageBody />
      <SpaceDivider variant="large" />
      <SubmitButton label="Download" endIcon={<DownloadRoundedIcon />} />
      <SpaceDivider variant="small" />
      <Link href="/builder/template">
        <a>
          <BackButton />
        </a>
      </Link>
    </LayoutDownload>
  );
}