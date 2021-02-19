import React, { Component } from "react";
import style from "../components/style/ModelNameBox.module.css";

/**********************************************************
 * Component for displaying the current artifact's name.
 **********************************************************/
export default class ModelNameBox extends Component {
  state = {
    small: 1.3,
    medium: 1.95,
    large: 3.16,
  };
  componentDidMount() {
    var strlen = this.props.currentModel.translation.length;
    if (strlen <= 11) {
      return;
    } else {
      var small = this.state.small;
      var medium = this.state.medium;
      var large = this.state.large;

      small = (small / strlen) * 11;
      medium = (medium / strlen) * 11;
      large = (large / strlen) * 11;

      this.setState({ small: small, medium: medium, large: large });
    }
    console.log("modelnamebox", this.state);
  }
  /**********************************************************
   * Function used to set the css classes of the Blackfoot
   * word for the object.
   **********************************************************/
  getTitleStyle = () => {
    //if we transition from anything into main or intro
    if (this.props.transition[1] === "intro") {
      return [style.container, style.largeName].join(" ");
    }
    //if we transition from main or intro into anything else
    else if (this.props.transition[1] === "main") {
      return [style.container, style.mediumName].join(" ");
    }
    //if we transition between routes not equal to main or intro //if ((this.props.transition[1] !== "main" ||this.props.transition[1] !== "intro"))
    else {
      return [style.container, style.smallName].join(" ");
    }
  };

  /**********************************************************
   * Function used to set the size of the Blackfoot
   * word for the object.
   **********************************************************/
  getTitleSize = () => {
    //if we transition from anything into main or intro
    if (this.props.transition[1] === "intro") {
      return { fontSize: `${this.state.large}vw` };
    }
    //if we transition from main or intro into anything else
    else if (this.props.transition[1] === "main") {
      return { fontSize: `${this.state.medium}vw` };
    }
    //if we transition between routes not equal to main or intro //if ((this.props.transition[1] !== "main" ||this.props.transition[1] !== "intro"))
    else {
      return { fontSize: `${this.state.small}vw` };
    }
  };

  /**********************************************************
   * Function used to set the css classes of the english word
   * for the Blackfoot object.
   **********************************************************/
  getSubtitleStyle = () => {
    //if we transition from anything into main or intro
    if (this.props.transition[1] === "intro") {
      return style.largeSubtitle;
    }
    //if we transition from main or intro into anything else
    else if (this.props.transition[1] === "main") {
      return style.mediumSubtitle;
    }
    //if we transition between routes not equal to main or intro //if ((this.props.transition[1] !== "main" ||this.props.transition[1] !== "intro"))
    else {
      return style.smallSubtitle;
    }
  };

  /**********************************************************
   * Function used to set the size of the english word
   * for the Blackfoot object.
   **********************************************************/
  getSubtitleSize = () => {
    //if we transition from anything into main or intro
    if (this.props.transition[1] === "intro") {
      return style.largeSubtitle;
    }
    //if we transition from main or intro into anything else
    else if (this.props.transition[1] === "main") {
      return style.mediumSubtitle;
    }
    //if we transition between routes not equal to main or intro //if ((this.props.transition[1] !== "main" ||this.props.transition[1] !== "intro"))
    else {
      return style.smallSubtitle;
    }
  };

  render() {
    // console.log("modelnamebox", this.state);
    return (
      <>
        <div
          className={this.getTitleStyle()}
          id={`${this.props.currentModel.id}_modelNameBox`}
          style={this.getTitleSize()}>
          <h1>{this.props.currentModel.translation}</h1>
          <h2 className={this.getSubtitleStyle()} style={this.getTitleSize()}>
            {this.props.currentModel.name}
          </h2>
        </div>
        {/* Render a Ghost element that is invisible and has no transition. 
        This is used for the sizing and positioning of the info content in the info panel. */}
        <div
          className={[style.hidden, style.container].join(" ")}
          id={`${this.props.currentModel.id}_modelNameBoxLarge`}>
          <h1>{this.props.currentModel.translation}</h1>
          <h2 className={style.largeSubtitleHidden}>
            {this.props.currentModel.name}
          </h2>
        </div>
      </>
    );
  }
}
