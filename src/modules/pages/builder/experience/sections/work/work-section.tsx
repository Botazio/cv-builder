import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import OutlinedButton from 'common/components/atoms/buttons/outlined-button/outlined-button';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { IterativeExperienceSections } from '../../experience-sections.enum';
import { ADD_FORM } from '../../experience.actions';
import SectionSavedForm from '../../sections-forms/section-saved-form/section-saved-form';
import TemplateSection from '../template-section/template-section';
import WorkSectionForm from './work-section-form/work-section-form';


export default function WorkSection() {
  const state = useAppSelector(state => state.builder.experience.work);
  const dispatch = useAppDispatch();

  return (
    <TemplateSection
      title="Work Experience"
      icon={<WorkOutlineRoundedIcon />}
      footerButton={
        <OutlinedButton
          value="Add another work experience"
          startIcon={<AddCircleOutlineRoundedIcon />}
          handleClick={() => dispatch({ type: ADD_FORM, section: IterativeExperienceSections.WORK })}
        />
      }
      bottomDivider={true}>

      {state.elements.map((element) => {
        if (element.id === state.activeElementID) {
          return (
            <WorkSectionForm
              key={element.id}
              state={element} />
          );
        } else {
          return (
            <SectionSavedForm
              key={element.id}
              title={element.title}
              description={(element.description.length > 30 ? element.description.slice(0, 30) + "..." : element.description)}
              elementID={element.id}
              sectionCode={IterativeExperienceSections.WORK}
            />
          );
        }
      })}

    </TemplateSection>
  );
}
