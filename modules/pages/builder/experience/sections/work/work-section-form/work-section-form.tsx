import SectionBody from '../../../sections-forms/section-body/section-body';
import { Grid } from '@mui/material';
import InputWrapper from '../../../../../../../common/components/atoms/inputs/input-wrapper/input-wrapper';
import TextField from '../../../../../../../common/components/atoms/inputs/text-field/text-field';
import TextArea from '../../../../../../../common/components/atoms/inputs/text-area/text-area';
import { Work } from '../work-utils';
import { useAppDispatch } from '../../../../../../../state/hooks';
import { SET_FORM_DESCRIPTION, SET_FORM_END_DATE, SET_FORM_LOCATION, SET_FORM_PLACE, SET_FORM_START_DATE, SET_FORM_TITLE } from '../../../experience.actions';
import { IterativeExperienceSections } from '../../../experience-sections.enum';
import SectionFormFooter from '../../../sections-forms/section-form-footer/section-form-footer';

export default function WorkSectionForm({ state }: { state: Work; }) {

  const dispatch = useAppDispatch();
  const section = IterativeExperienceSections.WORK;

  return (
    <>
      <SectionBody>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputWrapper label="title" labelPlaceHolder="Title/Position">
              <TextField
                name="title"
                value={state.title}
                handleChange={(e) => dispatch({ type: SET_FORM_TITLE, payload: e.target.value, section: section })} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="location" labelPlaceHolder="Location">
              <TextField
                name="location"
                value={state.location}
                handleChange={(e) => dispatch({ type: SET_FORM_LOCATION, payload: e.target.value, section: section })} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12}>
            <InputWrapper label="place" labelPlaceHolder="Company">
              <TextField
                name="place"
                value={state.place}
                handleChange={(e) => dispatch({ type: SET_FORM_PLACE, payload: e.target.value, section: section })} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="startDate" labelPlaceHolder="Start date">
              <TextField
                name="startDate"
                value={state.startDate}
                handleChange={(e) => dispatch({ type: SET_FORM_START_DATE, payload: e.target.value, section: section })} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="endDate" labelPlaceHolder="End date">
              <TextField
                name="endDate"
                value={state.endDate}
                handleChange={(e) => dispatch({ type: SET_FORM_END_DATE, payload: e.target.value, section: section })} />
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