import RioTemplate from "@modules/cv-templates/templates/rio-template/rio-template";
import { TemplateNames } from "@modules/cv-templates/templates/template-names.enum";
import { useAppSelector } from "@state/hooks";
import TemplateCard from "../template-card/template-card";
import { getTemplateActiveTheme } from "../template.reducer";
import styles from "./container-template-cards.module.css";

function ContainerTemplateCards() {

  const state = useAppSelector(state => state.builder);

  console.log('hello');

  return (
    <div className={styles.container}>
      <TemplateCard
        id={TemplateNames.RIO_TEMPLATE}
        title="Rio"
        document={<RioTemplate state={state} theme={getTemplateActiveTheme(state, TemplateNames.RIO_TEMPLATE)} />}
      />
    </div>
  );
}

export default ContainerTemplateCards;