import SectionHeader from '../../../atoms/section-header/section-header';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import FormFooter from '../../../../../../common/components/molecules/form-footer/form-footer';
import SavedSection from '../../../molecules/saved-section/saved-section';
import React, { cloneElement, useState } from 'react';
import { Collapse } from '@mui/material';
import { useForm } from '../../../builder-reducer';
import { v4 as uuidv4 } from 'uuid';

interface TemplateInterface {
  type: string;
  title: string;
  icon: React.ReactNode;
  footerButton: string;
  bottomDivider: boolean;
  handleDefaultForm: Function;
  form: React.ReactElement;
}

/**
 * This function controls the logic for each section that 
 * is an array in the provider. Messy way of doing it, this code should be refactor
 */
export default function TemplateSection({ type, title, icon, footerButton, bottomDivider, handleDefaultForm, form }: TemplateInterface) {
  const [active, setActive] = useState<boolean>(true);
  const [activeForm, setActiveForm] = useState<any | null>();

  const { state, dispatch } = useForm();

  // Add a new element to the array. Generates a unique id for each element
  function handleAdd(name: string) {
    const id: string = uuidv4();
    setActiveForm(handleDefaultForm(id));
    handleSave(name, handleDefaultForm(id));
  };

  // Updates or adds an element into the provider
  function handleSave(name: string, element: any) {
    const filteredArray = state[name].filter((item) => item.id === element.id);
    if (filteredArray.length === 1) {
      dispatch({ type: "updateArray", name: name, value: element });
    }
    else if (filteredArray.length === 0) {
      dispatch({ type: "addToArray", name: name, value: element });
    }
    else {
      throw new Error('Something wrong happened');
    }
  };

  // Delete an element from the provider
  function handleDelete(name: string, element: any) {
    dispatch({ type: "deleteFromArray", name: name, value: element });
  };

  function handleUp(name: string, element: any) {
    dispatch({ type: "moveElementUpInArray", name: name, value: element });
  }

  function handleDown(name: string, element: any) {
    dispatch({ type: "moveElementDownInArray", name: name, value: element });
  }

  // Updates the state locally when a change occurs
  function handleChange(e: any) {
    const name: string = e.target.name;
    const value: string = e.target.value;
    setActiveForm({ ...activeForm, [name]: value });
  };

  // Updates the state locally to set up the active form to be the element property
  function handleEdit(element: any) {
    setActiveForm(element);
  };


  return (
    <section>
      <SectionHeader icon={icon} title={title} handleClick={() => setActive(!active)} />

      <Collapse in={active}>

        {state[type].map((element) => {
          if (element.id !== activeForm?.id) {
            return (
              <SavedSection
                key={type + element.id}
                title={element.title}
                description={(element.description ? element.description.slice(0, 30) + "..." : "")}
                handleDelete={() => handleDelete(type, element)}
                handleEdit={() => handleEdit(element)}
                handleUp={() => handleUp(type, element)}
                handleDown={() => handleDown(type, element)}
              />
            );
          }
          else if (element.id === activeForm?.id) {
            return (
              cloneElement(form, {
                key: type + element.id,
                form: activeForm,
                handleDelete: () => handleDelete(type, element),
                handleSave: () => {
                  handleSave(type, activeForm);
                  setActiveForm(null);
                },
                handleChange: (e) => handleChange(e),
              })
            );
          }
        })}

        <FormFooter
          startIcon={<AddCircleOutlineRoundedIcon />}
          topDivider={false}
          bottomDivider={bottomDivider}
          fullWidth={true}
          onClick={() => handleAdd(type)}>
          {footerButton}
        </FormFooter>

      </Collapse>
    </section>
  );
}
