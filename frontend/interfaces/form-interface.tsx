import { Details } from "./details-interface";
import { Education } from "./education-interface";
import { Experience } from "./experience-interface";
import { Main } from "./main-interface";
import { Reference } from "./reference-interface";

export interface FormInterface {
  main: Main;
  description: string;
  details: Details;
  education: Education[];
  experience: Experience[];
  references: Reference[];
  skills: string[];
  languages: string[];
}