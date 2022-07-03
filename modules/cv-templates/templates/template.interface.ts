import { ListTemplateThemes, TemplateTheme } from "./template-theme.interface";

export interface Template {
  name: string;
  activeTheme: TemplateTheme;
  themes: ListTemplateThemes;
};