import React from "react";
import style from "./style/TextBlock.module.css";
import TranslationButton from "./TranslationButton";

/***************************************************************
 * Function used to conditionally render the TextBlock type
 * content for story pages. Checks to see if the blackfoot
 * translation, and Audio pronounciation files exist to render.
 * Arguments: props (given to the component)
 * Returns: markup for the TextBlock component.
 ***************************************************************/
function renderTitle(props) {
  if (props.titleBlackfoot !== undefined) {
    return (
      // <div className={style.titleContainer}>
      <h3>
        <span>{props.titleBlackfoot}</span>{" "}
        <span className={style.subTitle}>{props.title}</span>
        {props.translationAudio !== undefined ? (
          <span className={style.translationButtonBox}>
            <TranslationButton
              audio={props.translationAudio}
              size={36.25}
              id={props.currentModel.id}
              section={props.section}
              title={props.title}
              direction={"right"}
            />
          </span>
        ) : (
          <></>
        )}
      </h3>
      // <span className={style.translationButtonBox}>Hello</span>
      /* </div> */
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
 * Function used to render "text" type content blocks.
 * Arguments:
 * Returns: A block of text markup based on the object argument.
 ************************************************************************/
export default function TextBlock(props) {
  return (
    <div className={style.textBlock} key={props.i}>
      {/* Use helper function to determine which title format to use */}
      {renderTitle(props)}
      {/* If there is no title, of the first section, special css is
  applied to give the textBlock a drop-caps style */}
      {props.title !== undefined || props.i === 1 ? (
        props.description
      ) : (
        <div className={style.tbNoTitle}>{props.description}</div>
      )}
    </div>
  );
}
