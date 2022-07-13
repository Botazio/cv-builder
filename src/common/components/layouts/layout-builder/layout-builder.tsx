import SpaceDivider from '../../atoms/dividers/space-divider/space-divider';
import ProgressBar from '../../organisms/progress-bar/progress-bar';
import LayoutCard from '../layout-card/layout-card';

/**
  * Layout shared by all the pages that are part of the builder.
  */
export default function LayoutBuilder({ header, children }: { header?: React.ReactNode, children?: React.ReactNode; }) {
  return (
    <LayoutCard
      header={
        <>
          <SpaceDivider />
          <ProgressBar />
          <SpaceDivider />
          {header}
        </>
      }>
      {children}
    </LayoutCard>
  );
}