import SubmitButton from '@common/components/atoms/buttons/submit-button/submit-button';
import React from 'react';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { useAppSelector } from '@state/hooks';

/**
 * Displays a button to download a pdf document.
 */
export default function DownloadButton({ url }: { url: string; }) {

  const state = useAppSelector(state => state.builder);

  return (
    <a href={url} download={state.personal.name !== '' ? `${state.personal.name}'s CV.pdf` : 'Unknown_CV.pdf'}>
      <SubmitButton value="Download" endIcon={<DownloadRoundedIcon />} isActive={!!url} />
    </a>
  );
}
