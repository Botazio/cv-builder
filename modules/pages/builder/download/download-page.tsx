import React from 'react';
import BackButton from '@common/components/atoms/buttons/back-button/back-button';
import SpaceDivider from '@common/components/atoms/dividers/space-divider/space-divider';
import SubmitButton from '@common/components/atoms/buttons/submit-button/submit-button';
import LayoutDownload from '@modules/pages/builder/download/layout-download/layout-download';
import DownloadPageBody from '@modules/pages/builder/download/download-page-body/download-page-body';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import Link from 'next/link';

export default function DownloadPage() {
  return (
    <LayoutDownload>
      <DownloadPageBody />
      <SpaceDivider variant="large" />
      <a href={"http://localhost:3000/a82a3ad3-f322-4a01-86da-0707b24de6de"} download={'test.pdf'}>
        <SubmitButton value="Download" endIcon={<DownloadRoundedIcon />} />
      </a>
      <SpaceDivider variant="small" />
      <Link href="/builder/template">
        <a>
          <BackButton />
        </a>
      </Link>
    </LayoutDownload>
  );
}
