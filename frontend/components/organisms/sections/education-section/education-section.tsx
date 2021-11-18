import TemplateSection from '../template-section/template-section';
import { Education } from '../../../../interfaces/education-interface';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EducationSectionForm from '../../../molecules/sections-forms/education-section-form/education-section-form';

function handleDefaultForm(id: number): Education {
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

export default function EducationSection() {

  return (
    <TemplateSection
      type={"education"}
      title="Education"
      icon={<SchoolOutlinedIcon />}
      footerButton="Add another studies"
      bottomDivider={true}
      handleDefaultForm={handleDefaultForm}
      form={<EducationSectionForm />} />
  );
}
