import React, { Component } from "react";
import RadioIcon from "./RadioIcon";
import style from "./style/RadioContainer.module.css";
import MediaQuery from "react-responsive";
import { nodeName } from "jquery";

export default class RadioContainer extends Component {
  state = {
    active: "modelIcon",
    // infoActive: this.props.infoActive,
    expand: false,
  };

  /******************************************************
   * Function controls the state of the Radio button
   * cluster, which determines the mode of the ModelPanel
   * When a radio Button is clicked, the mode is set to
   * the one corresponding to the radio button.
   * Arguments:
   * button_state: the id of the Radio button that is
   * clicked.
   ******************************************************/
  Icon_Onclick = (button_state) => {
    //set this state
    if (button_state === "infoIcon") {
      // if (this.state.infoActive === true){
      this.setState({ infoActive: !this.state.infoActive });
      // }
    } else {
      this.setState({ active: button_state });
    }
    //pass the state up the ladder
    this.props.callbackFromParent(button_state);
  };

  /**************************************************
   * Function responsible for collapsing the Radio
   * Container when in mobile
   **************************************************/
  toggleExpand = () => {
    console.log("TRIGGERED", this.state.expand);
    this.setState({ expand: !this.state.expand });
  };

  /**************************************************
   * Function responsible for applying expanded
   * styles to the container
   **************************************************/
  getExpandStyle = () => {
    if (this.state.expand === true) {
      return [style.expandButton, style.expandActive].join(" ");
    } else {
      return [style.expandButton, style.expandInactive].join(" ");
    }
  };

  /**************************************************
   * Function responsible for applying expanded
   * styles to the radio icons
   * Arguments:
   * num: the order number of the icon
   * icon: the name of the icon
   **************************************************/
  getIconExpandStyle = (num, icon) => {
    if (this.props.rtiExist === null || this.props.rtiExist === undefined) {
      if (num > 3) {
        num = num - 1;
      }
    }
    if (this.state.expand === true) {
      return { opacity: "1", right: `${num * 100}%` };
    }
    // expand is false
    else {
      //this is the active icon
      if (this.state.active === icon) {
        return { opacity: "1", right: "100%" };
      }
      // icon is inactive
      else {
        return {
          opacity: "0",
          right: "100%",
          zIndex: "-1",
        };
      }
    }
  };
  render() {
    return (
      <div>
        {/* Media Query for Desktop */}
        <MediaQuery minWidth={801}>
          <div className={style.RadioContainer}>
            <RadioIcon
              id="infoIcon"
              text="i"
              callbackFromParent={this.Icon_Onclick}
              OnClick={this.Icon_Onclick}
              // active={this.props.infoActive}
              infoActive={this.props.infoActive} // state to toggle info
            ></RadioIcon>
            <RadioIcon
              id="modelIcon"
              text="3D"
              callbackFromParent={this.Icon_Onclick}
              OnClick={this.Icon_Onclick}
              active={this.state.active}></RadioIcon>
            <RadioIcon
              id="rtiIcon"
              text="RTI"
              callbackFromParent={this.Icon_Onclick}
              OnClick={this.Icon_Onclick}
              active={this.state.active}
              rtiExist={this.props.rtiExist}></RadioIcon>
            <RadioIcon
              id="mapIcon"
              text="&#xe55f;"
              callbackFromParent={this.Icon_Onclick}
              OnClick={this.Icon_Onclick}
              active={this.state.active}></RadioIcon>
          </div>
        </MediaQuery>
        {/* Media Query for Mobile */}
        <MediaQuery maxWidth={800}>
          <div className={style.RadioContainer}>
            <div>
              <div
                className={style.RadioContainerExpand}
                style={this.getIconExpandStyle(1, "infoIcon")}
                onClick={() => this.setState({ expand: false })}>
                <RadioIcon
                  id="infoIcon"
                  text="i"
                  callbackFromParent={this.Icon_Onclick}
                  OnClick={this.Icon_Onclick}
                  active={this.props.infoActive}
                  infoActive={this.props.infoActive} // state to toggle info
                ></RadioIcon>
              </div>
              <div
                className={style.RadioContainerExpand}
                style={this.getIconExpandStyle(2, "modelIcon")}
                onClick={() => this.setState({ expand: false })}>
                <RadioIcon
                  id="modelIcon"
                  text="3D"
                  callbackFromParent={this.Icon_Onclick}
                  OnClick={this.Icon_Onclick}
                  active={this.state.active}></RadioIcon>
              </div>
              {this.props.rtiExist !== null &&
                this.props.rtiExist !== undefined && (
                  <div
                    className={style.RadioContainerExpand}
                    style={this.getIconExpandStyle(3, "rtiIcon")}
                    onClick={() => this.setState({ expand: false })}>
                    <RadioIcon
                      id="rtiIcon"
                      text="RTI"
                      callbackFromParent={this.Icon_Onclick}
                      OnClick={this.Icon_Onclick}
                      active={this.state.active}
                      rtiExist={this.props.rtiExist}></RadioIcon>
                  </div>
                )}
              <div
                className={style.RadioContainerExpand}
                style={this.getIconExpandStyle(4, "mapIcon")}
                onClick={() => this.setState({ expand: false })}>
                <RadioIcon
                  id="mapIcon"
                  text="&#xe55f;"
                  callbackFromParent={this.Icon_Onclick}
                  OnClick={this.Icon_Onclick}
                  active={this.state.active}></RadioIcon>
              </div>
            </div>
            <button
              className={this.getExpandStyle()}
              onClick={this.toggleExpand}
              id="moreIcon"></button>
          </div>
        </MediaQuery>
      </div>
    );
  }
}
