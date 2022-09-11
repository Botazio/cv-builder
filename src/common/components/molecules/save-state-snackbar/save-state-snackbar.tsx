import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SnackBar from "common/components/atoms/snackbar/snackbar";
import { useState } from "react";

export default function SaveStateSnackBar() {
  const [active, setActive] = useState<boolean>();

  return (
    <SnackBar
      startIcon={<CheckRoundedIcon />}
      value="Your information has been correctly saved"
      active={true}
      setActive={setActive} />
  );
}
