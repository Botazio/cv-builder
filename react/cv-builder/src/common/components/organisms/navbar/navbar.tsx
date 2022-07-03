import Logo from '../../atoms/logo/logo';
import styles from './navbar.module.css';

/**
  * Navigation bar for the application.
  */
export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
      </div>
    </header>
  );
}

