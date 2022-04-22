import { LondonTemplate } from "@modules/cv-templates/london-template/london-template";
import { useState } from "react";
import TemplateCard from "../template-card/template-card";
import styles from "./container-template-cards.module.css";

function ContainerTemplateCards() {
  const [selected, setSelected] = useState("London");

  return (
    <div className={styles.container}>
      <TemplateCard id="London" title="London" document={LondonTemplate()} selected={selected} setSelected={setSelected} />
      <TemplateCard id="London" title="London" document={LondonTemplate()} selected={selected} setSelected={setSelected} />
      <TemplateCard id="London" title="London" document={LondonTemplate()} selected={selected} setSelected={setSelected} />
      <TemplateCard id="London" title="London" document={LondonTemplate()} selected={selected} setSelected={setSelected} />
      <TemplateCard id="London" title="London" document={LondonTemplate()} selected={selected} setSelected={setSelected} />
      <TemplateCard id="London" title="London" document={LondonTemplate()} selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default ContainerTemplateCards;