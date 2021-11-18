import TemplateSection from '../template-section/template-section';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { Languages } from '../../../../interfaces/languages-interface';
import LanguagesSectionForm from '../../../molecules/sections-forms/languages-section-form/languages-section-form';

function handleDefaultForm(id: number): Languages {
  return (
    {
      id: id,
      title: "",
    }
  );
};

export default function LanguagesSection() {

  return (
    <TemplateSection
      type={"languages"}
      title="Languages"
      icon={<LanguageRoundedIcon />}
      footerButton="Add another language"
      bottomDivider={true}
      handleDefaultForm={handleDefaultForm}
      form={<LanguagesSectionForm />} />
  );
}