import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";
import style from "./style/MainMenu.module.css";
import _ from "lodash";
export default class MainMenu extends Component {
  state = {
    panelState: "close",
    activeLink: "Explore",
    left: 0,
  };

  componentDidMount() {
    var str = window.location.href;
    var n = str.lastIndexOf("/");
    var result = str.substring(n + 1);
    // console.log("MountingNavCluster", result);
    if (result.includes("About")) {
      this.setActiveLink("About");
    } else if (result.includes("Intro")) {
      this.setActiveLink("About");
    } else {
      this.setActiveLink("Explore");
    }

    // if (window.matchMedia("(max-width: 675)")) {
    //   this.setState({ panelState: "open" });
    // }
    var mm = document.getElementById("MainMenuButton").parentNode;
    console.log("main menu", mm);

    window.addEventListener("resize", _.debounce(this.resize, 50));
  }

  resize = () => {
    // console.log("mm resize", this.state);
    // var str = window.location.href;
    // var n = str.lastIndexOf("/");
    // var result = str.substring(n + 1);
    // // console.log("MountingNavCluster", result);
    // if (result.includes("About")) {
    //   this.setActiveLink("About");
    // } else if (result.includes("Intro")) {
    //   this.setActiveLink("About");
    // } else {
    //   this.setActiveLink("Explore");
    // }
    if (this.state.left === 0) {
      this.setState({ left: 1 });
    } else {
      this.setState({ left: 0 });
    }
    console.log("mmstate", this.state);
  };

  togglePanel = () => {
    if (this.state.panelState === "close") {
      this.setState({ panelState: "open" });
    } else if (this.state.panelState === "open") {
      this.setState({ panelState: "close" });
    }
  };

  getLeft = (i, right) => {
    if (i === 0) {
      return `${right}px`;
    } else if (i === 1) {
      if (this.state.activeLink === this.props.destinations[0].title) {
        return `${i * 100 + right}px`;
      }
      return "100%";
    } else {
      if (this.state.activeLink === this.props.destinations[i].title) {
        return "100%";
      } else {
        for (var x = 0; x < this.props.destinations.length; x++) {
          if (
            (this.props.destinations[x].title ===
              this.props.destinations[i].title) ===
            this.state.activeLink
          ) {
            if (i < x) {
              return "100%";
            }
          }
        }
        return `${(i - (i - 2) - 1) * 100 + right}px`;
        // return `${right + 100}px`;
      }
    }
  };

  /******************************************************
   * Width Transition
   */
  getNavStyle = (i, title) => {
    var el = document.getElementById("MainMenuButton");
    if (el) {
      var rect = el.getBoundingClientRect();
      if (this.state.panelState === "open") {
        return { left: `${i * 100 + rect.right}px`, width: "100px" };
      } else if (this.state.panelState === "close") {
        if (this.state.activeLink === title) {
          return {
            left: rect.right,
            zIndex: "9999999",
            width: "100px",
          };
        } else {
          // left: `${(i - 1) * 100 + rect.right}px`,
          return {
            left: this.getLeft(i, rect.right),
            // transitionDelay: `${i * 0.5}s`,
            zIndex: "0",
            width: "0",
          };
        }
      }
    } else {
      if (this.state.activeLink === title) {
        return { left: "100%", zIndex: "99999999", width: "100px" };
      } else {
        return { left: "100%", zIndex: "0", width: "0" };
      }
    }
  };

  getChevronStyle = () => {
    if (this.state.panelState === "initial") {
      return [style.chevron, style.chevronInactive].join(" ");
    }
    if (this.state.panelState === "open") {
      return [style.chevron, style.chevronActive].join(" ");
    } else if (this.state.panelState === "close") {
      return [style.chevron, style.chevronInactive].join(" ");
    }
  };

  setActiveLink = (title) => {
    if (window.matchMedia("(max-width: 675)")) {
      this.setState({ activeLink: title, panelState: "close" });
    } else {
      this.setState({ activeLink: title, panelState: "close" });
    }
    console.log("mm sal", this.state);
  };

  setNavClass = (title) => {
    if (this.state.activeLink === title) {
      return [style.navItem, style.navActive].join(" ");
    } else {
      return style.navItem;
    }
  };
  render() {
    return (
      <div className={style.menuContainer}>
        {/* <div className={style.inner}> */}
        <MediaQuery minWidth={801}>
          <button
            className={style.openbtn}
            onClick={this.togglePanel}
            id="MainMenuButton">
            <h1>Mootookakio’ssin</h1>
            <span className={this.getChevronStyle()}></span>
            <h2 className={style.subtitle}>distant awareness</h2>
          </button>
          {this.props.destinations.map((object, i) => (
            <NavLink to={object.route} key={i}>
              <div
                className={style.navItem}
                style={this.getNavStyle(i, object.title)}
                onClick={() => this.setActiveLink(object.title)}
                id={`MainMenu_${object.title}`}>
                <div
                  className={style.navIcon}
                  style={{
                    maskImage: `url(${object.icon})`,
                    WebkitMaskImage: `url(${object.icon})`,
                  }}></div>
                <h2>{object.title}</h2>
              </div>
              {/* <div
                className={style.navItem}
                style={this.getNavStyle(i, object.title)}
                onClick={() => this.setActiveLink(object.title)}
                id={`MainMenu_${object.title}`}>
                <h2>{object.title}</h2>
              </div> */}
            </NavLink>
          ))}
        </MediaQuery>
        <MediaQuery maxWidth={800}>
          <button className={style.openbtn} id="MainMenuButton">
            <h1>Mootookakio’ssin</h1>
            <h2>distant awareness</h2>
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              maxWidth: "50%",
              width: "50%",
              textAlign: "center",
            }}>
            {this.props.destinations.map((object, i) => (
              <NavLink
                to={object.route}
                key={i}
                onClick={() => this.setActiveLink(object.title)}>
                <div className={style.navItem} id={`MainMenu_${object.title}`}>
                  <h2
                    style={
                      object.title === this.state.activeLink
                        ? { opacity: "1", fontWeight: "bold" }
                        : { opacity: "0.45" }
                    }>
                    {object.title}
                  </h2>
                </div>
              </NavLink>
            ))}
          </div>
        </MediaQuery>
      </div>
    );
  }
}
