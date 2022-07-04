import { TemplateNames } from "modules/cv-templates/templates/template-names.enum";
import { TemplateTheme } from "modules/cv-templates/templates/template-theme.interface";

export const SET_ACTIVE_TEMPLATE = '[TEMPLATE] Change Active Template';
export const SET_TEMPLATE_THEME = '[TEMPLATE] Change Template Theme';

export class SetActiveTemplate {
  readonly type = SET_ACTIVE_TEMPLATE;
  constructor(public payload: TemplateNames) { }
}

export class SetTemplateTheme {
  readonly type = SET_TEMPLATE_THEME;
  constructor(public payload: TemplateTheme, public templateName: TemplateNames) { }
}


export type TEMPLATEactions = SetActiveTemplate | SetTemplateTheme;