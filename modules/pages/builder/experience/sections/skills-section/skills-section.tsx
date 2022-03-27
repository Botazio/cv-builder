import TemplateSection from '../template-section/template-section';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import SkillsSectionForm from '../../sections-forms/skills-section-form/skills-section-form';

export default function SkillsSection() {

  return (
    <TemplateSection
      type={"skills"}
      title="Skills"
      icon={<BuildOutlinedIcon />}
      footerButton="Add another skill"
      bottomDivider={true}
      form={<SkillsSectionForm />} />
  );
}