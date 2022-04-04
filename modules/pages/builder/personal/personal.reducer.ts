import { SET_NAME, PERSONALactions, SET_SURNAME, SET_PROFESSION, SET_MOBILE, SET_EMAIL, SET_ADDRESS, SET_POSTALCODE, SET_CITY, SET_LINKEDIN, SET_LICENSE, SET_WEBSITE, SET_NATIONALITY } from "./personal.actions";


export interface Personal {
  name: string;
  surname: string;
  profession: string;
  mobile: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  linkedin: string;
  website: string;
  license: string;
  nationality: string;
};

const initialState: Personal = {
  name: '',
  surname: '',
  profession: '',
  mobile: '',
  email: '',
  address: '',
  postalCode: '',
  city: '',
  linkedin: '',
  website: '',
  license: '',
  nationality: '',
};

export function personalReducer(state = initialState, action: PERSONALactions) {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case SET_SURNAME:
      return {
        ...state,
        surname: action.payload
      };
    case SET_PROFESSION:
      return {
        ...state,
        profession: action.payload
      };
    case SET_MOBILE:
      return {
        ...state,
        mobile: action.payload
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload
      };
    case SET_POSTALCODE:
      return {
        ...state,
        postalCode: action.payload
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload
      };
    case SET_LINKEDIN:
      return {
        ...state,
        linkedin: action.payload
      };
    case SET_WEBSITE:
      return {
        ...state,
        website: action.payload
      };
    case SET_LICENSE:
      return {
        ...state,
        license: action.payload
      };
    case SET_NATIONALITY:
      return {
        ...state,
        nationality: action.payload
      };
    default:
      return state;
  }
}
