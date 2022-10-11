import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { Collapse, Grid } from '@mui/material';
import OutlinedButton from 'common/components/atoms/buttons/outlined-button/outlined-button';
import InputWrapper from 'common/components/atoms/inputs/input-wrapper/input-wrapper';
import TextArea from 'common/components/atoms/inputs/text-area/text-area';
import SectionBody from 'common/components/layouts/layout-card/layout-card-section/section-body/section-body';
import SectionFooter from 'common/components/layouts/layout-card/layout-card-section/section-footer/section-footer';
import SectionHeader from 'common/components/layouts/layout-card/layout-card-section/section-header/section-header';
import SaveStateButtonWrapper from 'common/components/molecules/save-state/save-state-button-wrapper/save-state-button-wrapper';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'state/hooks';
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
                <SaveStateButtonWrapper>
                  <OutlinedButton value="Save" startIcon={<SaveRoundedIcon />} type="primary" />
                </SaveStateButtonWrapper>
              </Grid>
            </Grid>
          </SectionFooter>
        </SectionBody>
      </Collapse>
    </section>
  );
}
