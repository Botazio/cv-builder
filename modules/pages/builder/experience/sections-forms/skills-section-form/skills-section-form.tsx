import SectionBody from '../section-body/section-body';
import { Grid } from '@mui/material';
import InputWrapper from '../../../../../../common/components/atoms/inputs/input-wrapper/input-wrapper';
import TextField from '../../../../../../common/components/atoms/inputs/text-field/text-field';
import SectionFooter from '../../../atoms/section-footer/section-footer';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import SectionButton from '../../../../../../common/components/atoms/buttons/section-button/section-button';
import { Skills } from '../../../../../../common/interfaces/skills-interface';

export default function SkillsSectionForm({ form, handleDelete, handleSave, handleChange }: { form?: Skills; handleDelete?: any; handleSave?: any; handleChange?: any; }) {

  return (
    <>
      <SectionBody>

        <InputWrapper label="skill" labelPlaceHolder="Skill">
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