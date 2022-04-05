import SectionBody from '../../../sections-forms/section-body/section-body';
import InputWrapper from '@common/components/atoms/inputs/input-wrapper/input-wrapper';
import TextField from '@common/components/atoms/inputs/text-field/text-field';
import { useAppDispatch } from '@state/hooks';
import { IterativeExperienceSections } from '../../../experience-sections.enum';
import SectionFormFooter from '../../../sections-forms/section-form-footer/section-form-footer';
import { SET_FORM_FIELD } from '../../../experience.actions';
import { Language } from '../languages-utils';

export default function LanguagesSectionForm({ state }: { state: Language; }) {
  const dispatch = useAppDispatch();
  const section = IterativeExperienceSections.LANGUAGES;

  return (
    <>
      <SectionBody>
        <InputWrapper label="language" labelPlaceHolder="Language">
          <TextField
            name="title"
            value={state.title}
            handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "title", section: section })} />
        </InputWrapper>

        <SectionFormFooter formID={state.id} section={section} />

      </SectionBody>

    </>
  );
}