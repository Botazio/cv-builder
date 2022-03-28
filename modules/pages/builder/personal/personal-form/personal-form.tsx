import styles from './personal-form.module.css';
import TextField from '../../../../../common/components/atoms/inputs/text-field/text-field';
import InputWrapper from '../../../../../common/components/atoms/inputs/input-wrapper/input-wrapper';
import PhotoField from '../../../../../common/components/atoms/inputs/photo-field/photo-field';
import { Collapse, Grid } from '@mui/material';
import React, { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import FormFooter from '../../../../../common/components/molecules/form-footer/form-footer';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import { SET_ADDRESS, SET_CITY, SET_EMAIL, SET_LICENSE, SET_LINKEDIN, SET_MOBILE, SET_NAME, SET_NATIONALITY, SET_POSTALCODE, SET_PROFESSION, SET_SURNAME, SET_WEBSITE } from '../personal.actions';
import { getAddress, getCity, getEmail, getLicense, getLinkedin, getMobile, getName, getNationality, getPostalCode, getProfession, getSurname, getWebsite } from '../personal.reducer';
import OutlinedButton from '../../../../../common/components/atoms/buttons/outlined-button/outlined-button';

/**
  * Form for the page personal. That page is the first page of the cv builder.
  * The form asks the user to enter personal information.
  */
export default function PersonalForm() {
  const [active, setActive] = useState(false);

  const state = useAppSelector(state => state.builder.personal);
  const dispatch = useAppDispatch();

  return (
    <>
      <form className={styles.form} autoComplete="on">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <InputWrapper label="photo" labelPlaceHolder="Photo">
              <PhotoField />
            </InputWrapper>
          </Grid>

          <Grid container item xs={12} sm={8} spacing={2}>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="name" labelPlaceHolder="Name">
                <TextField
                  name="name"
                  value={getName(state)}
                  handleChange={(e) => dispatch({ type: SET_NAME, payload: e.target.value })}
                />
              </InputWrapper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="surname" labelPlaceHolder="Surname">
                <TextField
                  name="surname"
                  value={getSurname(state)}
                  handleChange={(e) => dispatch({ type: SET_SURNAME, payload: e.target.value })}
                />
              </InputWrapper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="profession" labelPlaceHolder="Profession">
                <TextField
                  name="profession"
                  value={getProfession(state)}
                  handleChange={(e) => dispatch({ type: SET_PROFESSION, payload: e.target.value })}
                />
              </InputWrapper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="tel" labelPlaceHolder="Telephone number">
                <TextField
                  name="tel"
                  value={getMobile(state)}
                  handleChange={(e) => dispatch({ type: SET_MOBILE, payload: e.target.value })}
                />
              </InputWrapper>
            </Grid>

            <Grid item xs={12}>
              <InputWrapper label="email" labelPlaceHolder="Email">
                <TextField
                  name="email"
                  value={getEmail(state)}
                  handleChange={(e) => dispatch({ type: SET_EMAIL, payload: e.target.value })}
                />
              </InputWrapper>
            </Grid>

            <Grid item xs={12}>
              <InputWrapper label="address" labelPlaceHolder="Address">
                <TextField
                  name="address"
                  value={getAddress(state)}
                  handleChange={(e) => dispatch({ type: SET_ADDRESS, payload: e.target.value })}
                />
              </InputWrapper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="postal-code" labelPlaceHolder="Postal code">
                <TextField
                  name="postal-code"
                  value={getPostalCode(state)}
                  handleChange={(e) => dispatch({ type: SET_POSTALCODE, payload: e.target.value })}
                />
              </InputWrapper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="city" labelPlaceHolder="City">
                <TextField
                  name="city"
                  value={getCity(state)}
                  handleChange={(e) => dispatch({ type: SET_CITY, payload: e.target.value })}
                />
              </InputWrapper>
            </Grid>


            <Grid item xs={12}>
              <Collapse in={active}>
                <Grid container item spacing={2}>

                  <Grid item xs={12} sm={6}>
                    <InputWrapper label="linkedin" labelPlaceHolder="LinkedIn">
                      <TextField
                        name="linkedin"
                        value={getLinkedin(state)}
                        handleChange={(e) => dispatch({ type: SET_LINKEDIN, payload: e.target.value })}
                      />
                    </InputWrapper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputWrapper label="website" labelPlaceHolder="Website">
                      <TextField
                        name="website"
                        value={getWebsite(state)}
                        handleChange={(e) => dispatch({ type: SET_WEBSITE, payload: e.target.value })}
                      />
                    </InputWrapper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputWrapper label="license" labelPlaceHolder="Driver's license">
                      <TextField
                        name="license"
                        value={getLicense(state)}
                        handleChange={(e) => dispatch({ type: SET_LICENSE, payload: e.target.value })}
                      />
                    </InputWrapper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputWrapper label="nationality" labelPlaceHolder="Nationality">
                      <TextField
                        name="nationality"
                        value={getNationality(state)}
                        handleChange={(e) => dispatch({ type: SET_NATIONALITY, payload: e.target.value })}
                      />
                    </InputWrapper>
                  </Grid>

                </Grid>
              </Collapse>
            </Grid>

          </Grid>
        </Grid>

      </form>

      <FormFooter
        topDivider={true}
        bottomDivider={false}
      >
        <OutlinedButton
          value="Additional Information"
          startIcon={active ? <RemoveCircleOutlineRoundedIcon /> : <AddCircleOutlineRoundedIcon />}
          handleClick={() => setActive(!active)} />
      </FormFooter>
    </>
  );
}