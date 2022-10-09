import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SubmitButton from 'common/components/atoms/buttons/submit-button/submit-button';
import Dialog from "common/components/atoms/dialog/dialog";
import SpaceDivider from 'common/components/atoms/dividers/space-divider/space-divider';
import { SET_CONDITIONS } from 'modules/pages/legal/legal.actions';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from 'state/hooks';
import styles from './conditions-dialog.module.css';

/**
 * Dialog that shows the conditions of the website when the user first visits it.
 * Conditions need to be accepted before the user can continue.
 */
export default function ConditionsDialog() {
  const [active, setActive] = useState<boolean>();

  const state = useAppSelector(state => state.legal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setActive(!state.areConditionsAccepted);
  }, [state.areConditionsAccepted]);


  return (
    <Dialog active={active} setActive={setActive} type="secondary" closeOnOutsideClick={false}>
      <div className={styles.container}>
        <h2>App conditions</h2>
        <SpaceDivider />
        <div>
          <p>
            Before using this application, the following condition need to be accepted:
          </p>
          <ul>
            <li>I accept this application to store a cookie in my browser to persist the form data.</li>
          </ul>
          <p>
            For more information, check the <Link to="/legal/privacy-cookies-policy">Privacy & cookies policy</Link>.
          </p>
        </div>
        <SpaceDivider />
        <SubmitButton
          startIcon={<CheckRoundedIcon />}
          value="Accept"
          handleClick={() => dispatch({ type: SET_CONDITIONS, payload: true })} />
      </div>
    </Dialog>
  );
}
