import React, { PureComponent } from "react";
import style from "./style/ActiveModelUniverse.module.css";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
/**************************************************
 * ActiveModel Functional Component. Renders a
 * model viewer containing the App's currently
 * displayed model.
 **************************************************/
export default class ActiveModelUniverse extends PureComponent {
  componentDidMount() {
    // window.addEventListener("load", this.loaded);
  }

  // loaded = () => {
  //   if (document.readyState === "complete") {
  //     var amu = document.getElementById(`${this.props.activeModel}_turntable`);
  //     // console.log("appI", app);
  //     // app.classList.remove("preload");
  //     amu.setAttribute("src", this.props.currentModel.png);
  //   } else {
  //     window.onload = this.loaded;
  //     // window.addEventListener("load", this.renderModel);
  //   }
  // };
  /*************************************************
   * onMouseEnter Listener.
   * Function used for the hover functionality
   * on the Active Models. Scale the container
   * onMouseEnter.
   ************************************************/
  scaleContainerUp = () => {
    var el = document.getElementById(
      `ActiveModelContainer_${this.props.activeModel}`
    );
    if (el) {
      el.classList.add(style["containerHover"]);
    }
  };

  /*************************************************
   * onMouseLeave Listener.
   * Function used for the hover functionality
   * on the Active Models. When mouse leaves, scale
   * the container down.
   ************************************************/
  scaleContainerDown = () => {
    var el = document.getElementById(
      `ActiveModelContainer_${this.props.activeModel}`
    );
    if (el) {
      el.classList.remove(style["containerHover"]);
    }
  };

  render() {
    return (
      <div
        className={style.transition}
        id={`ActiveModelContainer_${this.props.activeModel}`}>
        <MediaQuery minWidth={801}>
          <div className={style.activeModelContainer} style={this.props.style}>
            <Link to={`/objects/${this.props.currentModel.id}/main`}>
              <div className={style.titleContainer}>
                <h1>{this.props.currentModel.translation}</h1>
                <h2>{this.props.currentModel.name}</h2>
              </div>
            </Link>
            <Link to={`/objects/${this.props.currentModel.id}/main`}>
              <div className={style.modelBox}>
                <img
                  id={`${this.props.activeModel}_turntable`}
                  src={this.props.currentModel.png}
                  alt={`A Blackfoot ${this.props.currentModel.name}`}></img>
              </div>
            </Link>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={800}>
          <div className={style.activeModelContainer} style={this.props.style}>
            <Link to={`/objects/${this.props.currentModel.id}/intro`}>
              <div className={style.titleContainer}>
                <h1>{this.props.currentModel.translation}</h1>
                <h2>{this.props.currentModel.name}</h2>
              </div>
            </Link>
            <Link to={`/objects/${this.props.currentModel.id}/intro`}>
              <div className={style.modelBox}>
                <img
                  id={`${this.props.activeModel}_turntable`}
                  src={this.props.currentModel.png}
                  alt={`A Blackfoot ${this.props.currentModel.name}`}></img>
              </div>
            </Link>
          </div>
        </MediaQuery>
      </div>
    );
  }
}
