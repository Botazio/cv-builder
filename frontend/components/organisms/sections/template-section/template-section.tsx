import SectionHeader from '../../../atoms/section-header/section-header';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import FormFooter from '../../../molecules/form-footer/form-footer';
import SavedSection from '../../../molecules/saved-section/saved-section';
import React, { cloneElement, useState } from 'react';
import { Collapse } from '@mui/material';
import { useForm } from '../../../../providers/form-provider';

interface TemplateInterface {
  type: string;
  title: string;
  icon: React.ReactNode;
  footerButton: string;
  bottomDivider: boolean;
  handleDefaultForm: Function;
  form: React.ReactElement;
}

export default function TemplateSection({ type, title, icon, footerButton, bottomDivider, handleDefaultForm, form }: TemplateInterface) {
  const [active, setActive] = useState<boolean>(true);
  const [activeForm, setActiveForm] = useState<any | null>();

  const { state, dispatch } = useForm();


  function handleAdd(arr: any[], name: string) {
    const max = arr.reduce((a: { id: number; }, b: { id: number; }) => (a.id > b.id) ? a.id : b.id, 0);
    setActiveForm(handleDefaultForm(max + 1));
    handleSave(name, handleDefaultForm(max + 1));
  };

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

  function handleChange(e: any) {
    const name: string = e.target.name;
    const value: string = e.target.value;
    setActiveForm({ ...activeForm, [name]: value });
  };

  function handleDelete(name: string, element: any) {
    dispatch({ type: "deleteFromArray", name: name, value: element });

  };

  function handleEdit(element: any) {
    setActiveForm(element);
  };


  return (
    <section>
      <SectionHeader icon={icon} title={title} handleClick={() => setActive(!active)} />

      <Collapse in={active}>

        {state[type].sort((a: { id: number; }, b: { id: number; }) => a.id - b.id).map((element) => {
          if (!activeForm || element.id !== activeForm.id) {
            return (
              <SavedSection
                key={type + element.id}
                title={element.title}
                description={(element.description ? element.description.slice(0, 30) + "..." : "")}
                handleDelete={() => handleDelete(type, element)}
                handleEdit={() => handleEdit(element)} />
            );
          }
          else if (activeForm && element.id === activeForm.id) {
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
          onClick={() => handleAdd(state[type], type)}>
          {footerButton}
        </FormFooter>

      </Collapse>
    </section>
  );
}
