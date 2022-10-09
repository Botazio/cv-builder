import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import RequiredFieldsValidator from 'common/components/molecules/required-fields-validator/required-fields-validator';
import SaveStateLink from 'common/components/molecules/save-state/save-state-link/save-state-link';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './progress-bar.module.css';
import SwitchLight from './switch-light/switch-light';

/**
  * Defines the progress made by the user to build his cv. 
  * It defines in which step the user is.
  */
export default function ProgressBar() {
  const [active, setActive] = useState<string>();
  const url: string = useLocation().pathname;

  useEffect(() => {
    setActive(url);
  }, [url]);

  return (
    <div className={styles.container}>
      <SaveStateLink to="/builder/personal">
        <SwitchLight isActive={active === "/builder/personal"} title="Personal">
          <PersonRoundedIcon fontSize="medium" />
        </SwitchLight>
      </SaveStateLink>

      <RequiredFieldsValidator>
        <SaveStateLink to="/builder/experience">
          <SwitchLight isActive={active === "/builder/experience"} title="Experience">
            <WorkRoundedIcon fontSize="medium" />
          </SwitchLight>
        </SaveStateLink>
      </RequiredFieldsValidator>


      <RequiredFieldsValidator>
        <SaveStateLink to="/builder/template">
          <SwitchLight isActive={active === "/builder/template"} title="Template">
            <CreateRoundedIcon fontSize="medium" />
          </SwitchLight>
        </SaveStateLink>
      </RequiredFieldsValidator>
    </div>
  );
}
