import { useContext, useState } from "react";
import React from "react";
import { FormInterface } from "../common/interfaces/form-interface";
import { storageAvailable } from "../utils/functions";
import { arrayMoveImmutable } from 'array-move';


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
    case "deleteFromArray": {
      const newArr = state[action.name].filter((e) => e.id !== action.value.id);
      return {
        ...state,
        [action.name]: newArr
      };
    }
    case "updateArray": {
      const newArr = state[action.name].map((e) => {
        if (e.id === action.value.id) {
          e = action.value;
        }
        return e;
      });

      return {
        ...state,
        [action.name]: newArr
      };
    }
    case "moveElementUpInArray": {
      const index = state[action.name].indexOf(action.value);
      const newArr = arrayMoveImmutable(state[action.name], index, index - 1);

      return {
        ...state,
        [action.name]: newArr
      };
    }
    case "moveElementDownInArray": {
      const index = state[action.name].indexOf(action.value);
      const newArr = arrayMoveImmutable(state[action.name], index, index + 1);

      return {
        ...state,
        [action.name]: newArr
      };
    }
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
  languages: [],
  templateStyles: {
    type: 'london',
    primary: 'black',
    secondary: 'black'
  }
};

const FormContext = React.createContext(null);

export function useForm() {
  return useContext(FormContext);
}
export function FormProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    formReducer,
    getFormFromStorage()
  );

  function saveForm() {
    if (storageAvailable('localStorage')) {
      localStorage.setItem('formBuilder', JSON.stringify(state));
    }
  }

  function getFormFromStorage(): FormInterface {
    if (storageAvailable('localStorage')) {
      const state = JSON.parse(localStorage.getItem('formBuilder'));
      if (state) {
        return state;
      }
      else {
        return initialState;
      }
    }
    else {
      return initialState;
    }
  }

  const value = {
    state,
    dispatch,
    saveForm
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}