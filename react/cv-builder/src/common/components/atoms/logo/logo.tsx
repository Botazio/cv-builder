import { Link } from 'react-router-dom';
import styles from './logo.module.css';
import { ReactComponent as AppLogo } from './logo.svg';

/**
  * Logo for the web app.
  */
export default function Logo() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <AppLogo height={45} width={200} />
      </Link>
    </div>
  );
}
