import SectionBody from '../../../sections-forms/section-body/section-body';
import { Grid } from '@mui/material';
import InputWrapper from '../../../../../../../common/components/atoms/inputs/input-wrapper/input-wrapper';
import TextField from '../../../../../../../common/components/atoms/inputs/text-field/text-field';
import SectionFormFooter from '../../../sections-forms/section-form-footer/section-form-footer';
import { useAppDispatch } from '../../../../../../../state/hooks';
import { IterativeExperienceSections } from '../../../experience-sections.enum';
import { Reference } from '../references-utils';
import { SET_FORM_DESCRIPTION, SET_FORM_EMAIL, SET_FORM_MOBILE, SET_FORM_NAME, SET_FORM_PLACE } from '../../../experience.actions';
import TextArea from '../../../../../../../common/components/atoms/inputs/text-area/text-area';

export default function ReferencesSectionForm({ state }: { state: Reference; }) {

  const dispatch = useAppDispatch();
  const section = IterativeExperienceSections.REFERENCES;

  return (
    <>
      <SectionBody>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputWrapper label="name" labelPlaceHolder="Contact person">
              <TextField
                name="name"
                value={state.name}
                handleChange={(e) => dispatch({ type: SET_FORM_NAME, payload: e.target.value, section: section })} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="place" labelPlaceHolder="Company/Institution">
              <TextField
                name="place"
                value={state.place}
                handleChange={(e) => dispatch({ type: SET_FORM_PLACE, payload: e.target.value, section: section })} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="mobile" labelPlaceHolder="Telephone number">
              <TextField
                name="mobile"
                value={state.mobile}
                handleChange={(e) => dispatch({ type: SET_FORM_MOBILE, payload: e.target.value, section: section })} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="email" labelPlaceHolder="Email">
              <TextField
                name="email"
                value={state.email}
                handleChange={(e) => dispatch({ type: SET_FORM_EMAIL, payload: e.target.value, section: section })} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12}>
            <InputWrapper label="description" labelPlaceHolder="Description">
              <TextArea
                name="description"
                value={state.description}
                handleChange={(e) => dispatch({ type: SET_FORM_DESCRIPTION, payload: e.target.value, section: section })} />
            </InputWrapper>
          </Grid>

        </Grid>

        <SectionFormFooter formID={state.id} section={section} />
      </SectionBody>

    </>
  );
}