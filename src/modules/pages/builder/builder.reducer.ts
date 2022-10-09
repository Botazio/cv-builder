import { combineReducers } from "redux";
import { Display, displayReducer } from "./display.reducer";
import { Experience, experienceReducer } from "./experience/experience.reducer";
import { Personal, personalReducer } from "./personal/personal.reducer";
import { TemplatePage, templateReducer } from "./template/template.reducer";

export interface Builder {
  personal: Personal;
  experience: Experience;
  template: TemplatePage;
  display: Display;
}

const builderReducer = combineReducers({
  personal: personalReducer,
  experience: experienceReducer,
  template: templateReducer,
  display: displayReducer,
});

export default builderReducer;

export type RootState = ReturnType<typeof builderReducer>;