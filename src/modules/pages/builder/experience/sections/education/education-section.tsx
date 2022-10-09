import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import OutlinedButton from 'common/components/atoms/buttons/outlined-button/outlined-button';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { IterativeExperienceSections } from '../../experience-sections.enum';
import { ADD_FORM } from '../../experience.actions';
import SectionSavedForm from '../../sections-forms/section-saved-form/section-saved-form';
import TemplateSection from '../template-section/template-section';
import EducationSectionForm from './education-section-form/education-section-form';


export default function EducationSection() {
  const state = useAppSelector(state => state.builder.experience.education);
  const dispatch = useAppDispatch();

  return (
    <TemplateSection
      title="Education"
      icon={<SchoolOutlinedIcon />}
      footerButton={
        <OutlinedButton
          value="Add another education"
          startIcon={<AddCircleOutlineRoundedIcon />}
          handleClick={() => dispatch({ type: ADD_FORM, section: IterativeExperienceSections.EDUCATION })}
        />
      }
      bottomDivider={true}>

      {state.elements.map((element) => {
        if (element.id === state.activeElementID) {
          return (
            <EducationSectionForm
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
              sectionCode={IterativeExperienceSections.EDUCATION}
            />
          );
        }
      })}

    </TemplateSection>
  );
}
