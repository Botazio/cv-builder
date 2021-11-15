import { useContext } from "react";
import React from "react";

interface Main {
  name: string;
  surname: string;
  profession: string;
}

interface Details {
  mobile: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  linkedin: string;
  website: string;
  license: string;
  nationality: string;
}

interface Education {
  id: number,
  title: string;
  startDate: string;
  endDate: string;
  place: string;
  location: string;
  description: string;
}

interface Experience {
  id: number,
  title: string;
  startDate: string;
  endDate: string;
  place: string;
  location: string;
  description: string;
}

interface Reference {
  id: number,
  name: string;
  place: string;
  details: Details;
  description: string;
}

interface FormInterface {
  main: Main;
  description: string;
  details: Details;
  education: Education[];
  experience: Experience[];
  references: Reference[];
  skills: string[];
  languages: string[];
}

function formReducer(state: FormInterface, action: { type: string; name: string; value: any; }) {
  if (action.type === "main") {
    return {
      ...state,
      main: {
        ...state.main,
        [action.name]: action.value
      }
    };
  } else if (action.type === "details") {
    return {
      ...state,
      details: {
        ...state.details,
        [action.name]: action.value
      }
    };
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