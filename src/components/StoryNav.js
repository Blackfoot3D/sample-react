import React, { Component } from "react";
import style from "./style/StoryNav.module.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import MediaQuery from "react-responsive";
const isMobile = window.matchMedia("max-width: 800px").matches;
export default class StoryNav extends Component {
  /*********************************************************
   * Function used to calculate the position of the sliding
   * paint streak that appears behind the active Nav item.
   * Arguments:
   * trans: indicates if a transition is used to move
   * the slider. ex. transition on click, but not on resize.
   ********************************************************/
  getActiveNav = (trans) => {
    console.log("current route", this.props.currentRoute);
    var el = document.getElementById(
      `${this.props.currentModel.id}_${this.props.currentRoute}_storynavitem`
    );
    if (el) {
      var rect = el.getBoundingClientRect();
      var slide = document.getElementById(
        `${this.props.currentModel.id}_storynavSlider`
      );
      if (trans === false) {
        slide.classList.remove(style.transition);
      } else {
        slide.classList.add(style.transition);
      }
      //calculate the position of the paint streak using getBoundingClientRect();
      slide.style.width = `${rect.width * 1.5}px`;
      slide.style.left = `${rect.left - rect.width / 4}px`;
    }
  };

  componentDidUpdate() {
    this.getActiveNav(true);
  }
  /*********************************************************
   * Function used for resize events. Sets the slider paint
   * streak to the correct location.
   * Arguments: none.
   ********************************************************/
  onResize = () => {
    this.getActiveNav(false);
  };

  navResize = () => {
    console.log("resize nav");
    const mobile = window.matchMedia("(max-width: 800px").matches;
    var nav = document.getElementById(`${this.props.currentModel.id}_storyNav`);
    var route = this.props.currentRoute;
    if (!mobile) {
      nav.classList.remove(`${route}Style`);
    } else if (mobile) {
      console.log("resize nav adding");
      nav.classList.add(`${route}Style`);
    }
  };

  /*********************************************************
   * Function used for onClick events. Sets the slider paint
   * streak to the correct location of the clicked nav item.
   * Arguments: none.
   ********************************************************/
  onClick = () => {
    $(document).ready(this.getActiveNav(true));
  };

  /***************************************************************
   * Function used to check the url for validity.
   * Arguments: none
   * Returns: If an invalid route is found, return false.
   * Otherwise return true.
   ***************************************************************/
  routeValid = (route) => {
    for (var i = 0; i < this.props.currentModel.description.length; i++) {
      if (
        route === this.props.currentModel.description[i].title.toLowerCase()
      ) {
        console.log("returning true");
        return true;
      }
    }
    console.log("returning false", route);
    return false;
  };

  getNavMainStyle = () => {
    if (
      !this.routeValid(this.props.currentRoute) ||
      this.props.currentRoute === "main"
    ) {
      return style.active2;
    }
  };
  /*********************************************************
   * When mounted, set the initial location of the paint
   * slider.
   ********************************************************/
  componentDidMount() {
    // var el = document.getElementById(
    //   `${this.props.currentModel.id}_${this.props.currentRoute}_storynavitem`
    // );
    // var nav = document.getElementById(`${this.props.currentModel.id}_storyNav`);
    window.addEventListener("resize", this.onResize, false);
    window.addEventListener("resize", this.navResize, false);
  }
  /*********************************************************
   * Remove event listener on unMount.
   ********************************************************/
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize, false);
    window.removeEventListener("resize", this.navResize, false);
  }

  /*********************************************************
   * Function sets the style of the main nav button
   * depending on whether it is the currentRoute. If main
   * is active, set the button to its active class.
   * Arguments: none.
   ********************************************************/
  getMainIcon = () => {
    if (this.props.currentRoute === "main") {
      return [style.navMain, style.mainActive].join(" ");
    } else {
      return [style.navMain, style.mainInactive].join(" ");
    }
  };

  /*********************************************************
   * Function used to style the paint streak. When main is
   * the currentRoute, the paint streak is hidden.
   * Arguments: none.
   ********************************************************/
  getSlideStyle = () => {
    // if (this.props.currentRoute === "main") {
    //   return [style.slide, style.slideHidden].join(" ");
    // } else {
    //   return [style.slide, style.slideVisible].join(" ");
    // }
    if (this.props.currentRoute === "main") {
      return { opacity: "0" };
    } else {
      return { opacity: "1" };
    }
  };

  getInit = () => {
    return style.active2;
  };

  test = (loc) => {
    console.log("clicked nav", loc);
    // window.history.pushState(
    //   {},
    //   null,
    //   window.location.href.split("/").slice(0, -1).join("/") + `/${loc}`
    // );
    if (loc !== "intro") {
      document
        .getElementById(`${this.props.currentModel.id}_${loc}`)
        .scrollIntoView({ block: "start", inline: "nearest" });
    }

    this.props.setActiveRoute(loc);
  };

  drawMainButton = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32.18 32.18"
        // preserveAspectRatio="xMaxYMax meet"
        style={{
          display: "block",
          margin: "0 auto",
          position: "absolute",
          top: "50%",
          width: "100%",
          height: "100%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <defs>
          <style>
            {`.cls-1 {
                fill: none;
            }`}

            {`.cls-2 {
                fill: ${this.props.currentRoute === "main" ? "#ffd04e" : "none"}
            }`}

            {`.cls-3 {
                clip-path: url(#clip-path);
            }`}

            {`.cls-4 {
                fill: ;
            }`}
          </style>
          <clipPath id="clip-path" transform="translate(0)">
            <rect className="cls-1" width="32.18" height="32.18" />
          </clipPath>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <rect
              className="cls-2"
              x="9.79"
              y="9.79"
              width="12.59"
              height="12.59"
              rx="0.69"
            />
            <g className="cls-3">
              <path
                className={style.fill}
                d="M10.49,8.39h11.2a2.1,2.1,0,0,1,2.09,2.1v11.2a2.1,2.1,0,0,1-2.09,2.09H10.49a2.1,2.1,0,0,1-2.1-2.09V10.49A2.1,2.1,0,0,1,10.49,8.39Zm-.7,13.3a.69.69,0,0,0,.7.69h11.2a.69.69,0,0,0,.69-.69V10.49a.69.69,0,0,0-.69-.7H10.49a.7.7,0,0,0-.7.7Z"
                transform="translate(0)"
              />
              <path
                className={style.fill}
                d="M24,7.18l5.79-5.76H27.36a.7.7,0,0,1-.7-.71.7.7,0,0,1,.7-.71h4.12a.71.71,0,0,1,.7.71V4.89a.7.7,0,1,1-1.4,0V2.41L25,8.19a.68.68,0,0,1-1,0A.72.72,0,0,1,24,7.18Z"
                transform="translate(0)"
              />
              <path
                className={style.fill}
                d="M.7,0H4.82a.71.71,0,0,1,0,1.42H2.39L8.18,7.18a.72.72,0,0,1,0,1,.69.69,0,0,1-1,0L1.39,2.4V4.89A.7.7,0,1,1,0,4.89V.71A.7.7,0,0,1,.7,0Z"
                transform="translate(0)"
              />
              <path
                className={style.fill}
                d="M24,24a.69.69,0,0,1,1,0l5.82,5.79V27.28a.7.7,0,1,1,1.4,0v4.19a.71.71,0,0,1-.7.71H27.36a.71.71,0,0,1,0-1.42h2.42L24,25A.72.72,0,0,1,24,24Z"
                transform="translate(0)"
              />
              <path
                className={style.fill}
                d="M.7,26.57a.7.7,0,0,1,.69.71v2.49L7.21,24a.7.7,0,0,1,1,0,.72.72,0,0,1,0,1L2.39,30.76H4.82a.71.71,0,0,1,0,1.42H.7a.7.7,0,0,1-.7-.71V27.28A.7.7,0,0,1,.7,26.57Z"
                transform="translate(0)"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  };

  navBackground = (route) => {
    const mobile = window.matchMedia("(max-width: 800px)").matches;
    if (mobile) {
      console.log("currentRoute", this.props.currentRoute);
      return [style.navBackdrop, `${route}Style`].join(" ");
    }
    return [style.navBackdrop, style.navBackdropBackground].join(" ");
  };

  getNavColor = () => {
    // if (isMobile === true) {
    if (this.props.currentRoute === "main") {
      return { color: "var(--primary-color)" };
    } else {
      return {};
    }
    // }
  };
  render() {
    return (
      <div
        className={this.navBackground(this.props.currentRoute)}
        id={`${this.props.currentModel.id}_storyNav`}>
        <div className={style.front}>
          <ul className={style.navBar}>
            <MediaQuery minWidth={801}>
              <li
                id={`${this.props.currentModel.id}_main_storynavitem`}
                onClick={this.onClick()}>
                <NavLink
                  id={`${this.props.currentModel.id}_main_button`}
                  to={`/objects/${this.props.currentModel.id}/main`}
                  activeClassName={style.active2}
                  onClick={() => this.props.setActiveRoute("main")}>
                  <div className={style.navMainParent}>
                    {/* <div className={this.getMainIcon()}>
                                <div
                                  className={
                                    this.props.currentRoute === "main"
                                      ? style.fill
                                      : style.noFill
                                  }></div>
                              </div> */}
                    {this.drawMainButton()}
                  </div>
                </NavLink>
              </li>
            </MediaQuery>
            {this.props.currentModel.description.map((object, i) => (
              <li
                key={i}
                id={`${
                  this.props.currentModel.id
                }_${object.title.toLowerCase()}_storynavitem`}
                onClick={this.onClick()}>
                <NavLink
                  style={this.getNavColor()}
                  to={`/objects/${
                    this.props.currentModel.id
                  }/${object.title.toLowerCase()}`}
                  activeClassName={style.active2}
                  key={i}
                  onClick={() => this.test(`${object.title.toLowerCase()}`)}>
                  {`${object.title}`}
                </NavLink>
              </li>
            ))}
            <li
              style={this.getSlideStyle()}
              className={style.slide}
              id={`${this.props.currentModel.id}_storynavSlider`}></li>
          </ul>
        </div>
      </div>
    );
  }
}
