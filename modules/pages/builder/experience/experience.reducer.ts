import { combineReducers } from "redux";
import { descriptionReducer } from "./sections/description-section/description.reducer";
import { workReducer } from "./sections/work-section/work.reducer";


const experienceReducer = combineReducers({
  description: descriptionReducer,
  work: workReducer
});

export default experienceReducer;

export type RootState = ReturnType<typeof experienceReducer>;