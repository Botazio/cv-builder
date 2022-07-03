import React from 'react';
import BackButton from '@common/components/atoms/buttons/back-button/back-button';
import SpaceDivider from '@common/components/atoms/dividers/space-divider/space-divider';
import LayoutDownload from '@modules/pages/builder/download/layout-download/layout-download';
import DownloadPageBody from '@modules/pages/builder/download/download-page-body/download-page-body';
import Link from 'next/link';
import { useAppSelector } from '@state/hooks';
import DownloadButton from './download-button/download-button';


export default function DownloadPage() {

  const state = useAppSelector(state => state.builder);

  return (
    <LayoutDownload>
      <DownloadPageBody />
      <SpaceDivider variant="large" />
      <DownloadButton />
      <SpaceDivider variant="small" />
      <Link href="/builder/template">
        <a>
          <BackButton />
        </a>
      </Link>
    </LayoutDownload>
  );
}
