import SectionHeader from '../../../atoms/section-header/section-header';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import InputWrapper from '../../../../../../common/components/atoms/inputs/input-wrapper/input-wrapper';
import MultilineTextField from '../../../../../../common/components/atoms/inputs/multiline-text-field/multiline-text-field';
import SectionBody from '../../sections-forms/section-body/section-body';
import SectionFooter from '../../../atoms/section-footer/section-footer';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { Collapse, Grid } from '@mui/material';
import SectionButton from '../../../../../../common/components/atoms/buttons/section-button/section-button';
import { useEffect, useState } from 'react';
import { useForm } from '../../../../../../providers/form-provider';


export default function DescriptionSection() {
  const [active, setActive] = useState<boolean>(true);
  const [currentDescrip, setCurrentDescrip] = useState<string>("");

  const { state, dispatch } = useForm();

  const savedDescrip: string = state.description;

  useEffect(() => {
    setCurrentDescrip(savedDescrip);
  }, [savedDescrip]);

  const handleChange: Function = (e) => {
    setCurrentDescrip(e.target.value);
  };

  const handleSubmit: Function = () => {
    dispatch({ type: "description", value: currentDescrip });
  };

  return (
    <section>
      <SectionHeader icon={<PersonOutlineRoundedIcon />} title="Description" handleClick={() => setActive(!active)} />

      <Collapse in={active}>
        <SectionBody>
          <InputWrapper label="description" labelPlaceHolder="Description">
            <MultilineTextField name="description" value={currentDescrip} handleChange={(e) => handleChange(e)} />
          </InputWrapper>

          <SectionFooter>
            <Grid container spacing={2} direction="row-reverse">
              <Grid item xs={12} sm={3}>
                <SectionButton startIcon={<SaveRoundedIcon />} type="primary" handleClick={() => handleSubmit()}>
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
