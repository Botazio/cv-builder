import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import Logo from '../../atoms/logo/logo';
import styles from './footer.module.css';

/**
  * Footer for the application.
  */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/williamhgates">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://github.com/Botazio">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="https://twitter.com/Botaz_io">
          <TwitterIcon fontSize="large" />
        </a>
      </div>

      <Link to="/legal/privacy-cookies-policy">
        Privacy & Cookies Policy
      </Link>
    </footer>
  );
}