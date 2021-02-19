import React, { PureComponent, Suspense } from "react";
import style from "./style/ModelUniverseIcon.module.css";
// import ActiveModelUniverse from "./ActiveModelUniverse";
const ActiveModelUniverse = React.lazy(() => import("./ActiveModelUniverse"));
export default class ModelIcon extends PureComponent {
  /***********************************************************
   * Functions used to control the style of the Model Icon
   * image.
   ***********************************************************/
  getStyle = () => {
    var active = this.props.checkModelActive(
      this.props.obj,
      this.props.activeArtifacts
    );
    // var active = true;
    return {
      backgroundImage: `url(${this.props.obj.Model.icon})`,
      height:
        active === true
          ? `${this.props.size * 0.7}px`
          : `${this.props.size * 0.525}px`,
      width:
        active === true
          ? `${this.props.size * 0.7}px`
          : `${this.props.size * 0.525}px`,
      // border: active === true ? "3px solid red" : "none",
      filter:
        this.props.currentCategory === "All Content" || active === true
          ? `opacity(1) blur(${this.props.blur * 20}px) `
          : `opacity(0.5) blur(${this.props.blur * 20}px)`,

      opacity: this.props.obj.id === this.props.currentModel.id ? "0%" : "100%",
      visibility:
        this.props.obj.id === this.props.currentModel.id ? "hidden" : "visible",
    };
  };

  getBlur = () => {};
  /***********************************************************
   * Function used to control the style of the parent div.
   ***********************************************************/
  getOuterStyle = () => {
    return {
      transform: ` rotateX(-90deg) rotateY(${this.props.angle}deg) rotateZ(10deg) `,
      // filter: `blur(1px)`,
      pointerEvents:
        this.props.obj.id === this.props.currentModel.id ? "auto" : "none",
    };
  };

  /***********************************************************
   * Function used to control the style of the
   * ActiveModelUniverse component, which is a child of
   * ModelUniverseIcon.
   ***********************************************************/
  getModelStyle = () => {
    return {
      animationFillMode: "forwards",
      animation: `${style.show} 1s linear`,
      display:
        this.props.obj.id === this.props.currentModel.id ? "block" : "none",
    };
  };

  render() {
    return (
      <div className={style.field} style={this.getOuterStyle()}>
        {/*Div for each of the inactive models around the Universe view. */}
        <div style={this.getStyle()} className={style.icon}></div>
        <Suspense fallback={<div></div>}>
          <ActiveModelUniverse
            currentModel={this.props.currentModel}
            style={this.getModelStyle()}
            activeModel={this.props.obj.id}
          />
        </Suspense>
      </div>
    );
  }
}
