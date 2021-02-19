import React, { Component, Suspense } from "react";
import HelpButton from "./HelpButton";
import ModelContainer from "./ModelContainer";
// import MapContainer from "./MapContainer";
// import ModelInfoContainer from "./ModelInfoContainer";
import RTIViewer from "./RTIViewer";
import RadioContainer from "./RadioContainer";
import style from "./style/ModelPanel.module.css";
import MediaQuery from "react-responsive";
import { NavLink } from "react-router-dom";

// const ModelContainer = React.lazy(() => import("./ModelContainer"));
const MapContainer = React.lazy(() => import("./MapContainer"));
const ModelInfoContainer = React.lazy(() => import("./ModelInfoContainer"));
/**********************************************************
 * ModelPanel class component is an artifact detail page
 * component that is responsible for containing the
 * InfoWindow, the RTI, MapView, and Model-viewer.
 **********************************************************/
export default class ModelPanel extends Component {
  state = {
    activeContainer: "Model",
    activeInfoContainer: false,
    loaded: false,
    lastRoute: window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    ),
  };

  componentDidMount() {
    // get the current route
    var route = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );
    if (route === "main") {
      this.setState({ lastRoute: "intro", isFullscreen: true });
    } else {
      this.setState({ lastRoute: route, isFullscreen: false });
    }
  }

  componentDidUpdate() {
    // On update, change the last route to the new route
    if (
      this.props.currentRoute !== "main" &&
      this.props.currentRoute !== this.state.lastRoute
    ) {
      this.setState({ lastRoute: this.props.currentRoute });
    }
  }
  /**********************************************************
   * Function sets the currently visible container
   * (3D, RTI, Map) and makes a special check to open the
   * InfoWindow component, if it is clicked.
   * Arguments:
   * container: the container that we want to display.
   * Returns: css class styles.
   **********************************************************/
  selectContainer = (container) => {
    //handles info container css animation
    if (container === "Info") {
      if (this.state.activeInfoContainer === true) {
        return style.outerInfo;
      } else {
        return [style.hidden, style.outerInfo].join(" ");
      }
    }
    // handles mobile version of info window.
    else if (container === "InfoMobile") {
      //if main (fullscreen), we allow the infopanel to be positive
      if (
        this.state.activeInfoContainer === true &&
        this.props.currentRoute === "main"
      ) {
        return [style.infoMobile, style.infoMobileMain].join(" ");

        // If info is active but not fullscreen, we allow it to "fall down" into place
      } else if (this.state.activeInfoContainer === true) {
        return style.infoMobile;

        //hide it
      } else {
        return [style.hidden, style.infoMobile].join(" ");
      }
    }
    //should handle case where transition is closed on mobile view

    //handles other containers hidden and showing
    else {
      if (container === this.state.activeContainer) {
        return [style.show, style.transition].join(" ");
      } else {
        return [style.hidden, style.transition].join(" ");
      }
    }
  };

  /**********************************************************
   * Function used to set the ModelPanel state to reflect the
   * active mode.
   **********************************************************/
  getActiveContainer = (active) => {
    // This function is strictly for the radio button communication through the React "Tree"
    // This is some extra logic to keep the ID seperate from the active container.
    if (active === "infoIcon") {
      this.setState({ activeInfoContainer: !this.state.activeInfoContainer });
    } else if (active === "modelIcon") {
      this.setState({ activeContainer: "Model" });
    } else if (active === "rtiIcon") {
      this.setState({ activeContainer: "RTI" });
    } else if (active === "mapIcon") {
      this.setState({ activeContainer: "Map" });
    }
  };

  /**********************************************************
   * Function handles the multitude of different
   * transititions between the different subsections of the
   * Artifact detail pages.
   **********************************************************/
  getModelContainerStyle = () => {
    //if there is no transition, current and previous are the same
    if (this.props.transition[0] === this.props.transition[1]) {
      if (this.props.currentRoute === "main") {
        return [style.MainContainer].join(" ");
      } else if (this.props.currentRoute === "intro") {
        return [
          style.containerRight,
          style.container,
          style.containerVisible,
        ].join(" ");
      }
    } else if (this.props.transition[0] !== this.props.transition[1]) {
      //transition from main to intro
      if (
        this.props.transition[0] === "main" &&
        this.props.transition[1] === "intro"
      ) {
        return [style.container, style.shrink, style.containerLeft].join(" ");
      }
      //transition from intro to main
      else if (
        this.props.transition[0] === "intro" &&
        this.props.transition[1] === "main"
      ) {
        return [style.container, style.grow, style.containerLeft].join(" ");
      }
      //transition from intro to anything else
      else if (
        this.props.transition[0] === "intro" &&
        this.props.transition[1] !== "main"
      ) {
        return [
          style.container,
          style.shrink,
          style.containerVisible,
          // ContainerStyle.containerLeft,
        ].join(" ");
      }
      //transition from main to anything else
      else if (
        this.props.transition[0] === "main" &&
        this.props.transition[1] !== "intro"
      ) {
        return [
          style.container,
          style.shrink,
          style.containerHidden,
          style.containerLeft,
        ].join(" ");
      }
      //transition from anything to intro
      else if (
        (this.props.transition[0] !== "main" ||
          this.props.transition[0] !== "intro") &&
        this.props.transition[1] === "intro"
      ) {
        return [style.container, style.shrink, style.containerRight].join(" ");
      }
      //transition from anything to main
      else if (
        (this.props.transition[0] !== "intro" ||
          this.props.transition[0] !== "main") &&
        this.props.transition[1] === "main"
      ) {
        return [style.container, style.grow, style.containerLeft].join(" ");
      }
      //transition from anything into anything
      else {
        return [
          style.container,
          style.shrink,
          style.containerHidden,
          style.containerLeft,
        ].join(" ");
      }
    }
  };

  /**************************************************
   * Function responsible for applying opacity to the
   * fullscreen button when it is active
   **************************************************/
  getMainButtonStyle = () => {
    var route = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );
    if (route === "main") {
      return { opacity: "1" };
    } else {
      return { opacity: "0.6" };
    }
  };

  /**************************************************
   * Function to draw the fullscreen (main) button
   * when in mobile.
   **************************************************/
  drawMainButton = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32.18 32.18"
        preserveAspectRatio="xMaxYMax meet"
        className={style.mainButton}
        style={this.getMainButtonStyle()}>
        <defs>
          <style>
            {`.cls-1 {
                fill: none;
            }`}
            {/* If currentRoute is main, we fill the center of the button to be yellow */}
            {`.cls-2 {
                fill: ${this.props.currentRoute === "main" ? "#ffd04e" : "none"}
            }`}
            {/* If the RTI is active, color the icon white, otherwise color it the current theme color */}
            {`.cls-3 {
                clip-path: url(#clip-path);
                fill: ${
                  this.state.activeContainer === "RTI"
                    ? "#ffffff"
                    : "var(--primary-color)"
                };
                position: "relative";
                
            }`}

            {`.cls-4 {
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
              />
              <path
                transform="rotate(9deg)"
                className="cls-4"
                d="M24,7.18l5.79-5.76H27.36a.7.7,0,0,1-.7-.71.7.7,0,0,1,.7-.71h4.12a.71.71,0,0,1,.7.71V4.89a.7.7,0,1,1-1.4,0V2.41L25,8.19a.68.68,0,0,1-1,0A.72.72,0,0,1,24,7.18Z"
              />
              <path
                className="cls-4"
                d="M.7,0H4.82a.71.71,0,0,1,0,1.42H2.39L8.18,7.18a.72.72,0,0,1,0,1,.69.69,0,0,1-1,0L1.39,2.4V4.89A.7.7,0,1,1,0,4.89V.71A.7.7,0,0,1,.7,0Z"
                transform="translate(0)"
              />
              <path
                className="cls-4"
                d="M24,24a.69.69,0,0,1,1,0l5.82,5.79V27.28a.7.7,0,1,1,1.4,0v4.19a.71.71,0,0,1-.7.71H27.36a.71.71,0,0,1,0-1.42h2.42L24,25A.72.72,0,0,1,24,24Z"
                transform="translate(0)"
              />
              <path
                className="cls-4"
                d="M.7,26.57a.7.7,0,0,1,.69.71v2.49L7.21,24a.7.7,0,0,1,1,0,.72.72,0,0,1,0,1L2.39,30.76H4.82a.71.71,0,0,1,0,1.42H.7a.7.7,0,0,1-.7-.71V27.28A.7.7,0,0,1,.7,26.57Z"
                transform="translate(0)"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  };

  /**************************************************
   * Function to toggle between main and the previous
   * route when main is clicked.
   **************************************************/
  onMainClick = () => {
    if (this.props.currentRoute === "main") {
      this.props.setActiveRoute(this.state.lastRoute);
    } else {
      this.props.setActiveRoute("main");
    }
  };
  render() {
    console.log("modelRTI", this.props.rti);
    return (
      <div className={this.getModelContainerStyle()} id="model_panel">
        <RadioContainer
          infoActive={this.state.activeInfoContainer}
          callbackFromParent={this.getActiveContainer}
          rtiExist={this.props.currentModel.Model.rti}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <div className={this.selectContainer("Model")}>
            <ModelContainer
              currentRoute={this.props.currentRoute}
              currentModel={this.props.currentModel}
              setHotspotContent={this.props.setHotspotContent}
              designContent={this.props.designContent}
              materialsContent={this.props.materialsContent}
            />
          </div>
        </Suspense>
        {/* Render a help button in the top right of the panel, 
        which changes its help message based on the mode. */}
        <div className={style.helpContainer}>
          <HelpButton
            helpMessages={[
              { state: "Model", helpMessage: "Click/tap and hold on the 3D model to rotate it. Zoom in and out using your mouse wheel or by pinching with your fingers on mobile.  The 3D model was generated using photogrammetry. Learn more about how we captured the images with this technology." },
              { state: "RTI", helpMessage: "Move the light source on the image by click on the light icon near the RTI icon, then click and hold your mouse while you move it around the image. Zoom in and out using your mouse wheel or pinching with your fingers on mobile. Reflectance transformation imaging is a photographic method that captures a surface’s shape and colour, resulting in an interactive image. Learn more about how we captured the images with this technology." },
              { state: "Map", helpMessage: "Map Help" },
            ]}
            helpState={this.state.activeContainer}
          />
        </div>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {/* </Suspense> */}
        <MediaQuery maxWidth={800}>
          <NavLink
            id={`${this.props.currentModel.id}_main`}
            to={`/objects/${this.props.currentModel.id}/${
              this.props.currentRoute === "main" ? this.state.lastRoute : "main"
            }`}
            activeClassName={style.active2}
            onClick={
              this.onMainClick
              // this.props.setActiveRoute("main");
            }>
            <div className={style.navMainParent}>{this.drawMainButton()}</div>
          </NavLink>
        </MediaQuery>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {/* <MediaQuery minWidth={801}> */}
        <div
          // className={style.outerInfo}
          className={this.selectContainer("Info")}>
          <button
            className={style.infoClose}
            onClick={() => {
              // this.getActiveContainer("infoIcon");
              this.setState({
                activeInfoContainer: false,
              });
              console.log("Changing Radio", this.state);
            }}>
            <div></div>
          </button>
          <div className={style.info} style={{ zIndex: "1000" }}>
            <Suspense fallback={<div>Loading...</div>}>
              <ModelInfoContainer meta={this.props.currentModel.meta} />
            </Suspense>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
          }}
          className={this.selectContainer("RTI")}
          id={`${this.props.currentModel.id}_rti`}>
          {this.props.currentModel.Model.rti !== undefined &&
            document.readyState === "complete" &&
            this.state.activeContainer === "RTI" && (
              <Suspense fallback={<div>Loading...</div>}>
                {console.log("modelA", this.props.currentModel.id)}
                {/* <RTIViewer
                  currentModel={`/webrti/${this.props.currentModel.id}`}
                /> */}
                <iframe
                  // allowFullScreen
                  scrolling="no"
                  frameborder="0"
                  style={{ width: "100%", height: "100%" }}
                  title={`${this.props.currentModel.id}`}
                  className={style.rti_iframe}
                  src={`/rti_${this.props.currentModel.id.split(" ").join("")}`}
                />
              </Suspense>
            )}
        </div>
        <div
          className={this.selectContainer("Map")}
          id={`${this.props.currentModel.id}_map`}>
          {document.readyState === "complete" &&
            this.state.activeContainer === "Map" && (
              <Suspense fallback={<div>Loading...</div>}>
                <MapContainer
                  models={this.props.currentModel}
                  currentCategory={this.props.currentCategory}
                  currentModel={this.props.currentModel}
                  mapStyle={this.props.mapStyle}
                  center={this.props.currentModel.mapMarker}
                  openInfoWindow={true}
                />
              </Suspense>
            )}
        </div>
      </div>
    );
  }
}
