import RioTemplate from "modules/cv-templates/templates/rio-template/rio-template";
import { TemplateNames } from "modules/cv-templates/templates/template-names.enum";
import TorontoTemplate from "modules/cv-templates/templates/toronto-template/toronto-template";
import { useEffect, useState } from "react";
import { useAppSelector } from "state/hooks";
import { Builder } from "../../builder.reducer";
import TemplateCard from "../template-card/template-card";
import { SAMPLE_STATE } from "../template-utils";
import { getTemplateActiveTheme } from "../template.reducer";
import styles from "./container-template-cards.module.css";

function ContainerTemplateCards() {
  const [activeState, setActiveState] = useState<Builder>(SAMPLE_STATE);

  const builderState = useAppSelector(state => state.builder);
  const displaySampleState = useAppSelector(state => state.display.displaySampleDataInTemplates);

  useEffect(() => {
    if (displaySampleState) {
      setActiveState(SAMPLE_STATE);
    } else {
      setActiveState(builderState);
    }
  }, [builderState, displaySampleState]);


  return (
    <div className={styles.container}>
      <TemplateCard
        id={TemplateNames.RIO_TEMPLATE}
        title="Rio"
        document={<RioTemplate state={activeState} theme={getTemplateActiveTheme(builderState, TemplateNames.RIO_TEMPLATE)} />}
      />
      <TemplateCard
        id={TemplateNames.TORONTO_TEMPLATE}
        title="Toronto"
        document={<TorontoTemplate state={activeState} theme={getTemplateActiveTheme(builderState, TemplateNames.TORONTO_TEMPLATE)} />}
      />
    </div>
  );
}

export default ContainerTemplateCards;