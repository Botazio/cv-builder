import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import OutlinedButton from 'common/components/atoms/buttons/outlined-button/outlined-button';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { IterativeExperienceSections } from '../../experience-sections.enum';
import { ADD_FORM } from '../../experience.actions';
import SectionSavedForm from '../../sections-forms/section-saved-form/section-saved-form';
import TemplateSection from '../template-section/template-section';
import LanguagesSectionForm from './languages-section-form/languages-section-form';


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
        if (element.id === state.activeElementID) {
          return (
            <LanguagesSectionForm
              key={element.id}
              state={element} />
          );
        } else {
          return (
            <SectionSavedForm
              key={element.id}
              title={element.title}
              elementID={element.id}
              sectionCode={IterativeExperienceSections.LANGUAGES}
            />
          );
        }
      })}

    </TemplateSection>
  );
}