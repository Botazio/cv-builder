import { Link, LinkProps } from "react-router-dom";


export const BUILDER_LOCATION_STATE = "builder";

/**
 * Wrapper around the Link component from react-router-dom.
 * It adds the state prop to the Link component which can be read using the useLocation hook to indicate state has been saved.
 * Only use this component when you are swiching between one of the builder pages.
 */
export default function BuilderLink(props: LinkProps) {
  return (
    <Link {...props} state={BUILDER_LOCATION_STATE} />
  );
}
