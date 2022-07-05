import { useEffect, useState } from "react";
import styles from './hero.module.css';
import cn from 'classnames';
import SubmitButton from "common/components/atoms/buttons/submit-button/submit-button";
import { Link } from "react-router-dom";


/**
 * Display the hero section of the home page. 
 */
export default function Hero() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(active => active + 1);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (active > 3) {
      setActive(1);
    }
  }, [active]);

  return (
    <div className={styles.container}>
      <div>
        <h2>
          Beautiful resumes in minutes!<br />
          Completely free and open source<br />
        </h2>
        <Link to="/builder/personal">
          <SubmitButton value="Start Building" />
        </Link>
      </div>
      <div className={styles.container_glowing_items}>
        <GlowingTitle title="Build" isActive={active === 1} />
        <GlowingTitle title="Free" isActive={active === 2} />
        <GlowingTitle title="CVs" isActive={active === 3} />
      </div>
    </div>
  );
}

function GlowingTitle({ title, isActive }: { title: string, isActive: boolean; }) {
  return (
    <h1 className={cn({ [styles.glowing]: isActive === true })}>
      {title}
    </h1>
  );
}


