import { combineReducers } from "redux";
import { Experience, experienceReducer } from "./experience/experience.reducer";
import { Personal, personalReducer } from "./personal/personal.reducer";

export interface Builder {
  personal: Personal;
  experience: Experience;
}

const builderReducer = combineReducers({
  personal: personalReducer,
  experience: experienceReducer
});

export default builderReducer;

export type RootState = ReturnType<typeof builderReducer>;