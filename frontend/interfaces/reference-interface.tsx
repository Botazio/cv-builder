import { Details } from "./details-interface";

export interface Reference {
  id: number,
  name: string;
  place: string;
  details: Details;
  description: string;
}