import WorkSectionForm from '../../sections-forms/work-section-form/work-section-form';
import TemplateSection from '../template-section/template-section';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import { useAppSelector } from '../../../../../../state/hooks';


export default function WorkSection() {

  const state = useAppSelector(state => state.builder.experience.work);

  return (
    <TemplateSection
      elements={state}
      title="Work Experience"
      icon={<WorkOutlineRoundedIcon />}
      footerButtonValue="Add another work experience"
      bottomDivider={true}
      form={<WorkSectionForm />} />
  );
}
