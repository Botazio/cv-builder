import React, { useEffect, useState } from 'react';
import styles from './progress-bar.module.css';
import SwitchLight from './switch-light/switch-light';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { Link, useLocation } from 'react-router-dom';

/**
  * This component defines the progress made by the user to build his cv. 
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
      <Link to="/builder/personal">
        <SwitchLight isActive={active === "/builder/personal"} title="Personal">
          <PersonRoundedIcon fontSize="medium" />
        </SwitchLight>
      </Link>

      <Link to="/builder/experience">
        <SwitchLight isActive={active === "/builder/experience"} title="Experience">
          <WorkRoundedIcon fontSize="medium" />
        </SwitchLight>
      </Link>


      <Link to="/builder/template">
        <SwitchLight isActive={active === "/builder/template"} title="Template">
          <CreateRoundedIcon fontSize="medium" />
        </SwitchLight>
      </Link>
    </div>
  );
}
