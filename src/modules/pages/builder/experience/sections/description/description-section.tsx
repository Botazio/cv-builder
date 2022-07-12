import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { Collapse, Grid } from '@mui/material';
import OutlinedButton from 'common/components/atoms/buttons/outlined-button/outlined-button';
import InputWrapper from 'common/components/atoms/inputs/input-wrapper/input-wrapper';
import TextArea from 'common/components/atoms/inputs/text-area/text-area';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { SET_DESCRIPTION } from '../../experience.actions';
import SectionBody from '../../sections-forms/section-body/section-body';
import SectionFooter from '../../sections-forms/section-footer/section-footer';
import SectionHeader from '../../sections-forms/section-header/section-header';


export default function DescriptionSection() {
  const [active, setActive] = useState<boolean>(true);

  const state = useAppSelector(state => state.builder.experience);
  const dispatch = useAppDispatch();

  return (
    <section>
      <SectionHeader icon={<PersonOutlineRoundedIcon />} title="Description" handleClick={() => setActive(!active)} />

      <Collapse in={active}>
        <SectionBody>
          <InputWrapper label="description" labelPlaceHolder="Description">
            <TextArea
              name="description"
              value={state.description}
              handleChange={(e) => dispatch({ type: SET_DESCRIPTION, payload: e.target.value })} />
          </InputWrapper>

          <SectionFooter>
            <Grid container spacing={2} direction="row-reverse">
              <Grid item xs={12} sm={3}>
                <OutlinedButton value="Save" startIcon={<SaveRoundedIcon />} type="primary" />
              </Grid>
            </Grid>
          </SectionFooter>
        </SectionBody>
      </Collapse>
    </section>
  );
}
