import DescriptionSection from '../../organisms/sections/description-section/description-section';
import WorkSection from '../../organisms/sections/work-section/work-section';
import EducationSection from '../../organisms/sections/education-section/education-section';
import SkillsSection from '../../organisms/sections/skills-section/skills-section';
import LanguagesSection from '../../organisms/sections/languages-section/languages-section';
import ReferencesSection from '../../organisms/sections/references-section/references-section';
import BuilderBodyContainer from '../../atoms/builder-body-container/builder-body-container';

/**
  * Form for the page experience. That page is the first page of the cv builder.
  * The form asks the user to enter experience information.
  */
export default function ExperienceForm() {
  return (
    <BuilderBodyContainer>
      <DescriptionSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <LanguagesSection />
      <ReferencesSection />
    </BuilderBodyContainer>
  );
}