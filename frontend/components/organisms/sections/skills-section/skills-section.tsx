import TemplateSection from '../template-section/template-section';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import SkillsSectionForm from '../../../molecules/sections-forms/skills-section-form/skills-section-form';
import { Skills } from '../../../../interfaces/skills-interface';

function handleDefaultForm(id: string): Skills {
  return (
    {
      id: id,
      title: "",
    }
  );
};

export default function SkillsSection() {

  return (
    <TemplateSection
      type={"skills"}
      title="Skills"
      icon={<BuildOutlinedIcon />}
      footerButton="Add another skill"
      bottomDivider={true}
      handleDefaultForm={handleDefaultForm}
      form={<SkillsSectionForm />} />
  );
}