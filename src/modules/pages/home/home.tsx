import LayoutDefault from "common/components/layouts/layout-default/layout-default";
import CollaborationPanel from "./collaboration-panel/collaboration-panel";
import ExamplesPanel from "./examples-panel/examples-panel";
import Hero from "./hero/hero";

/**
 *  Home page of the application.
 */
export default function Home() {
  return (
    <LayoutDefault>
      <Hero />
      <ExamplesPanel />
      <CollaborationPanel />
    </LayoutDefault>
  );
}
