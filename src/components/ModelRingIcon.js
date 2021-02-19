import React, { Component, Suspense } from "react";
import style from "./style/ModelRingIcon.module.css";
import ActiveModel from "./ActiveModel";
import { Link } from "react-router-dom";
// import Image from "../models/Knife/Knife.png";
export default class ModelIcon extends Component {
  onClick = (e) => {
    this.props.setActiveModel(this.props.obj);
  };

  handleMouseHover = () => {
    if (this.props.hoverable) {
      this.props.mouseHover(this.props.obj);
    }
  };

  // getOuterStyle = () => {
  //   return {
  //     //gridColumn: this.props.home ? "4 / span 6" : "6 / span 6",
  //     backgroundImage: `url(${this.props.obj.Model.icon})`,
  //     // background: "darkGrey",
  //     height: this.props.obj.categories.includes(this.props.currentCategory)
  //       ? `${this.props.size}px`
  //       : `${this.props.size * 0.6}px`,
  //     width: this.props.obj.categories.includes(this.props.currentCategory)
  //       ? `${this.props.size}px`
  //       : `${this.props.size * 0.6}px`,
  //     transform: `rotateZ(${this.props.angle * -1}deg)`,
  //   };
  // };

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
          ? `opacity(1) `
          : `opacity(0.5)`,

      opacity: this.props.obj.id === this.props.currentModel.id ? "0%" : "100%",
      visibility:
        this.props.obj.id === this.props.currentModel.id ? "hidden" : "visible",
    };
  };
  getOuterStyle = () => {
    var active = this.props.checkModelActive(
      this.props.obj,
      this.props.activeArtifacts
    );
    // var active = true;
    return {
      transform: `rotateZ(${this.props.angle * -1}deg)`,
      pointerEvents:
        this.props.obj.id === this.props.currentModel.id ? "auto" : "none",
      // backgroundImage: `url(${this.props.obj.Model.icon})`,
      // height:
      //   active === true
      //     ? `${this.props.size * 0.7}px`
      //     : `${this.props.size * 0.525}px`,
      // width:
      //   active === true
      //     ? `${this.props.size * 0.7}px`
      //     : `${this.props.size * 0.525}px`,
      // // border: active === true ? "3px solid red" : "none",
      // filter:
      //   this.props.currentCategory === "All Content" || active === true
      //     ? `opacity(1) blur(${this.props.blur * 20}px) `
      //     : `opacity(0.5) blur(${this.props.blur * 20}px)`,

      // opacity: this.props.obj.id === this.props.currentModel.id ? "0%" : "100%",
      // visibility:
      //   this.props.obj.id === this.props.currentModel.id ? "hidden" : "visible",
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

  // getStyle = () => {
  //   var active = this.props.checkModelActive(
  //     this.props.obj,
  //     this.props.activeArtifacts
  //   );
  //   // var active = true;
  //   return {
  //     backgroundImage: `url(${this.props.obj.Model.icon})`,
  //     height:
  //       active === true
  //         ? `${this.props.size * 0.7}px`
  //         : `${this.props.size * 0.525}px`,
  //     width:
  //       active === true
  //         ? `${this.props.size * 0.7}px`
  //         : `${this.props.size * 0.525}px`,
  //     // border: active === true ? "3px solid red" : "none",
  //     filter:
  //       this.props.currentCategory === "All Content" || active === true
  //         ? `opacity(1) `
  //         : `opacity(0.5) `,

  //     opacity: this.props.obj.id === this.props.currentModel.id ? "0%" : "100%",
  //     visibility:
  //       this.props.obj.id === this.props.currentModel.id ? "hidden" : "visible",
  //   };
  // };

  render() {
    console.log("RingIcon Props", this.props);
    return (
      // <div style={this.getOuterStyle()} className={style.field}>
      //   <ActiveModel
      //     currentModel={this.props.currentModel}
      //     style={this.getModelStyle()}
      //     activeModel={this.props.obj.id}
      //   />
      // </div>
      <div className={style.field} style={this.getOuterStyle()}>
        {/*Div for each of the inactive models around the Universe view. */}
        <div style={this.getStyle()} className={style.icon}></div>
        <Suspense fallback={<div></div>}>
          <ActiveModel
            currentModel={this.props.currentModel}
            style={this.getModelStyle()}
            activeModel={this.props.obj.id}
          />
        </Suspense>
      </div>
    );
  }
}
