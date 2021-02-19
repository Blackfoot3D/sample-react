import React from "react";
import style from "../style/NavBox.module.css";
import { Link } from "react-router-dom";
/*******************************************************************
 * NavBox Functional Component is used to render one of the
 * navigational circular buttons. Props are passed to control the
 * navigation Link, style, and location of the button
 *******************************************************************/
export default function NavBox(props) {
  if (props.link) {
    return (
      <div style={props.style} className={style.homeParent}>
        {/* Link to the destination specified in the props. Always use the same style of button.*/}
        <Link to={props.link} className={style.linkStyle}>
          <button
            className={style.homeButton}
            style={props.buttonStyle}
            onClick={props.onClick}></button>
        </Link>
      </div>
    );
  } else if (props.href) {
    return (
      <div style={props.style}>
        {/* Link to the destination specified in the props. Always use the same style of button.*/}
        <a href="/">
          <button
            className={style.buttonStyle}
            style={props.buttonStyle}
            onClick={props.onClick}>
            {props.id}
          </button>
        </a>
      </div>
    );
  } else {
    return (
      <div style={props.style}>
        {/* Link to the destination specified in the props. Always use the same style of button.*/}
        {/* <Link to={props.link} className={style.linkStyle}> */}
        <button
          className={style.buttonStyle}
          style={props.buttonStyle}
          onClick={props.onClick}>
          {props.id}
        </button>
        {/* </Link> */}
      </div>
    );
  }
}
