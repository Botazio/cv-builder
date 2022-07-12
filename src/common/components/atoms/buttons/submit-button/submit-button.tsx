import { ButtonInterface } from '../button-interface';
import FilledButton from '../filled-button/filled-button';
import styles from './submit-button.module.css';

/**
 * 
 * Button used to navigate to the next section.
 */
export default function SubmitButton(props: ButtonInterface) {

  return (
    <div className={styles.container}>
      <FilledButton {...props} />
    </div>
  );
}
