import { combineReducers } from "redux";
import experienceReducer from "./experience/experience.reducer";
import { personalReducer } from "./personal/personal.reducer";


const builderReducer = combineReducers({
  personal: personalReducer,
  experience: experienceReducer
});

export default builderReducer;

export type RootState = ReturnType<typeof builderReducer>;