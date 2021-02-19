import React from "react";
import style from "./style/RadioItem.module.css";

export default function RadioItem(props) {
  function onChangeValue(event) {
    props.setCategory(event.target.value);
  }

  return (
    <div className={style.container}>
      <input
        type="radio"
        value={props.item}
        name="category"
        // key={i}
        id={props.item}
        label={props.item}
        onChange={onChangeValue}
        checked={props.currentCategory === props.item}
      />
      <label htmlFor={props.item}>{props.item}</label>
    </div>
  );
}
