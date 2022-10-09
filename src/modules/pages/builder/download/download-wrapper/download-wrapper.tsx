import useAreRequiredFieldsPopulated from "../../personal/personal-utils";

/**
 * Wrapper around the download page that groups the functionality of multiple components and hooks in one.
 * This functionality includes:
 * - Redirecting to the personal page if the required fields are not populated
 */
export default function DownloadWrapper({ children }: { children: React.ReactNode; }) {
  useAreRequiredFieldsPopulated();

  return (
    <>
      {children}
    </>
  );
}
