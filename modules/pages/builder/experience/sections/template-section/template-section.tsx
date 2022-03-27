import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import FormFooter from '../../../../../../common/components/molecules/form-footer/form-footer';
import React, { cloneElement, useState } from 'react';
import { Collapse } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import SectionHeader from '../../sections-forms/section-header/section-header';
import SavedSection from '../../saved-section/saved-section';

interface TemplateInterface {
  type: string;
  title: string;
  icon: React.ReactNode;
  footerButton: string;
  bottomDivider: boolean;
  form: React.ReactElement;
}

export default function TemplateSection({ type, title, icon, footerButton, bottomDivider, form }: TemplateInterface) {
  const [active, setActive] = useState<boolean>(true);
  const [activeForm, setActiveForm] = useState(null);

  return (
    <section>
      <SectionHeader icon={icon} title={title} handleClick={() => setActive(!active)} />

      <Collapse in={active}>
        {/* 
        {state[type].map((element) => {
          if (element.id !== activeForm?.id) {
            return (
              <SavedSection
                key={type + element.id}
                title={element.title}
                description={(element.description ? element.description.slice(0, 30) + "..." : "")}
              />
            );
          }
          else if (element.id === activeForm?.id) {
            return (
              cloneElement(form, {
                key: type + element.id,
                form: activeForm
              })
            );
          }
        })} */}

        {cloneElement(form, {
          key: type,
          form: activeForm
        })}

        <FormFooter
          startIcon={<AddCircleOutlineRoundedIcon />}
          topDivider={false}
          bottomDivider={bottomDivider}
          fullWidth={true}>
          {footerButton}
        </FormFooter>

      </Collapse>
    </section>
  );
}
