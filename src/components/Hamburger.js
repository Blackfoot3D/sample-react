import React, { PureComponent } from "react";
import style from "./style/Hamburger.module.css";
import { Link } from "react-router-dom";

export default class Hamburger extends PureComponent {
  state = {
    active: false,
    hamStyle: style.closeMenu,
    panelState: "initial",
  };

  openPanel = () => {
    this.setState({ panelState: "open" });
  };

  /* Set the width of the sidebar to 0 (hide it) */
  closePanel = () => {
    this.setState({ panelState: "close" });
  };

  setPanelStyle = () => {
    if (this.state.panelState === "initial") {
      return [style.closed, style.sidePanel].join(" ");
    }
    if (this.state.panelState === "open") {
      return [style.show, style.sidePanel].join(" ");
    } else if (this.state.panelState === "close") {
      return [style.hide, style.sidePanel].join(" ");
    }
  };

  getStyle = () => {
    return {
      display: this.props.display ? "inline-block" : "none",
    };
  };
  render() {
    return (
      <React.Fragment>
        <div className={this.setPanelStyle()} id="mySidepanel">
          <button className={style.closebtn} onClick={this.closePanel}>
            &times;
          </button>
          {this.props.destinations.map((object, i) => (
            <Link to={object.route} key={i}>
              <div>
                <h2 className={style.navItem}>{object.title}</h2>
              </div>
            </Link>
          ))}
        </div>
        <button className={style.openbtn} onClick={this.openPanel}>
          &#9776;
        </button>
      </React.Fragment>
    );
  }
}
