import React from "react";
import style from "./style/StoryBlock.module.css";

function renderTitle(props) {
  if (props.titleBlackfoot !== undefined) {
    return (
      <h3>
        <span>{props.titleBlackfoot}</span>{" "}
        <span className={style.subTitle}>{props.title}</span>
      </h3>
    );
  } else if (props.title !== undefined) {
    return (
      <h3>
        <span>{props.title}</span>
      </h3>
    );
  } else {
    return <></>;
  }
}

/************************************************************************
 * Function used to render "story" type content blocks.
 * Returns: A block of story markup based on the object argument.
 ************************************************************************/
export default function StoryBlock(props) {
  return (
    <div className={style.textBlock} key={props.i}>
      {/*Incase the content section has no title, check to see if it needs to be rendered. */}
      {/* {props.title !== undefined ? <h3>{`${props.title}`}</h3> : <></>} */}
      {renderTitle(props)}
      {/* If there is no title, of the first section, special css is
        applied to give the textBlock a drop-caps style */}
      {props.title !== undefined || props.i === 1 ? (
        <p>{`${props.description}`}</p>
      ) : (
        <p className={style.tbNoTitle}>{`${props.description}`}</p>
      )}
      <p>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer">{`${props.author}`}</a>
      </p>
    </div>
  );
}
