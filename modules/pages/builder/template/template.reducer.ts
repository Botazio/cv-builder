import { ListTemplateThemes, TemplateTheme } from "@modules/cv-templates/templates/template-theme.interface";
import { RioTemplateThemes } from "@modules/cv-templates/templates/rio-template/rio-template-themes";
import { TemplateNames } from "@modules/cv-templates/templates/template-names.enum";
import { SET_ACTIVE_TEMPLATE, SET_TEMPLATE_THEME, TEMPLATEactions } from "./template.actions";
import produce from 'immer';
import { Builder } from "../builder.reducer";
import { Template } from "@modules/cv-templates/templates/template.interface";


export interface TemplatePage {
  activeTemplateID: TemplateNames;
  elements: {
    [key in TemplateNames]: Template
  };
};

const initialState: TemplatePage = {
  activeTemplateID: TemplateNames.RIO_TEMPLATE,
  elements: {
    "rio-template": {
      name: TemplateNames.RIO_TEMPLATE,
      activeTheme: RioTemplateThemes[0],
      themes: RioTemplateThemes
    },
    "toronto-template": {
      name: TemplateNames.TORONTO_TEMPLATE,
      activeTheme: RioTemplateThemes[0],
      themes: RioTemplateThemes
    }
  }
};

export function templateReducer(state = initialState, action: TEMPLATEactions) {
  switch (action.type) {
    case SET_ACTIVE_TEMPLATE: {
      const nextState = produce(state, draft => {
        draft.activeTemplateID = action.payload;
      });

      return nextState;
    }
    case SET_TEMPLATE_THEME: {
      const nextState = produce(state, draft => {
        const draftState = draft.elements[action.templateName];

        draftState.activeTheme = action.payload;
      });

      return nextState;
    }
    default:
      return state;
  }
}

export function getActiveTemplateID(state: Builder): TemplateNames {
  return state.template.activeTemplateID;
}

export function getTemplate(state: Builder, templateName: TemplateNames): Template {
  return state.template.elements[templateName];
}

export function getTemplateActiveTheme(state: Builder, templateName: TemplateNames): TemplateTheme {
  return state.template.elements[templateName].activeTheme;
}