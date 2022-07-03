import RioTemplate from "@modules/cv-templates/templates/rio-template/rio-template";
import { TemplateNames } from "@modules/cv-templates/templates/template-names.enum";
import TorontoTemplate from "@modules/cv-templates/templates/toronto-template/toronto-template";
import { useAppSelector } from "@state/hooks";
import TemplateCard from "../template-card/template-card";
import { getTemplateActiveTheme } from "../template.reducer";
import styles from "./container-template-cards.module.css";

function ContainerTemplateCards() {

  const state = useAppSelector(state => state.builder);

  return (
    <div className={styles.container}>
      <TemplateCard
        id={TemplateNames.RIO_TEMPLATE}
        title="Rio"
        document={<RioTemplate state={state} theme={getTemplateActiveTheme(state, TemplateNames.RIO_TEMPLATE)} />}
      />
      <TemplateCard
        id={TemplateNames.TORONTO_TEMPLATE}
        title="Toronto"
        document={<TorontoTemplate state={state} theme={getTemplateActiveTheme(state, TemplateNames.TORONTO_TEMPLATE)} />}
      />
    </div>
  );
}

export default ContainerTemplateCards;