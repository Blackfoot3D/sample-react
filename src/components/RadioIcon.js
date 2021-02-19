import React, { Component } from "react";
import style from "./style/RadioIcon.module.css";
import MediaQuery from "react-responsive";

export default class RadioIcon extends Component {
  /***************************************************************
   * Function used as a wrapper to call the parent onClick
   * function. Used to set the current state of parent and change
   * the active panel mode.
   * Arguments: none
   * Returns: none. statechange.
   ***************************************************************/
  onClick = () => {
    this.props.OnClick(this.props.id);
  };

  /***************************************************************
   * Function used to set the css classes on the RadioIcon. Controls
   * the Icon's active and inactive css.
   * Arguments: none
   * Returns: Css Classes.
   ***************************************************************/
  getButtonStyle = () => {
    if (this.props.infoActive === true) {
      return [style.RadioButtonActive, style.RadioButton].join(" ");
    } else if (this.props.infoActive === false) {
      return style.RadioButton;
    }

    if (this.props.id === this.props.active) {
      return [style.RadioButtonActive, style.RadioButton].join(" ");
    } else {
      return style.RadioButton;
    }
  };

  componentDidUpdate() {
    console.log("Radio", this.props);
  }

  /***************************************************************
   * Sets the style of the radio icon text. This is required in
   *  order to use the Google Maps font family for the map Icon.
   * Arguments: none
   * Returns: Css classes.
   ***************************************************************/
  getIconTextStyle = () => {
    if (this.props.id === "mapIcon") {
      return style.mapIcon;
    } else if (this.props.id === "moreIcon") {
      return style.moreIcon;
    } else {
      return style.iconText;
    }
  };

  /***************************************************************
   * Function used to render a radio icon. Essentially used to check
   * if the RTI exists for an object. if there is no RTI, do not
   * render an RTI button.
   * Arguments: none
   * Returns: markup for RadioIcon.
   ***************************************************************/
  renderRadioIcon = () => {
    console.log("Radio Icon", this.props);
    if (this.props.id === "rtiIcon") {
      if (this.props.rtiExist !== null && this.props.rtiExist !== undefined) {
        return (
          <div>
            <button
              className={this.getButtonStyle()}
              id={this.props.id}
              onClick={() => this.onClick()}>
              <p className={this.getIconTextStyle()}>{this.props.text}</p>
            </button>
          </div>
        );
      }
      // If RTI does not exist for an object, return null (no rti icon)
      //Might need to adjust here to change to a greyed out icon rather than no icon.
      else {
        return null;
      }
    } else {
      return (
        <div>
          <button
            className={this.getButtonStyle()}
            id={this.props.id}
            onClick={() => this.onClick()}>
            <p className={this.getIconTextStyle()}>{this.props.text}</p>
          </button>
        </div>
      );
    }
  };
  render() {
    return this.renderRadioIcon();
  }
}
