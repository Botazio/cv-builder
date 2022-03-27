import TemplateSection from '../template-section/template-section';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EducationSectionForm from '../../sections-forms/education-section-form/education-section-form';


export default function EducationSection() {

  return (
    <TemplateSection
      type={"education"}
      title="Education"
      icon={<SchoolOutlinedIcon />}
      footerButton="Add another studies"
      bottomDivider={true}
      form={<EducationSectionForm />} />
  );
}
