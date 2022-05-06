import TorontoTemplate from "@modules/cv-templates/templates/toronto-template";
import { useAppSelector } from "@state/hooks";
import { useState } from "react";
import TemplateCard from "../template-card/template-card";
import styles from "./container-template-cards.module.css";

function ContainerTemplateCards() {
  const [selected, setSelected] = useState("Toronto");

  const state = useAppSelector(state => state.builder);

  return (
    <div className={styles.container}>
      <TemplateCard id="Toronto" title="Toronto" document={<TorontoTemplate state={state} />} selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default ContainerTemplateCards;