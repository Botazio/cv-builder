import SectionBody from '../../atoms/section-body/section-body';
import { Grid } from '@mui/material';
import InputWrapper from '../../atoms/input-wrapper/input-wrapper';
import TextField from '../../atoms/text-field/text-field';
import MultilineTextField from '../../atoms/multiline-text-field/multiline-text-field';
import SectionFooter from '../../atoms/section-footer/section-footer';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import SectionButton from '../../atoms/section-button/section-button';
import { Experience } from '../../../interfaces/experience-interface';

export default function WorkSectionForm({ form, handleDelete, handleSave }: { form: Experience; handleDelete: any; handleSave: any; }) {

  return (
    <>
      <SectionBody>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputWrapper label="title" labelPlaceHolder="Title/Position">
              <TextField name="title" value={form.title} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="location" labelPlaceHolder="Location">
              <TextField name="location" value={form.location} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12}>
            <InputWrapper label="place" labelPlaceHolder="Company">
              <TextField name="place" value={form.place} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="startDate" labelPlaceHolder="Start date">
              <TextField name="startDate" value={form.startDate} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="endDate" labelPlaceHolder="End date">
              <TextField name="endDate" value={form.endDate} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12}>
            <InputWrapper label="description" labelPlaceHolder="Description">
              <MultilineTextField name="description-experience" value={form.description} />
            </InputWrapper>
          </Grid>

        </Grid>
        <SectionFooter>
          <Grid container spacing={2} direction="row-reverse">
            <Grid item xs={12} sm={3}>
              <SectionButton startIcon={<SaveRoundedIcon />} type="primary" handleClick={handleSave}>
                Save
              </SectionButton>
            </Grid>
            <Grid item xs={12} sm={3}>
              <SectionButton startIcon={<DeleteRoundedIcon />} type="secondary" handleClick={handleDelete}>
                Delete
              </SectionButton>
            </Grid>
          </Grid>
        </SectionFooter>
      </SectionBody>

    </>
  );
}
