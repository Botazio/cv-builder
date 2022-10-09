import LayoutCardBody from 'common/components/layouts/layout-card/layout-card-body/layout-card-body';
import DescriptionSection from './sections/description/description-section';
import EducationSection from './sections/education/education-section';
import LanguagesSection from './sections/languages/languages-section';
import ReferencesSection from './sections/references/references-section';
import SkillsSection from './sections/skills/skills-section';
import WorkSection from './sections/work/work-section';

/**
  * Form for the page experience. That page is the first page of the cv builder.
  * The form asks the user to enter experience information.
  */
export default function ExperienceForm() {
  return (
    <LayoutCardBody>
      <DescriptionSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <LanguagesSection />
      <ReferencesSection />
    </LayoutCardBody>
  );
}