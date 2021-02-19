import React from "react";
import style from "./style/ActiveModel.module.css";
// import "@google/model-viewer/dist/model-viewer";
import { Link } from "react-router-dom";
/**************************************************
 * ActiveModel Functional Component. Renders a
 * model viewer containing the App's currently
 * displayed model.
 **************************************************/
export default function ActiveModel(props) {
  console.log("Active Model: ", props);
  return (
    <div className={style.activeModelContainer} style={props.style}>
      <Link to={`/objects/${props.currentModel.id}/intro`}>
        <div className={style.modelBox}>
          <img
            id={`${props.activeModel}_turntable`}
            src={props.currentModel.Model.icon}
            alt={`A Blackfoot ${props.currentModel.name}`}></img>
        </div>
        {/* <Link to={`/objects/${props.currentModel.id}/intro`}> */}
        <div
          style={{
            width: "45vw",
            height: "45vw",
            // border: "1px solid purple",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "50%",
          }}>
          <div className={style.titleContainer}>
            <h1>{props.currentModel.translation}</h1>
            <h2>{props.currentModel.name}</h2>
            <button className={style.viewButton}>View</button>
          </div>
        </div>
        {/* </Link> */}
      </Link>
    </div>
  );
}
