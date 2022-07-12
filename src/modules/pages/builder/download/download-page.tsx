import BackButton from 'common/components/atoms/buttons/back-button/back-button';
import SpaceDivider from 'common/components/atoms/dividers/space-divider/space-divider';
import TemplatePreview from 'common/components/organisms/template-preview/template-preview';
import TemplateDictionary from 'modules/cv-templates/templates/template-dictionary';
import DownloadPageBody from 'modules/pages/builder/download/download-page-body/download-page-body';
import LayoutDownload from 'modules/pages/builder/download/layout-download/layout-download';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'state/hooks';
import { getActiveTemplateName } from '../template/template.reducer';
import DownloadButton from './download-button/download-button';


export default function DownloadPage() {
  const [url, setURL] = React.useState('');

  const state = useAppSelector(state => state.builder);
  const activeTemplateName = getActiveTemplateName(state);


  return (
    <LayoutDownload>
      <DownloadPageBody>
        <TemplatePreview
          document={<TemplateDictionary state={state} activeTemplateName={activeTemplateName} />}
          delimitedBy="width"
          setURL={setURL} />
      </DownloadPageBody>
      <SpaceDivider variant="large" />
      <DownloadButton url={url} />
      <SpaceDivider variant="small" />
      <Link to="/builder/template">
        <BackButton />
      </Link>
    </LayoutDownload>
  );
}
