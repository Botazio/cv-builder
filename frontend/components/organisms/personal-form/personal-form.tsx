import styles from './personal-form.module.css';
import TextField from '../../atoms/text-field/text-field';
import InputWrapper from '../../atoms/input-wrapper/input-wrapper';
import PhotoField from '../../atoms/photo-field/photo-field';
import { Collapse, Grid } from '@mui/material';
import React, { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import { useForm } from '../../../providers/form-provider';
import FormFooter from '../../molecules/form-footer/form-footer';

/**
  * Form for the page personal. That page is the first page of the cv builder.
  * The form asks the user to enter personal information.
  */
export default function PersonalForm() {
  const [active, setActive] = useState(false);

  const { state, dispatch } = useForm();

  return (
    <div className={styles.container}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <InputWrapper label="photo" labelPlaceHolder="Photo">
              <PhotoField />
            </InputWrapper>
          </Grid>

          <Grid container item xs={12} sm={8} spacing={2}>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="name" labelPlaceHolder="Name">
                <TextField name="name" value={state.main.name} handleChange={(e) => dispatch({ type: "main", name: e.target.name, value: e.target.value })} />
              </InputWrapper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="surname" labelPlaceHolder="Surname">
                <TextField name="surname" value={state.main.surname} handleChange={(e) => dispatch({ type: "main", name: e.target.name, value: e.target.value })} />
              </InputWrapper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="profession" labelPlaceHolder="Profession">
                <TextField name="profession" value={state.main.profession} handleChange={(e) => dispatch({ type: "main", name: e.target.name, value: e.target.value })} />
              </InputWrapper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="mobile" labelPlaceHolder="Telephone number">
                <TextField name="mobile" value={state.details.mobile} handleChange={(e) => dispatch({ type: "details", name: e.target.name, value: e.target.value })} />
              </InputWrapper>
            </Grid>

            <Grid item xs={12}>
              <InputWrapper label="email" labelPlaceHolder="Email">
                <TextField name="email" value={state.details.email} handleChange={(e) => dispatch({ type: "details", name: e.target.name, value: e.target.value })} />
              </InputWrapper>
            </Grid>

            <Grid item xs={12}>
              <InputWrapper label="address" labelPlaceHolder="Address">
                <TextField name="address" value={state.details.address} handleChange={(e) => dispatch({ type: "details", name: e.target.name, value: e.target.value })} />
              </InputWrapper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="postalCode" labelPlaceHolder="Postal code">
                <TextField name="postalCode" value={state.details.postalCode} handleChange={(e) => dispatch({ type: "details", name: e.target.name, value: e.target.value })} />
              </InputWrapper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="city" labelPlaceHolder="City">
                <TextField name="city" value={state.details.city} handleChange={(e) => dispatch({ type: "details", name: e.target.name, value: e.target.value })} />
              </InputWrapper>
            </Grid>


            <Grid item xs={12}>
              <Collapse in={active}>
                <Grid container item spacing={2}>

                  <Grid item xs={12} sm={6}>
                    <InputWrapper label="linkedin" labelPlaceHolder="LinkedIn">
                      <TextField name="linkedin" value={state.details.linkedin} handleChange={(e) => dispatch({ type: "details", name: e.target.name, value: e.target.value })} />
                    </InputWrapper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputWrapper label="website" labelPlaceHolder="Website">
                      <TextField name="website" value={state.details.website} handleChange={(e) => dispatch({ type: "details", name: e.target.name, value: e.target.value })} />
                    </InputWrapper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputWrapper label="license" labelPlaceHolder="Driver's license">
                      <TextField name="license" value={state.details.license} handleChange={(e) => dispatch({ type: "details", name: e.target.name, value: e.target.value })} />
                    </InputWrapper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputWrapper label="nationality" labelPlaceHolder="Nationality">
                      <TextField name="nationality" value={state.details.nationality} handleChange={(e) => dispatch({ type: "details", name: e.target.name, value: e.target.value })} />
                    </InputWrapper>
                  </Grid>

                </Grid>
              </Collapse>
            </Grid>

          </Grid>
        </Grid>

      </form>

      <FormFooter divider={true} startIcon={active ? <RemoveCircleOutlineRoundedIcon /> : <AddCircleOutlineRoundedIcon />} fullWidth={true} onClick={() => setActive(!active)}>
        Additional Information
      </FormFooter>
    </div>
  );
}