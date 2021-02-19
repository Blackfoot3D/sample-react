import React, { Component } from "react";
import style from "./style/StoryPanel.module.css";
import StoryContent from "./StoryContent";
// const StoryContent = React.lazy(() => import("./StoryContent"));
/**********************************************************
 * StoryPanel Class component handles the animations and
 * transitions of the right hand side panel within the
 * artifact detail pages.
 **********************************************************/
export default class StoryPanel extends Component {
  /**********************************************************
   * On component mount, set a flag so that the parent knows
   * that this component was mounted. There was an issue
   * without this flag.
   **********************************************************/
  componentDidMount() {
    this.props.mounted(true);
  }

  /**********************************************************
   * Function is responsible for the css styling of the
   * StoryPanel. Checks the transition prop, and returns the
   * appropriate css classes for that transition.
   * Returns: css class array.
   **********************************************************/
  getPanelStyle = () => {
    //if there is no transition, current and previous are the same
    if (this.props.transition[0] === this.props.transition[1]) {
      if (
        this.props.currentRoute === "main" ||
        this.props.currentRoute === "intro"
      ) {
        return [
          style.container,
          style.containerHidden,
          style.containerRight,
        ].join(" ");
      } else {
        return [
          style.container,
          style.containerVisible,
          style.containerRight,
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
        return [
          style.container,
          style.containerHidden,
          style.containerRight,
        ].join(" ");
      }
      //transition from intro to main
      else if (
        this.props.transition[0] === "intro" &&
        this.props.transition[1] === "main"
      ) {
        return [
          style.container,
          style.containerHidden,
          style.containerRight,
        ].join(" ");
      }
      //transition from intro to anything else
      else if (
        this.props.transition[0] === "intro" &&
        this.props.transition[1] !== "main"
      ) {
        return [
          style.container,
          style.show,
          style.containerHidden,
          style.animationDelay,
          style.containerRight,
        ].join(" ");
      }
      //transition from main to anything else
      else if (
        this.props.transition[0] === "main" &&
        this.props.transition[1] !== "intro"
      ) {
        return [
          style.container,
          style.show,
          // style.containerHidden,
          style.containerRight,
        ].join(" ");
      }
      //transition from anything to intro
      else if (
        (this.props.transition[0] !== "main" ||
          this.props.transition[0] !== "intro") &&
        this.props.transition[1] === "intro"
      ) {
        return [
          style.container,
          style.hide,
          style.containerHidden,
          style.containerRight,
        ].join(" ");
      }
      //transition from anything to main
      else if (
        (this.props.transition[0] !== "main" ||
          this.props.transition[0] !== "intro") &&
        this.props.transition[1] === "main"
      ) {
        return [
          style.container,
          style.hide,
          style.containerHidden,
          style.containerRight,
        ].join(" ");
      }
      //transition from anything into anything
      else {
        return [
          style.container,
          style.containerVisible,
          style.containerRight,
        ].join(" ");
      }
    }
  };

  render() {
    return (
      <div className={this.getPanelStyle()} id="StoryPanel">
        <StoryContent
          currentModel={this.props.currentModel}
          currentRoute={this.props.currentRoute}
          transition={this.props.transition}
          designContent={this.props.designContent}
          materialsContent={this.props.materialsContent}
          designHS={this.props.designHS}
          materialsHS={this.props.materialsHS}
          onBackButton={this.props.onBackButton}
          mounted={this.props.mounted}
          setActiveRoute={this.props.setActiveRoute}
          routes={this.props.routes}
        />
      </div>
    );
  }
}
