import React from "react";
import style from "./style/ReferencesBlock.module.css";
export default function ReferencesBlock(props) {
  return (
    <div className={style.referencesBlock} key={props.i}>
      <h3>References</h3>
      {props.references}
    </div>
  );
}
