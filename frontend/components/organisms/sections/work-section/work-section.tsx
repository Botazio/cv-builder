import WorkSectionForm from '../../../molecules/sections-forms/work-section-form/work-section-form';
import { Experience } from '../../../../interfaces/experience-interface';
import TemplateSection from '../template-section/template-section';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';

function handleDefaultForm(id: string): Experience {
  return (
    {
      id: id,
      title: "",
      startDate: "",
      endDate: "",
      place: "",
      location: "",
      description: ""
    }
  );
};

export default function WorkSection() {

  return (
    <TemplateSection
      type={"experience"}
      title="Work Experience"
      icon={<WorkOutlineRoundedIcon />}
      footerButton="Add another work experience"
      bottomDivider={true}
      handleDefaultForm={handleDefaultForm}
      form={<WorkSectionForm />} />
  );
}
