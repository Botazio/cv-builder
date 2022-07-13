import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import OutlinedButton from 'common/components/atoms/buttons/outlined-button/outlined-button';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { IterativeExperienceSections } from '../../experience-sections.enum';
import { ADD_FORM } from '../../experience.actions';
import SectionSavedForm from '../../sections-forms/section-saved-form/section-saved-form';
import TemplateSection from '../template-section/template-section';
import SkillsSectionForm from './skills-section-form/skills-section-form';

export default function SkillsSection() {
  const state = useAppSelector(state => state.builder.experience.skills);
  const dispatch = useAppDispatch();

  return (
    <TemplateSection
      title="Skills"
      icon={<BuildOutlinedIcon />}
      footerButton={
        <OutlinedButton
          value="Add another skill"
          startIcon={<AddCircleOutlineRoundedIcon />}
          handleClick={() => dispatch({ type: ADD_FORM, section: IterativeExperienceSections.SKILLS })}
        />
      }
      bottomDivider={true}>

      {state.elements.map((element) => {
        if (element.id === state.activeElementID) {
          return (
            <SkillsSectionForm
              key={element.id}
              state={element} />
          );
        } else {
          return (
            <SectionSavedForm
              key={element.id}
              title={element.title}
              elementID={element.id}
              sectionCode={IterativeExperienceSections.SKILLS}
            />
          );
        }
      })}

    </TemplateSection>
  );
}