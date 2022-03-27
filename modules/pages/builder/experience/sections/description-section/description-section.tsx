import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import InputWrapper from '../../../../../../common/components/atoms/inputs/input-wrapper/input-wrapper';
import MultilineTextField from '../../../../../../common/components/atoms/inputs/multiline-text-field/multiline-text-field';
import SectionBody from '../../sections-forms/section-body/section-body';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { Collapse, Grid } from '@mui/material';
import SectionButton from '../../../../../../common/components/atoms/buttons/section-button/section-button';
import { useState } from 'react';
import SectionFooter from '../../sections-forms/section-footer/section-footer';
import SectionHeader from '../../sections-forms/section-header/section-header';


export default function DescriptionSection() {
  const [active, setActive] = useState<boolean>(true);

  return (
    <section>
      <SectionHeader icon={<PersonOutlineRoundedIcon />} title="Description" handleClick={() => setActive(!active)} />

      <Collapse in={active}>
        <SectionBody>
          <InputWrapper label="description" labelPlaceHolder="Description">
            <MultilineTextField name="description" value="" />
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
