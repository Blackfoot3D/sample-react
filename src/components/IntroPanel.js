import React, { Component } from "react";
import style from "./style/StoryPanel.module.css";
import IntroContent from "./IntroContent";

/*************************************************
 * IntroPanel component is responsible for the
 * sliding side panel that contains intro content
 * for each artifact.
 ************************************************/
export default class IntroPanel extends Component {
  componentDidMount() {}

  /*************************************************
   * Function that controls the sliding animation
   * of the panel. This function looks at the
   * transition array prop, and determines which
   * animation to apply.
   ************************************************/
  getPanelStyle = () => {
    //if there is no transition, current and previous are the same
    if (this.props.transition[0] === this.props.transition[1]) {
      if (this.props.currentRoute === "main") {
        return [
          style.containerIntro,
          //   style.containerHidden,
          style.containerLeft,
          style.containerHidden,
        ].join(" ");
      } else if (this.props.currentRoute === "intro") {
        return [
          //   style.containerVisible,
          style.containerLeft,
          style.containerIntro,
          style.containerVisible,
        ].join(" ");
      }
    }
    //transition case
    else if (this.props.transition[0] !== this.props.transition[1]) {
      //transition from main to intro
      if (
        this.props.transition[0] === "main" &&
        this.props.transition[1] === "intro"
      ) {
        return [style.containerIntro, style.show, style.containerLeft].join(
          " "
        );
      }
      //transition from intro to main
      else if (
        this.props.transition[0] === "intro" &&
        this.props.transition[1] === "main"
      ) {
        return [
          style.containerIntro,
          //   style.containerVisible,
          style.hide,
          style.containerLeft,
        ].join(" ");
      }
      //transition from intro to anything else
      else if (
        this.props.transition[0] === "intro" &&
        this.props.transition[1] !== "main"
      ) {
        return [style.containerIntro, style.hide, style.containerleft].join(
          " "
        );
      }
      //transition from main to anything else
      else if (
        this.props.transition[0] === "main" &&
        this.props.transition[1] !== "intro"
      ) {
        return [
          style.containerIntro,
          style.containerHidden,
          style.containerLeft,
        ].join(" ");
      }
      //transition from anything to intro
      else if (
        (this.props.transition[0] !== "main" ||
          this.props.transition[0] !== "intro") &&
        this.props.transition[1] === "intro"
      ) {
        return [
          style.containerIntro,
          style.show,
          style.containerHidden,
          style.containerLeft,
          style.animationDelay,
        ].join(" ");
      }
      //transition from anything to main
      else if (
        (this.props.transition[0] !== "main" ||
          this.props.transition[0] !== "intro") &&
        this.props.transition[1] === "main"
      ) {
        return [
          style.containerIntro,
          // style.show,
          style.containerHidden,
          style.containerLeft,
          // style.animationDelay,
        ].join(" ");
      }
      //transition from anything into anything
      else {
        return [
          style.containerIntro,
          // style.show,
          style.containerHidden,
          style.containerLeft,
          // style.animationDelay,
        ].join(" ");
      }
    }
  };
  render() {
    return (
      <div className={this.getPanelStyle()}>
        <IntroContent
          currentModel={this.props.currentModel}
          transition={this.props.transition}
          setActiveRoute={this.props.setActiveRoute}
          routes={this.props.routes}
        />
      </div>
    );
  }
}
