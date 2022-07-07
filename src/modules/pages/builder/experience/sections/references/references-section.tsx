import TemplateSection from '../template-section/template-section';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import ReferencesSectionForm from './references-section-form/references-section-form';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import SavedForm from '../../saved-form/saved-form';
import { ADD_FORM } from '../../experience.actions';
import { IterativeExperienceSections } from '../../experience-sections.enum';
import OutlinedButton from 'common/components/atoms/buttons/outlined-button/outlined-button';


export default function ReferencesSection() {
  const state = useAppSelector(state => state.builder.experience.references);
  const dispatch = useAppDispatch();


  return (
    <TemplateSection
      title="References"
      icon={<FeedbackOutlinedIcon />}
      footerButton={
        <OutlinedButton
          value="Add another reference"
          startIcon={<AddCircleOutlineRoundedIcon />}
          handleClick={() => dispatch({ type: ADD_FORM, section: IterativeExperienceSections.REFERENCES })}
        />
      }
      bottomDivider={true}>

      {state.elements.map((element) => {
        if (element.id === state.activeElementID) {
          return (
            <ReferencesSectionForm
              key={element.id}
              state={element} />
          );
        } else {
          return (
            <SavedForm
              key={element.id}
              title={element.name}
              description={element.description}
              elementID={element.id}
              sectionCode={IterativeExperienceSections.REFERENCES}
            />
          );
        }
      })}

    </TemplateSection>
  );
}