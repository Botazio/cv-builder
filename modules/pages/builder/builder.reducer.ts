import { combineReducers } from "redux";
import { Experience, experienceReducer } from "./experience/experience.reducer";
import { Personal, personalReducer } from "./personal/personal.reducer";
import { TemplatePage, templateReducer } from "./template/template.reducer";

export interface Builder {
  personal: Personal;
  experience: Experience;
  template: TemplatePage;
}

const builderReducer = combineReducers({
  personal: personalReducer,
  experience: experienceReducer,
  template: templateReducer
});

export default builderReducer;

export type RootState = ReturnType<typeof builderReducer>;