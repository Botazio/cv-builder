import SectionBody from '../../../atoms/section-body/section-body';
import { Grid } from '@mui/material';
import InputWrapper from '../../../atoms/input-wrapper/input-wrapper';
import TextField from '../../../atoms/text-field/text-field';
import MultilineTextField from '../../../atoms/multiline-text-field/multiline-text-field';
import SectionFooter from '../../../atoms/section-footer/section-footer';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import SectionButton from '../../../atoms/section-button/section-button';
import { Experience } from '../../../../interfaces/experience-interface';
import { Reference } from '../../../../interfaces/reference-interface';

export default function ReferencesSectionForm({ form, handleDelete, handleSave, handleChange }: { form?: Reference; handleDelete?: any; handleSave?: any; handleChange?: any; }) {

  return (
    <>
      <SectionBody>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputWrapper label="name" labelPlaceHolder="Contact person">
              <TextField name="name" value={form.name} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="place" labelPlaceHolder="Company/Institution">
              <TextField name="place" value={form.place} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="phone" labelPlaceHolder="Telephone number">
              <TextField name="phone" value={form.phone} handleChange={handleChange} />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="email" labelPlaceHolder="Email">
              <TextField name="email" value={form.email} handleChange={handleChange} />
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