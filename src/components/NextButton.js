import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style/NextButton.module.css";
export default function nextButton(props) {
  function next(loc) {
    console.log("clicked nav", loc);
    if (loc !== "intro") {
      document
        .getElementById(`${props.currentModel.id}_${loc}`)
        .scrollIntoView({ block: "start", inline: "nearest" });
    }
    props.setActiveRoute(loc);
  }
  console.log("NEXT", props.to.toLowerCase());
  return (
    <NavLink
      to={`/objects/${props.currentModel.id}/${props.to.toLowerCase()}`}
      onClick={() => next(props.to.toLowerCase())}>
      <button className={style.buttonStyle}>
        <div className={[style.title, props.style].join(" ")}>{props.to}</div>
        <div className={style.arrow}></div>
      </button>
    </NavLink>
  );
}
