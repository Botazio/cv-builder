import styles from './experience-form.module.css';
import DescriptionSection from '../description-section/description-section';
import WorkSection from '../work-section/work-section';

/**
  * Form for the page experience. That page is the first page of the cv builder.
  * The form asks the user to enter experience information.
  */
export default function ExperienceForm() {
  return (
    <div className={styles.container}>
      <DescriptionSection />
      <WorkSection />

    </div >
  );
}