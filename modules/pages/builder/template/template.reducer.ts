import { ListTemplateThemes, TemplateTheme } from "@modules/cv-templates/templates/template-theme.interface";
import { RioTemplateThemes } from "@modules/cv-templates/templates/rio-template/rio-template-utils";


export interface TemplatePage {
  activeTemplate: string;
  templates: [
    {
      name: string;
      activeTheme: TemplateTheme;
      themes: ListTemplateThemes;
    }
  ];
};

const initialState: TemplatePage = {
  activeTemplate: TemplatesNames.RIO_TEMPLATE,
  templates: [
    {
      name: TemplatesNames.RIO_TEMPLATE,
      activeTheme: RioTemplateThemes[0],
      themes: RioTemplateThemes
    }
  ]
};

export function templateReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}