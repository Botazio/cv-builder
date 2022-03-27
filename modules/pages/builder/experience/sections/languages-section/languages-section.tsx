import TemplateSection from '../template-section/template-section';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import LanguagesSectionForm from '../../sections-forms/languages-section-form/languages-section-form';


export default function LanguagesSection() {

  return (
    <TemplateSection
      type={"languages"}
      title="Languages"
      icon={<LanguageRoundedIcon />}
      footerButton="Add another language"
      bottomDivider={true}
      form={<LanguagesSectionForm />} />
  );
}