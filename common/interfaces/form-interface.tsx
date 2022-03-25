import { Details } from "./details-interface";
import { Education } from "./education-interface";
import { Experience } from "./experience-interface";
import { Languages } from "./languages-interface";
import { Main } from "./main-interface";
import { Reference } from "./reference-interface";
import { Skills } from "./skills-interface";
import { TemplateStyles } from "./template-styles-interface";

export interface FormInterface {
  main: Main;
  description: string;
  details: Details;
  education: Education[];
  experience: Experience[];
  references: Reference[];
  skills: Skills[];
  languages: Languages[];
  templateStyles: TemplateStyles;
}