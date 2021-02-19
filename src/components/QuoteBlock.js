import React from "react";
import style from "./style/QuoteBlock.module.css";

/************************************************************************
 * Helper Function used to render "quote" type content blocks.
 * Returns: A block of quote markup based on the object argument.
 ************************************************************************/
export default function QuoteBlock(props) {
  return (
    <div className={style.quoteBlock} key={props.i}>
      <div style={{ left: "0" }} className={style.quotationMarks}>
        <div className={[style.qMark, style.q1].join(" ")}></div>
        <div className={[style.qMark, style.q2].join(" ")}></div>
      </div>
      <div className={style.innerQuote}>{props.quote}</div>
      <div
        className={style.quotationMarks}
        style={{ right: "0", transform: "rotateY(180deg)" }}>
        <div className={[style.qMark, style.q1].join(" ")}></div>
        <div className={[style.qMark, style.q2].join(" ")}></div>
      </div>
      <h4>{props.person}</h4>
    </div>
  );
}
