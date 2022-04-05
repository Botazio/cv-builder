import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import InputWrapper from '@common/components/atoms/inputs/input-wrapper/input-wrapper';
import SectionBody from '../../sections-forms/section-body/section-body';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { Collapse, Grid } from '@mui/material';
import SectionButton from '@common/components/atoms/buttons/section-button/section-button';
import { useState } from 'react';
import SectionFooter from '../../sections-forms/section-footer/section-footer';
import SectionHeader from '../../sections-forms/section-header/section-header';
import TextArea from '@common/components/atoms/inputs/text-area/text-area';
import { useAppDispatch, useAppSelector } from '@state/hooks';
import { SET_DESCRIPTION } from '../../experience.actions';


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
                <SectionButton value="Save" startIcon={<SaveRoundedIcon />} type="primary" />
              </Grid>
            </Grid>
          </SectionFooter>
        </SectionBody>
      </Collapse>
    </section>
  );
}
