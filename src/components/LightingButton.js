import React, { Component } from "react";
import RadioIcon from "./RadioIcon";
// import style from "./style/RadioIcon.module.css";
import style from "./style/LightingButton.module.css";
export default class LightingButton extends RadioIcon {
  state = {
    lightMode: true,
  };
  //lastMode controls the last active help mode
  //helpHover and whether or not the help window is open.
  /***************************************************************
   * Function used as a wrapper to call the parent onClick
   * function. Used to set the current state of parent and change
   * the active panel mode.
   * Arguments: none
   * Returns: none. statechange.
   ***************************************************************/
  onClick = () => {
    this.props.onClick();
    if (this.props.text === "&#9788;") {
      this.setState({ lightMode: true });
    } else if (this.state.lightMode === false) {
      this.setState({ lightMode: true });
    } else {
      this.setState({ lightMode: false });
    }
  };

  /***************************************************************
   * Function used to set the css classes on the RadioIcon. Controls
   * the Icon's active and inactive css.
   * Arguments: none
   * Returns: Css Classes.
   ***************************************************************/
  getButtonStyle = () => {
    if (this.props.id === this.props.active) {
      return [style.RadioButtonActive, style.RadioButton].join(" ");
    } else {
      return style.RadioButton;
    }
  };

  /***************************************************************
   * Sets the style of the radio icon text. This is required in
   *  order to use the Google Maps font family for the map Icon.
   * Arguments: none
   * Returns: Css classes.
   ***************************************************************/
  getIconTextStyle = () => {
    if (this.state.lightMode === true) {
      return <p>&#9788;</p>;
    } else {
      return <p>&#9790;</p>;
    }
  };

  /***************************************************************
   * Function used to render a radio icon.
   * Arguments: none
   * Returns: markup for RadioIcon.
   ***************************************************************/
  renderRadioIcon = () => {
    return (
      <div className={style.lightingbutton} id={"lighting_button"}>
        <button
          className={this.getButtonStyle()}
          id={this.props.id}
          onClick={this.onClick}>
          {this.getIconTextStyle()}
        </button>
      </div>
    );
  };

  render() {
    return this.renderRadioIcon();
  }
}
