import { WORKactions, SET_DESCRIPTION } from "./work.actions";


export interface Work {
  id: string;
  title: string;
  location: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string;
};

const initialState: Work[] = [
  {
    id: '',
    title: '',
    location: '',
    place: '',
    startDate: '',
    endDate: '',
    description: '',
  }
];

export function workReducer(state = initialState, action: WORKactions) {
  switch (action.type) {
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload
      };
    default:
      return state;
  }
}

export const getDescription = (state: Work) => state.description;