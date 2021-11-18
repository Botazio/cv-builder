import TemplateSection from '../template-section/template-section';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { Reference } from '../../../../interfaces/reference-interface';
import ReferencesSectionForm from '../../../molecules/sections-forms/references-section-form/references-section-form';

function handleDefaultForm(id: number): Reference {
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