import React, { Component } from "react";
import style from "./style/HelpButton.module.css";
export default class HelpButton extends Component {
  //lastMode controls the last active help mode
  //helpHover and whether or not the help window is open.
  state = {
    helpHover: false,
    lastMode: "",
  };

  //sets the last active state.
  componentDidMount() {
    this.setState({ lastMode: this.props.helpState });
  }

  //Used for closing the window
  //automatically when the helpMode changes
  componentDidUpdate() {
    if (this.state.lastMode !== this.props.helpState) {
      this.setState({ lastMode: this.props.helpState, helpHover: false });
    }
  }
  /**************************************
   * Sets the active css classes on the
   * button
   **************************************/
  getButtonStyle = () => {
    if (this.state.helpHover === true) {
      return style.RadioButtonActive;
    } else {
      return style.RadioButton;
    }
  };

  /*************************************
   * Controls visibility of the help
   * window.
   */
  getHelpStyle = () => {
    if (this.state.helpHover === true) {
      return [style.helpWindow, style.showhelp].join(" ");
    } else {
      return [style.helpWindow, style.hidehelp].join(" ");
    }
  };

  /*********************************
   * On Button click, toggles the
   * state of the help window.
   */
  onHelpClick = () => {
    var tempval = !this.state.helpHover;
    this.setState({ helpHover: tempval });
  };

  /******************************************
   * Uses props.helpMessages, and
   * props.helpState to compare and print
   * the appropriate help message.
   */
  helpWindowRender = () => {
    //Iterate through the help messages for one whose state matches the helpState
    for (var i = 0; i < this.props.helpMessages.length; i++) {
      if (this.props.helpState === this.props.helpMessages[i].state) {
        //Return a help window with the appropriate message
        return (
          <div className={this.getHelpStyle()}>
            <p>{this.props.helpMessages[i].helpMessage}</p>
          </div>
        );
      }
    }
    //If no match is found, return a default message
    return (
      <div className={style.helpWindow}>
        <p>I'm sorry, I don't know how to help you...</p>
      </div>
    );
  };

  render() {
    return (
      <div>
        <button className={this.getButtonStyle()} onClick={this.onHelpClick}>
          {"?"}
        </button>
        {this.state.helpHover && this.helpWindowRender()}
      </div>
    );
  }
}
