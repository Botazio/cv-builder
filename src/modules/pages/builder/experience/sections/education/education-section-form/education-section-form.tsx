import { Grid } from '@mui/material';
import InputWrapper from 'common/components/atoms/inputs/input-wrapper/input-wrapper';
import TextArea from 'common/components/atoms/inputs/text-area/text-area';
import TextField from 'common/components/atoms/inputs/text-field/text-field';
import SectionBody from 'common/components/layouts/layout-card/layout-card-section/section-body/section-body';
import { useAppDispatch } from 'state/hooks';
import { IterativeExperienceSections } from '../../../experience-sections.enum';
import { SET_FORM_FIELD } from '../../../experience.actions';
import SectionFormFooter from '../../../sections-forms/section-form-footer/section-form-footer';
import { Education } from '../education-utils';

export default function EducationSectionForm({ state }: { state: Education; }) {

  const dispatch = useAppDispatch();
  const section = IterativeExperienceSections.EDUCATION;

  return (
    <SectionBody>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6}>
          <InputWrapper label="title" labelPlaceHolder="Title/Position">
            <TextField
              name="title"
              value={state.title}
              handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "title", section: section })} />
          </InputWrapper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputWrapper label="location" labelPlaceHolder="Location">
            <TextField
              name="location"
              value={state.location}
              handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "location", section: section })} />
          </InputWrapper>
        </Grid>

        <Grid item xs={12}>
          <InputWrapper label="place" labelPlaceHolder="Company">
            <TextField
              name="place"
              value={state.place}
              handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "place", section: section })} />
          </InputWrapper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputWrapper label="startDate" labelPlaceHolder="Start date">
            <TextField
              name="startDate"
              value={state.startDate}
              handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "startDate", section: section })} />
          </InputWrapper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputWrapper label="endDate" labelPlaceHolder="End date">
            <TextField
              name="endDate"
              value={state.endDate}
              handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "endDate", section: section })} />
          </InputWrapper>
        </Grid>

        <Grid item xs={12}>
          <InputWrapper label="description" labelPlaceHolder="Description">
            <TextArea
              name="description"
              value={state.description}
              handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "description", section: section })} />
          </InputWrapper>
        </Grid>

      </Grid>

      <SectionFormFooter formID={state.id} section={section} />

    </SectionBody>
  );
}