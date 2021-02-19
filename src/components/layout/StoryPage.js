import React, { Component, Suspense } from "react";
import style from "../style/StoryPage.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import ModelNameBox from "../ModelNameBox";
import StoryNav from "../StoryNav";
import ModelPanel from "../ModelPanel";
import StoryPanel from "../StoryPanel";
import IntroPanel from "../IntroPanel";
import MediaQuery from "react-responsive";
const isMobile = window.matchMedia("(max-width: 675px)").matches;
// const ModelPanel = React.lazy(() => import("../ModelPanel"));
// const ModelNameBox = React.lazy(() => import("../ModelNameBox"));
// const StoryPanel = React.lazy(() => import("../StoryPanel"));
// const IntroPanel = React.lazy(() => import("../IntroPanel"));
export default class StoryPage extends Component {
  state = {
    currentRoute: "main",
    previousRoute: "main",
    storyPanelMounted: false,
    designContent: "intro",
    materialsContent: "intro",
    routes: null,
  };

  getRoutes = () => {
    var routes = [];
    var desc = this.props.currentModel.description;
    for (var i = 0; i < desc.length; i++) {
      routes.push(desc[i].title.toLowerCase());
    }
    this.setState({ routes: routes });
    console.log("routes", routes);
  };
  /****************************************************************
   * When unmounting remove the resize listener.
   ****************************************************************/
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize, false);
  }

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

  /***************************************************************
   * When mounting, set the current route by checking the last
   * index of the url.
   * Add the risize listener for the page. Resize listener is
   * responsible for keeping the current section scrolled to.
   ***************************************************************/
  componentDidMount() {
    // this.setState({ storyPanelMounted: true });
    // window.addEventListener("load", this.loaded);
    var route = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );
    console.log("route 1", route);
    this.getRoutes();
    if (
      this.routeValid(
        window.location.href.substring(
          window.location.href.lastIndexOf("/") + 1
        )
      )
    ) {
      this.setState({
        currentRoute: route,
      });
    } else {
      console.log("in else", window.location.href);
      window.history.pushState(
        {},
        null,
        window.location.href.split("/").slice(0, -1).join("/") + "/main"
      );
      this.setState({
        currentRoute: "main",
      });
    }
    if (route !== "intro" && route !== "main") {
      console.log(
        "route",
        document.getElementById(`${this.props.currentModel.id}_${route}`)
      );
      document
        .getElementById(`${this.props.currentModel.id}_${route}`)
        .scrollIntoView({ block: "start", inline: "nearest" });
    }
    window.addEventListener("resize", this.onResize, false);
    var el = document.getElementById("StoryPanel");
    console.log("Story Panel", el);
    // el.addEventListener("touchmove", this.handleSwipe, false);
  }

  handleSwipe = () => {
    console.log("Swiping");
  };

  /***************************************************************
   * Function controls resize event for the story panels.
   * On resize, scrollIntoView is called to adjust the scrolling
   * of the storyPanel. Otherwise, resizing causes the panel
   * to scroll into sections that are not meant to be visible.
   ***************************************************************/
  onResize = () => {
    if (
      this.state.storyPanelMounted &&
      this.state.currentRoute !== "intro" &&
      this.state.currentRoute !== "main"
    ) {
      document
        .getElementById(
          `${this.props.currentModel.id}_${this.state.currentRoute}`
        )
        .scrollIntoView({ block: "start", inline: "nearest" });
    }
  };

  /***************************************************************
   * Function to set a flag telling this component that the story
   * panel has been mounted. Otherwise, the function
   * scrollIntoView will trigger errors.
   ***************************************************************/
  isStoryMounted = (val) => {
    if (val === true) {
      this.setState({ storyPanelMounted: true });
    }
  };

  /***************************************************************
   * Function to set the active route in the url.
   * Arguments:
   * route: the destination route.
   ***************************************************************/
  setActiveRoute = (route) => {
    var temp = this.state.currentRoute;
    if (temp !== route) {
      window.history.pushState(
        {},
        null,
        window.location.href.split("/").slice(0, -1).join("/") + `/${route}`
      );

      this.setState({ currentRoute: route, previousRoute: temp });
    }
  };

  /***************************************************************
   * Function returns the previous route, and the currentRoute, or
   * destination route. These values are used to control the panel
   * transitions.
   ***************************************************************/
  transition = () => {
    return [this.state.previousRoute, this.state.currentRoute];
  };

  /***************************************************************
   * Function to saet the state of the current hotspot content.
   * Arguments
   ***************************************************************/
  setHotspotContent = (hsContent, hsCategory) => {
    if (hsCategory === "design") {
      this.setState({ designContent: hsContent });
    } else if (hsCategory === "materials") {
      this.setState({ materialsContent: hsContent });
    }
  };

  /***************************************************************
   * Function to reset the active hotspot content for materials
   * or design. Returns the active hotspot content to the "intro"
   * for either materials or design.
   ***************************************************************/
  resetHotspotContent = () => {
    if (this.state.currentRoute === "design") {
      this.setState({ designContent: "intro" });
    } else if (this.state.currentRoute === "materials") {
      this.setState({ materialsContent: "intro" });
    }
  };

  render() {
    console.log("storypage props", this.props);
    return (
      <div
        className={[style.parent].join(" ")}
        id={`${this.props.currentModel.id}_storypage`}>
        {/* <Router> */}
        <StoryNav
          currentModel={this.props.currentModel}
          currentRoute={this.state.currentRoute}
          setActiveRoute={this.setActiveRoute}
        />
        {/* <Suspense> */}
        <MediaQuery minWidth={801}>
          <ModelNameBox
            currentModel={this.props.currentModel}
            transition={this.transition()}
          />
        </MediaQuery>
        <Suspense fallback={<div></div>}>
          <IntroPanel
            currentModel={this.props.currentModel}
            currentRoute={this.state.currentRoute}
            transition={this.transition()}
            setActiveRoute={this.setActiveRoute}
            routes={this.state.routes}
          />
        </Suspense>
        {/* <Suspense fallback={<div></div>}> */}
        <StoryPanel
          currentModel={this.props.currentModel}
          currentRoute={this.state.currentRoute}
          transition={this.transition()}
          mounted={this.isStoryMounted}
          designContent={this.state.designContent}
          materialsContent={this.state.materialsContent}
          onBackButton={this.resetHotspotContent}
          setActiveRoute={this.setActiveRoute}
          routes={this.state.routes}
        />
        {/* </Suspense> */}
        <Suspense fallback={<div>loading</div>}>
          <ModelPanel
            setActiveRoute={this.setActiveRoute}
            currentRoute={this.state.currentRoute}
            currentModel={this.props.currentModel}
            designContent={this.state.designContent}
            materialsContent={this.state.materialsContent}
            transition={this.transition()}
            //props passed for the map component
            models={this.props.models}
            categories={this.props.categories}
            setCategory={this.props.setCategory}
            center={this.props.center}
            setHotspotContent={this.setHotspotContent}
          />
        </Suspense>
        {/* </Router> */}
      </div>
    );
  }
}
