import WorkSectionForm from '../../sections-forms/work-section-form/work-section-form';
import TemplateSection from '../template-section/template-section';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';


export default function WorkSection() {

  return (
    <TemplateSection
      type={"experience"}
      title="Work Experience"
      icon={<WorkOutlineRoundedIcon />}
      footerButton="Add another work experience"
      bottomDivider={true}
      form={<WorkSectionForm />} />
  );
}
