import SectionBody from '../../../atoms/section-body/section-body';
import { Grid } from '@mui/material';
import InputWrapper from '../../../atoms/input-wrapper/input-wrapper';
import TextField from '../../../atoms/text-field/text-field';
import SectionFooter from '../../../atoms/section-footer/section-footer';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import SectionButton from '../../../atoms/section-button/section-button';
import { Languages } from '../../../../interfaces/languages-interface';

export default function LanguagesSectionForm({ form, handleDelete, handleSave, handleChange }: { form?: Languages; handleDelete?: any; handleSave?: any; handleChange?: any; }) {

  return (
    <>
      <SectionBody>
        <InputWrapper label="language" labelPlaceHolder="Language">
          <TextField name="title" value={form.title} handleChange={handleChange} />
        </InputWrapper>

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