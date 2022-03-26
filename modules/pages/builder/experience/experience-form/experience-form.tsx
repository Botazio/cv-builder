import DescriptionSection from '../sections/description-section/description-section';
import WorkSection from '../sections/work-section/work-section';
import EducationSection from '../sections/education-section/education-section';
import SkillsSection from '../sections/skills-section/skills-section';
import LanguagesSection from '../sections/languages-section/languages-section';
import ReferencesSection from '../sections/references-section/references-section';
import BuilderBodyContainer from '../../../../../common/components/layouts/layout-builder/layout-builder-body/layout-builder-body';

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