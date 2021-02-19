import React from "react";
import style from "../style/Header.module.css";
import { Link } from "react-router-dom";
import RTIViewer from "../RTIViewer";
/*******************************************************
 * Header functiona component. Rendered in app.js no
 * matter the view. Used for navigation.
 */
export default function RTIParent(props) {
  console.log("Rendering Header");
  return (
    <div>
        <RTIViewer currentModel={props.currentModel}></RTIViewer>
    </div>
  );
}
