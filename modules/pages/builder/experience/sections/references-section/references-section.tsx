import TemplateSection from '../template-section/template-section';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import ReferencesSectionForm from '../../sections-forms/references-section-form/references-section-form';


export default function ReferencesSection() {

  return (
    <TemplateSection
      type={"references"}
      title="References"
      icon={<FeedbackOutlinedIcon />}
      footerButton="Add another reference"
      bottomDivider={false}
      form={<ReferencesSectionForm />} />
  );
}