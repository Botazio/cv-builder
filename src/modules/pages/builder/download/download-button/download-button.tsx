import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import SubmitButton from 'common/components/atoms/buttons/submit-button/submit-button';
import { useAppSelector } from 'state/hooks';

/**
 * Displays a button to download a pdf document.
 */
export default function DownloadButton({ url }: { url: string; }) {

  const state = useAppSelector(state => state.builder);

  return (
    <a href={url} download={state.personal.name.value !== '' ? `${state.personal.name.value}'s CV.pdf` : 'Unknown_CV.pdf'}>
      <SubmitButton value="Download" endIcon={<DownloadRoundedIcon />} isActive={!!url} />
    </a>
  );
}
