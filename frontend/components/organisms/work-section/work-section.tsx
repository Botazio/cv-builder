import SectionHeader from '../../atoms/section-header/section-header';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import WorkSectionForm from '../../molecules/work-section-form/work-section-form';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import FormFooter from '../../molecules/form-footer/form-footer';
import SavedSection from '../../molecules/saved-section/saved-section';
import { useState } from 'react';
import { Collapse } from '@mui/material';

export default function WorkSection() {
  const [active, setActive] = useState(true);

  return (
    <section>
      <SectionHeader icon={<WorkOutlineRoundedIcon />} title="Work Experience" handleClick={() => setActive(!active)} />

      <Collapse in={active}>
        <SavedSection title={"Software engineer"} description="The best" />
        <WorkSectionForm />
        <FormFooter startIcon={<AddCircleOutlineRoundedIcon />} divider={false} fullWidth={true} >
          Add another work experience
        </FormFooter>
      </Collapse>
    </section>
  );
}
