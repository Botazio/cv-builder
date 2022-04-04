import SectionBody from '../../../sections-forms/section-body/section-body';
import { Grid } from '@mui/material';
import InputWrapper from '../../../../../../../common/components/atoms/inputs/input-wrapper/input-wrapper';
import TextField from '../../../../../../../common/components/atoms/inputs/text-field/text-field';
import TextArea from '../../../../../../../common/components/atoms/inputs/text-area/text-area';
import { Education } from '../education-utils';
import { IterativeExperienceSections } from '../../../experience-sections.enum';
import { useAppDispatch } from '../../../../../../../state/hooks';
import SectionFormFooter from '../../../sections-forms/section-form-footer/section-form-footer';

export default function EducationSectionForm({ state }: { state: Education; }) {

  const dispatch = useAppDispatch();
  const section = IterativeExperienceSections.EDUCATION;

  return (
    <>
      <SectionBody>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputWrapper label="title" labelPlaceHolder="Studies">
              <TextField name="title" value={state.title} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="location" labelPlaceHolder="Location">
              <TextField name="location" value={state.location} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12}>
            <InputWrapper label="place" labelPlaceHolder="Institution/Centre">
              <TextField name="place" value={state.place} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="startDate" labelPlaceHolder="Start date">
              <TextField name="startDate" value={state.startDate} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="endDate" labelPlaceHolder="End date">
              <TextField name="endDate" value={state.endDate} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12}>
            <InputWrapper label="description" labelPlaceHolder="Description">
              <TextArea name="description" value={state.description} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

        </Grid>

        <SectionFormFooter formID={state.id} section={section} />

      </SectionBody>

    </>
  );
}