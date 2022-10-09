import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import { Collapse, Grid } from '@mui/material';
import OutlinedButton from 'common/components/atoms/buttons/outlined-button/outlined-button';
import InputWrapper from 'common/components/atoms/inputs/input-wrapper/input-wrapper';
import TextField from 'common/components/atoms/inputs/text-field/text-field';
import FormFooter from 'common/components/molecules/form-footer/form-footer';
import PhotoField from 'modules/pages/builder/personal/photo-field/photo-field';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { SET_FORM_FIELD } from '../personal.actions';
import styles from './personal-form.module.css';

/**
  * Form for the page personal. That page is the first page of the cv builder.
  * The form asks the user to enter personal information.
  */
export default function PersonalForm() {
  const [active, setActive] = useState(false);

  const state = useAppSelector(state => state.builder);
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
              <InputWrapper label="name" labelPlaceHolder="Name*">
                <TextField
                  name="name"
                  value={state.personal.name.value}
                  required={state.personal.name.isRequired}
                  error={state.display.displayRequiredFieldsError}
                  handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "name" })}
                />
              </InputWrapper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="surname" labelPlaceHolder="Surname*">
                <TextField
                  name="surname"
                  value={state.personal.surname.value}
                  required={state.personal.surname.isRequired}
                  error={state.display.displayRequiredFieldsError}
                  handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "surname" })}
                />
              </InputWrapper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="profession" labelPlaceHolder="Profession*">
                <TextField
                  name="profession"
                  value={state.personal.profession.value}
                  required={state.personal.profession.isRequired}
                  error={state.display.displayRequiredFieldsError}
                  handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "profession" })}
                />
              </InputWrapper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputWrapper label="tel" labelPlaceHolder="Telephone number">
                <TextField
                  name="tel"
                  value={state.personal.mobile.value}
                  required={state.personal.mobile.isRequired}
                  error={state.display.displayRequiredFieldsError}
                  handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "mobile" })}
                />
              </InputWrapper>
            </Grid>

            <Grid item xs={12}>
              <InputWrapper label="email" labelPlaceHolder="Email">
                <TextField
                  name="email"
                  value={state.personal.email.value}
                  required={state.personal.email.isRequired}
                  error={state.display.displayRequiredFieldsError}
                  handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "email" })}
                />
              </InputWrapper>
            </Grid>

            <Grid item xs={12}>
              <InputWrapper label="address" labelPlaceHolder="Address">
                <TextField
                  name="address"
                  value={state.personal.address.value}
                  required={state.personal.address.isRequired}
                  error={state.display.displayRequiredFieldsError}
                  handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "address" })}
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
                        value={state.personal.linkedin.value}
                        required={state.personal.linkedin.isRequired}
                        error={state.display.displayRequiredFieldsError}
                        handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "linkedin" })}
                      />
                    </InputWrapper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputWrapper label="website" labelPlaceHolder="Website">
                      <TextField
                        name="website"
                        value={state.personal.website.value}
                        required={state.personal.website.isRequired}
                        error={state.display.displayRequiredFieldsError}
                        handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "website" })}
                      />
                    </InputWrapper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputWrapper label="license" labelPlaceHolder="Driver's license">
                      <TextField
                        name="license"
                        value={state.personal.license.value}
                        required={state.personal.license.isRequired}
                        error={state.display.displayRequiredFieldsError}
                        handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "license" })}
                      />
                    </InputWrapper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputWrapper label="nationality" labelPlaceHolder="Nationality">
                      <TextField
                        name="nationality"
                        value={state.personal.nationality.value}
                        required={state.personal.nationality.isRequired}
                        error={state.display.displayRequiredFieldsError}
                        handleChange={(e) => dispatch({ type: SET_FORM_FIELD, payload: e.target.value, field: "nationality" })}
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
          value="Additional information"
          startIcon={active ? <RemoveCircleOutlineRoundedIcon /> : <AddCircleOutlineRoundedIcon />}
          handleClick={() => setActive(!active)} />
      </FormFooter>
    </>
  );
}