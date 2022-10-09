import InputWrapper from 'common/components/atoms/inputs/input-wrapper/input-wrapper';
import TextField from 'common/components/atoms/inputs/text-field/text-field';
import SectionBody from 'common/components/layouts/layout-card/layout-card-section/section-body/section-body';
import { useAppDispatch } from 'state/hooks';
import { IterativeExperienceSections } from '../../../experience-sections.enum';
import { SET_FORM_FIELD } from '../../../experience.actions';
import SectionFormFooter from '../../../sections-forms/section-form-footer/section-form-footer';
import { Skill } from '../skills-utils';

export default function SkillsSectionForm({ state }: { state: Skill; }) {

  const dispatch = useAppDispatch();
  const section = IterativeExperienceSections.SKILLS;

  return (
    <SectionBody>

      <InputWrapper label="skill" labelPlaceHolder="Skill">
        <TextField
          name="title"
          value={state.title}
          handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "title", section: section })} />
      </InputWrapper>

      <SectionFormFooter formID={state.id} section={section} />

    </SectionBody>
  );
}