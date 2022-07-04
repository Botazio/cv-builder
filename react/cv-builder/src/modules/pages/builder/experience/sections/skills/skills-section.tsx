import TemplateSection from '../template-section/template-section';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import SkillsSectionForm from './skills-section-form/skills-section-form';
import OutlinedButton from 'common/components/atoms/buttons/outlined-button/outlined-button';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { ADD_FORM } from '../../experience.actions';
import { IterativeExperienceSections } from '../../experience-sections.enum';
import SavedForm from '../../saved-form/saved-form';

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
        if (element.id !== state.activeElementID) {
          return (
            <SavedForm
              key={element.id}
              title={element.title}
              elementID={element.id}
              sectionCode={IterativeExperienceSections.SKILLS}
            />
          );
        }
        else if (element.id === state.activeElementID) {
          return (
            <SkillsSectionForm
              key={element.id}
              state={element} />
          );
        }
      })}

    </TemplateSection>
  );
}