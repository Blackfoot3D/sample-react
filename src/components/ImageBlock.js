import React from "react";
import style from "./style/ImageBlock.module.css";
export default function ImageBlock(props) {
  return (
    <div className={style.imageBlock} key={props.i}>
      {props.description !== null && props.description !== undefined && (
        <div className={style.imageDescription}>
          <div className={style.descriptionInner}>
            {props.description}
            <div className={style.imageDivider}></div>
          </div>
        </div>
      )}
      <div className={style.imageBox}>
        <img loading="lazy" src={props.url} alt={props.title}></img>
      </div>
    </div>
  );
}
