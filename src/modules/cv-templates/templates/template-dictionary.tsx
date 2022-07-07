import { getTemplateActiveTheme } from 'modules/pages/builder/template/template.reducer';
import React from 'react';
import RioTemplate from './rio-template/rio-template';
import { TemplateNames } from './template-names.enum';
import TorontoTemplate from './toronto-template/toronto-template';


/**
 * Displays the active template from the redux store
 */
export default function TemplateDictionary({ state, activeTemplateName }: { state: any; activeTemplateName: string; }) {

  const renderTemplate = React.useCallback(() => {
    switch (activeTemplateName) {
      case 'rio-template':
        return <RioTemplate state={state} theme={getTemplateActiveTheme(state, TemplateNames.RIO_TEMPLATE)} />;

      case 'toronto-template':
        return <TorontoTemplate state={state} theme={getTemplateActiveTheme(state, TemplateNames.TORONTO_TEMPLATE)} />;

      default:
        return null;

    }
  }, [activeTemplateName, state]);


  return (
    <>
      {renderTemplate()}
    </>
  );
}
