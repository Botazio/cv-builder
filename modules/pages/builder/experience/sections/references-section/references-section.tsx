import TemplateSection from '../template-section/template-section';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { Reference } from '../../../../../../common/interfaces/reference-interface';
import ReferencesSectionForm from '../../sections-forms/references-section-form/references-section-form';

function handleDefaultForm(id: string): Reference {
  return (
    {
      id: id,
      name: "",
      place: "",
      phone: "",
      email: "",
      description: ""
    }
  );
};

export default function ReferencesSection() {

  return (
    <TemplateSection
      type={"references"}
      title="References"
      icon={<FeedbackOutlinedIcon />}
      footerButton="Add another reference"
      bottomDivider={false}
      handleDefaultForm={handleDefaultForm}
      form={<ReferencesSectionForm />} />
  );
}