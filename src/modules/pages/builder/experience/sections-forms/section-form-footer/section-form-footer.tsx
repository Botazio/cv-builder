import SpaceDivider from "common/components/atoms/dividers/space-divider/space-divider";
import { IterativeExperienceSections } from "../../experience-sections.enum";
import styles from "./section-form-footer.module.css";
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Grid } from "@mui/material";
import SectionButton from "common/components/atoms/buttons/section-button/section-button";
import { DELETE_FORM, SAVE_FORM } from "../../experience.actions";
import { useAppDispatch } from "state/hooks";


/**
 * Footer for the section forms
 */
export default function SectionFormFooter({ formID, section }: { formID: string, section: IterativeExperienceSections; }) {

  const dispatch = useAppDispatch();

  return (
    <>
      <SpaceDivider />
      <div className={styles.container}>
        <Grid container spacing={2} direction="row-reverse">
          <Grid item xs={12} sm={3}>
            <SectionButton
              value="Save"
              startIcon={<SaveRoundedIcon />}
              type="primary"
              handleClick={() => dispatch({ type: SAVE_FORM, section: section })} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <SectionButton
              value="Delete"
              startIcon={<DeleteRoundedIcon />}
              type="secondary"
              handleClick={() => dispatch({ type: DELETE_FORM, payload: formID, section: section })} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
