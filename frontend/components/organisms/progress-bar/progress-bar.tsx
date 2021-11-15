import React, { useEffect, useState } from 'react';
import styles from './progress-bar.module.css';
import SwitchLight from '../../atoms/switch-light/switch-light';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

/**
  * This component defines the progress made by the user to build his cv. 
  * It defines in which step the user is.
  */
export default function ProgressBar() {
  const [active, setActive] = useState<string>();
  const url: string = useRouter().pathname;

  useEffect(() => {
    setActive(url);
  }, [url]);

  return (
    <div className={styles.container}>
      <Link href="/builder/personal">
        <a>
          <SwitchLight isActive={active === "/builder/personal"} title="Personal">
            <PersonRoundedIcon fontSize="medium" />
          </SwitchLight>
        </a>
      </Link>

      <Link href="/builder/experience">
        <a>
          <SwitchLight isActive={active === "/builder/experience"} title="Experience">
            <WorkRoundedIcon fontSize="medium" />
          </SwitchLight>
        </a>
      </Link>


      <Link href="/builder/template">
        <a>
          <SwitchLight isActive={active === "/builder/template"} title="Template">
            <CreateRoundedIcon fontSize="medium" />
          </SwitchLight>
        </a>
      </Link>
    </div>
  );
}
