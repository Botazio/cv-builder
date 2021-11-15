import SectionHeader from '../../atoms/section-header/section-header';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import InputWrapper from '../../atoms/input-wrapper/input-wrapper';
import MultilineTextField from '../../atoms/multiline-text-field/multiline-text-field';
import SectionBody from '../../atoms/section-body/section-body';
import SectionFooter from '../../atoms/section-footer/section-footer';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { Collapse, Grid } from '@mui/material';
import SectionButton from '../../atoms/section-button/section-button';
import { useState } from 'react';


export default function DescriptionSection() {
  const [active, setActive] = useState(true);


  return (
    <section>
      <SectionHeader icon={<PersonOutlineRoundedIcon />} title="Description" handleClick={() => setActive(!active)} />

      <Collapse in={active}>
        <SectionBody>
          <InputWrapper label="description" labelPlaceHolder="Description">
            <MultilineTextField name="description" />
          </InputWrapper>
          <SectionFooter>
            <Grid container spacing={2} direction="row-reverse">
              <Grid item xs={12} sm={3}>
                <SectionButton startIcon={<SaveRoundedIcon />} type="primary">
                  Save
                </SectionButton>
              </Grid>
            </Grid>
          </SectionFooter>
        </SectionBody>
      </Collapse>
    </section>
  );
}
