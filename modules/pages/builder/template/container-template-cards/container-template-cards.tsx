import RioTemplate from "@modules/cv-templates/templates/rio-template/rio-template";
import { RioTemplateThemes } from "@modules/cv-templates/templates/rio-template/rio-template-themes";
import { useAppSelector } from "@state/hooks";
import { useState } from "react";
import TemplateCard from "../template-card/template-card";
import styles from "./container-template-cards.module.css";

function ContainerTemplateCards() {
  const [selected, setSelected] = useState("Rio");

  const state = useAppSelector(state => state.builder);

  return (
    <div className={styles.container}>
      <TemplateCard
        id="Rio"
        title="Rio"
        document={<RioTemplate state={state} />}
        listThemes={RioTemplateThemes}
        selected={selected}
        setSelected={setSelected} />
    </div>
  );
}

export default ContainerTemplateCards;