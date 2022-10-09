import { Collapse } from '@mui/material';
import SectionHeader from 'common/components/layouts/layout-card/layout-card-section/section-header/section-header';
import FormFooter from 'common/components/molecules/form-footer/form-footer';
import { useState } from 'react';

interface TemplateInterface {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  footerButton: React.ReactNode;
  bottomDivider: boolean;
}

export default function TemplateSection({ children, title, icon, footerButton, bottomDivider }: TemplateInterface) {
  const [active, setActive] = useState<boolean>(true);

  return (
    <section>
      <SectionHeader icon={icon} title={title} handleClick={() => setActive(!active)} />

      <Collapse in={active}>

        {children}

        <FormFooter
          topDivider={false}
          bottomDivider={bottomDivider}>
          {footerButton}
        </FormFooter>

      </Collapse>
    </section>
  );
}
