import { useContext } from "react";
import React from "react";
import { FormInterface } from "../interfaces/form-interface";


function formReducer(state: FormInterface, action: { type: string; name: string; value: any; }) {
  switch (action.type) {
    case "main":
      return {
        ...state,
        main: {
          ...state.main,
          [action.name]: action.value
        }
      };
    case "details":
      return {
        ...state,
        details: {
          ...state.details,
          [action.name]: action.value
        }
      };
    case "description":
      return {
        ...state,
        description: action.value
      };
    case "addToArray":
      return {
        ...state,
        [action.name]: [...state[action.name], action.value]
      };
    case "deleteFromArray":
      const newArr = state[action.name].filter((e) => e.id !== action.value.id);
      return {
        ...state,
        [action.name]: newArr
      };
    case "updateArray":
      return {
        ...state,
        [action.name]: [...state[action.name].filter((e) => e.id !== action.value.id), action.value]
      };
    default:
      throw new Error('That action does not exist');
  }
}


const initialState: FormInterface = {
  main: {
    name: "",
    surname: "",
    profession: "",
  },
  description: "",
  details: {
    mobile: "",
    email: "",
    address: "",
    postalCode: "",
    city: "",
    linkedin: "",
    website: "",
    license: "",
    nationality: ""
  },
  education: [],
  experience: [],
  references: [],
  skills: [],
  languages: []
};

const FormContext = React.createContext(null);

export function useForm() {
  return useContext(FormContext);
}
export function FormProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    formReducer,
    initialState
  );

  const value = {
    state,
    dispatch
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}