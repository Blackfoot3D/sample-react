import React from "react";
import style from "../components/style/ModelDescriptionBox.module.css";
import Accordion from "./Accordion";

/****************************************************************
 * ModelDescriptionBox functional component. Contains the
 * artifact description information. Essentially acts as a
 * container for an accordion
 */
export default function ModelDescriptionBox(props) {
  return (
    <div className={style.container}>
      <div className="initialDescription accordion__text">
        <p>{props.currentModel.description[0].initialDescription}</p>
      </div>
      <Accordion
        items={props.currentModel.description.slice(1)}
        categories={props.categories}
        setCategory={props.setCategory}
        currentCategory={props.currentCategory}
        toggle={props.toggle}
      />
    </div>
  );
}
