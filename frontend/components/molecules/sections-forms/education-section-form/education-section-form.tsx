import SectionBody from '../../../atoms/section-body/section-body';
import { Grid } from '@mui/material';
import InputWrapper from '../../../atoms/input-wrapper/input-wrapper';
import TextField from '../../../atoms/text-field/text-field';
import MultilineTextField from '../../../atoms/multiline-text-field/multiline-text-field';
import SectionFooter from '../../../atoms/section-footer/section-footer';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import SectionButton from '../../../atoms/section-button/section-button';
import { Education } from '../../../../interfaces/education-interface';

export default function EducationSectionForm({ form, handleDelete, handleSave, handleChange }: { form?: Education; handleDelete?: any; handleSave?: any; handleChange?: any; }) {

  return (
    <>
      <SectionBody>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputWrapper label="title" labelPlaceHolder="Studies">
              <TextField name="title" value={form.title} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="location" labelPlaceHolder="Location">
              <TextField name="location" value={form.location} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12}>
            <InputWrapper label="place" labelPlaceHolder="Institution/Centre">
              <TextField name="place" value={form.place} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="startDate" labelPlaceHolder="Start date">
              <TextField name="startDate" value={form.startDate} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="endDate" labelPlaceHolder="End date">
              <TextField name="endDate" value={form.endDate} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12}>
            <InputWrapper label="description" labelPlaceHolder="Description">
              <MultilineTextField name="description" value={form.description} handleChange={handleChange} />
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