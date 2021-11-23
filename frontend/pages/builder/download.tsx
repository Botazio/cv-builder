import React from 'react';
import BackButton from '../../components/atoms/back-button/back-button';
import SpaceDivider from '../../components/atoms/space-divider/space-divider';
import SubmitButton from '../../components/atoms/submit-button/submit-button';
import LayoutDownload from '../../components/layouts/layout-download/layout-download';
import DownloadPageBody from '../../components/templates/download-page-body/download-page-body';
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