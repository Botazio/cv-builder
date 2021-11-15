import SectionHeader from '../../atoms/section-header/section-header';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import WorkSectionForm from '../../molecules/work-section-form/work-section-form';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import FormFooter from '../../molecules/form-footer/form-footer';
import SavedSection from '../../molecules/saved-section/saved-section';
import { useState } from 'react';
import { Collapse } from '@mui/material';
import { useForm } from '../../../providers/form-provider';
import { Experience } from '../../../interfaces/experience-interface';
import { displaySavedSections } from '../../../utils/functions';

const defaultForm: Experience = {
  id: 2,
  title: "",
  startDate: "",
  endDate: "",
  place: "",
  location: "",
  description: "",
};

export default function WorkSection() {
  const [active, setActive] = useState<boolean>(true);
  const [activeForm, setActiveForm] = useState<Experience | null>();

  const { state, dispatch } = useForm();

  const handleSave: Function = () => {
    dispatch({ type: "addToArray", name: "experience", value: activeForm });
    setActiveForm(null);
  };


  return (
    <section>
      <SectionHeader icon={<WorkOutlineRoundedIcon />} title="Work Experience" handleClick={() => setActive(!active)} />

      <Collapse in={active}>

        {state.experience.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id).map((element) => {
          return (
            <SavedSection key={"experience" + element.id} title={element.title} startDate={element.startDate} endDate={element.endDate} />
          );
        })}

        {activeForm && (
          <WorkSectionForm
            form={activeForm}
            handleDelete={() => setActiveForm(null)}
            handleSave={() => handleSave()} />
        )}

        <FormFooter startIcon={<AddCircleOutlineRoundedIcon />} divider={false} fullWidth={true} onClick={() => setActiveForm(defaultForm)} >
          Add another work experience
        </FormFooter>

      </Collapse>
    </section>
  );
}
