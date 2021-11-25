import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useForm } from "../../../providers/form-provider";

export default function PrivateRoute({ children }) {
  const [active, setActive] = useState(false);
  const { validateForm } = useForm();

  const router = useRouter();

  useEffect(() => {
    if (validateForm()) {
      router.push('/builder/personal');
      setActive(false);
    }
    else {
      setActive(true);
    }
  }, []);

  if (!active) return <div></div>;

  return (
    <>
      {children}
    </>
  );
}