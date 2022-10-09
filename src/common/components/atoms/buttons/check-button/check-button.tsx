import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Checkbox } from '@mui/material';
import styles from './check-button.module.css';

/**
 * Shows a check icon when active. Empty circle when inactive.
 */
export default function CheckButton({ checked }: { checked: boolean; }) {

  return (
    <Checkbox
      sx={{ margin: "0px", padding: "0px" }}
      checked={checked}
      icon={<CircleOutlinedIcon className={styles.outline} sx={{ fontSize: "28px" }} />}
      checkedIcon={<CheckCircleRoundedIcon className={styles.filled} sx={{ fontSize: "28px" }} />} />
  );
}