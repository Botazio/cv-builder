import SpaceDivider from "common/components/atoms/dividers/space-divider/space-divider";
import LayoutCard from "common/components/layouts/layout-card/layout-card";
import LayoutCardBody from "common/components/layouts/layout-card/layout-card-body/layout-card-body";
import LayoutCardHeader from "common/components/layouts/layout-card/layout-card-header/layout-card-header";

export default function PrivacyCookiesPolicyPage() {
  return (
    <LayoutCard header={
      <>
        <SpaceDivider variant="large" />
        <LayoutCardHeader title="Privacy & cookies policy" />
      </>
    }>

      <LayoutCardBody>
        <p>hello</p>
      </LayoutCardBody>

    </LayoutCard>
  );
}
