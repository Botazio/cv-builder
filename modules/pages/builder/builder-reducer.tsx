import { combineReducers } from "redux";
import { personalReducer } from "./personal/personal.reducer";


const builderReducer = combineReducers({
  personal: personalReducer
});

export default builderReducer;

export type RootState = ReturnType<typeof builderReducer>;