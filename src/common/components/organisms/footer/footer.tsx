import Logo from '../../atoms/logo/logo';
import styles from './footer.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

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
        <LinkedInIcon fontSize="large" />
        <GitHubIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
      </div>

      <p>Privacy and cookies policy</p>
    </footer>
  );
}