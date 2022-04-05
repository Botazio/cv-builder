import TemplateSection from '../template-section/template-section';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import LanguagesSectionForm from './languages-section-form/languages-section-form';
import { useAppDispatch, useAppSelector } from '@state/hooks';
import OutlinedButton from '@common/components/atoms/buttons/outlined-button/outlined-button';
import { IterativeExperienceSections } from '../../experience-sections.enum';
import { ADD_FORM } from '../../experience.actions';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import SavedForm from '../../saved-form/saved-form';


export default function LanguagesSection() {
  const state = useAppSelector(state => state.builder.experience.languages);
  const dispatch = useAppDispatch();

  return (
    <TemplateSection
      title="Languages"
      icon={<LanguageRoundedIcon />}
      footerButton={
        <OutlinedButton
          value="Add another language"
          startIcon={<AddCircleOutlineRoundedIcon />}
          handleClick={() => dispatch({ type: ADD_FORM, section: IterativeExperienceSections.LANGUAGES })}
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
              sectionCode={IterativeExperienceSections.LANGUAGES}
            />
          );
        }
        else if (element.id === state.activeElementID) {
          return (
            <LanguagesSectionForm
              key={element.id}
              state={element} />
          );
        }
      })}

    </TemplateSection>
  );
}