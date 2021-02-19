import React, { Component, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppState from "./AppState";
// import { lethbridge } from "./Maps/locations";
import MainMenu from "./components/MainMenu";
import ThemeContext from "./components/ThemeContext";
import MediaQuery from "react-responsive";
// import About from "./components/pages/About";
// import My404Page from "./components/pages/My404Page";
// // import MapView from "./components/layout/MapView";
// import RTIViewer from "./components/RTIViewer";
import LightingButton from "./components/LightingButton";
import _ from "lodash";
// import ModelRing from "./components/ModelRing";
//import StoryPage from "./components/layout/StoryPage";
// import ModelUniverse from "./components/ModelUniverse";
// import ModelExplore from "./components/ModelExplore";
const About = React.lazy(() => import("./components/pages/About"));
const My404Page = React.lazy(() => import("./components/pages/My404Page"));
const RTIViewer = React.lazy(() => import("./components/RTIViewer"));
const StoryPage = React.lazy(() => import("./components/layout/StoryPage"));
// const ModelUniverse = React.lazy(() => import("./components/ModelUniverse"));
const ModelExplore = React.lazy(() => import("./components/ModelExplore"));
let resizeTimer;
class App extends Component {
  /************************************************************
   * App state has been moved to an external file, AppState.js.
   ***********************************************************/
  state = AppState;

  componentDidUpdate() {
    // this.setState({ defaultTheme: "light" });
    // this.setTheme("light");
  }

  componentDidMount() {
    if (document.readyState === "complete") {
      var app = document.getElementById("App");
      //   console.log("appI", app);
      app[0].classList.remove("preload");
    } else {
      //   // window.onload = this.loaded;
      window.addEventListener("load", this.loaded);
      // window.addEventListener("DOMContentLoaded", this.loaded);
    }
    // console.log("appI", app);
    // window.addEventListener("DOMContentLoaded", this.loaded);
    window.addEventListener("resize", this.resize, false);
    var setTheme = this.state.defaultTheme;

    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const cachedTheme = localStorage.getItem("theme");
    console.log("localStorage Theme", cachedTheme);
    if (cachedTheme) {
      setTheme = JSON.parse(cachedTheme);
    } else if (darkOS) {
      setTheme = "dark";
    } else {
      setTheme = this.state.defaultTheme;
    }
    // setTheme = "dark";
    //  if (setTheme !== this.state.theme) {
    this.setState({ defaultTheme: setTheme });
    // }
    console.log("setTheme", setTheme);
    localStorage.setItem("theme", JSON.stringify(setTheme));
    // this.applyTheme(this.state.themes, setTheme);
    // this.props.setAppTheme(setTheme);

    // ModelViewerElement.modelCacheSize = 1;
  }

  loaded = () => {
    // if (document.readyState === "interactive") {
    setTimeout(function () {
      var app = document.getElementById("App");
      console.log("appI", app);
      app.classList.remove("preload");
    }, 1000);
  };

  resize = () => {
    var app = document.body;
    if (app !== null) {
      app.classList.add("preload");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        var x = app.offsetHeight;
        var y = app.children[1].offsetHeight;
        app.classList.remove("preload");
      }, 1000);
    }
  };
  /************************************************************
   * Function that takes an obj as an argument,
   * and sets the Apps currentModel to obj.
   ***********************************************************/
  changeName = (obj) => {
    this.setState({ currentModel: obj });
  };

  setTheme = (theme) => {
    // if (this.state.defaultTheme !== theme) {
    if (theme === "dark") {
      this.setState({ defaultTheme: "light" });
    } else if (theme === "light") {
      this.setState({ defaultTheme: "dark" });
    }
    // }
  };
  /***********************************************************
   * Function used to set the currentCategory of
   * the state to a new value. Used for filtering
   * artifact results.
   * Arguments:
   * option: The AppState's currentCategory's
   * subcategory (ex. Materials )
   * category: The value to set option to.
   **********************************************************/
  setCategory = (option, category) => {
    var tempCat;
    tempCat = [];
    for (var i = 0; i < this.state.currentCategory.length; i++) {
      var x = {};
      if (this.state.currentCategory[i].title === category) {
        x.title = this.state.currentCategory[i].title;
        x.options = option;
        tempCat[i] = x;
      } else {
        x.title = this.state.currentCategory[i].title;
        x.options = this.state.currentCategory[i].options;
        tempCat[i] = x;
      }
    }
    this.setState({ currentCategory: tempCat });
  };

  /**********************************************************
   * Function resets the currentCategory to "All"
   * for each subCategory.
   * Arguments: none
   *********************************************************/
  resetCat = () => {
    var tempCat;
    tempCat = [];
    for (var i = 0; i < this.state.categories.length; i++) {
      var x = {};
      x.title = this.state.categories[i].title;
      x.options = "All";
      tempCat[i] = x;
    }
    this.setState({ currentCategory: tempCat });
  };
  // setTheme = () => {
  //   var name = "light";
  //   var themeColours = {
  //     light: {
  //       color: "#2d3e4e",
  //       backgroundColor: "#FFFFFF",
  //     },
  //     dark: {
  //       color: "white",
  //       backgroundColor: "#030303",
  //     },
  //   };

  //   // document.body.style.backgroundColor = themeColours.dark.backgroundColor;
  //   document.body.style.setProperty("--color", themeColours[name].color);
  //   document.body.style.setProperty(
  //     "--background-color",
  //     themeColours[name].backgroundColor
  //   );
  //   document.body.style.setProperty("--h1-color", themeColours[name].color);
  // };
  // componentDidMount() {
  //   this.setTheme();
  // }
  render() {
    return (
      <div className={["App", "preload"].join(" ")} id="App">
        {/* Router for rendering the app in a given state. All state navigations must be inside of router. */}

        <LightingButton
          id={"lighting"}
          onClick={() => this.setTheme(this.state.defaultTheme)}
          text="&#9788;"
        />
        <ThemeContext
          defaultTheme={this.state.defaultTheme}
          themes={this.state.themes}
          setAppTheme={this.setTheme}>
          <Router>
            <MainMenu destinations={this.state.destinations} />
            {/* Switch ensures that only the first qualifying route is chosen. */}
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {/* Route for home page */}
                {/* <MediaQuery minWidth={675}> */}
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    // <>
                    // <Suspense fallback={<div>loading..</div>}>
                    //   <ModelUniverse
                    //     models={this.state.models}
                    //     currentModel={this.state.currentModel}
                    //     categories={this.state.categories}
                    //     setCategory={this.setCategory}
                    //     resetCategory={this.resetCat}
                    //     currentCategory={this.state.currentCategory}
                    //     destinations={this.state.destinations}
                    //     // onWheel={onWheel}
                    //   />
                    // </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                      <ModelExplore
                        models={this.state.models}
                        currentModel={this.state.currentModel}
                        categories={this.state.categories}
                        setCategory={this.setCategory}
                        resetCategory={this.resetCat}
                        currentCategory={this.state.currentCategory}
                        destinations={this.state.destinations}
                      />
                    </Suspense>
                    // </>
                  )}
                />
                {/* </MediaQuery> */}
                {/* Mapview Route */}
                {/* <Route
                exact
                path="/mapview"
                render={(props) => (
                  <MapView
                    models={this.state.models}
                    categories={this.state.categories}
                    setCategory={this.setCategory}
                    currentCategory={this.state.currentCategory}
                    center={lethbridge}
                    currentModel={this.state.currentModel}
                    resetCategory={this.resetCat}
                    view={"mapview"}
                  />
                )}
              /> */}
                {/* Dynamically generate routes based on Artifacts found in the thiis.state.models array.
             Adding anotother artifact will generate another route to that artifacts description page. 
             ex. blackfootproject.com/artifacts/artifactname.*/}
                {this.state.models.map((object, i) => (
                  <Route
                    key={i}
                    exact
                    path={`/objects/${object.id}/:section`}
                    render={(props) => (
                      <Suspense fallback={<div>loading..</div>}>
                        <StoryPage
                          currentModel={object}
                          models={this.state.models}
                          changeName={this.changeName}
                          categories={this.state.categories}
                          setCategory={this.setCategory}
                          currentCategory={this.state.currentCategory}
                          // center={lethbridge}
                        />
                      </Suspense>
                    )}
                  />
                ))}
                {this.state.models.map((object, i) => (
                  <Route
                    key={i}
                    exact
                    path={`/rti_${object.id}`}
                    render={(props) => (
                      <Suspense fallback={<div>loading..</div>}>
                        <RTIViewer currentModel={`./webrti/${object.id}`} />
                      </Suspense>
                    )}
                  />
                ))}

                {/* About page route. */}
                <Suspense fallback={<div>loading..</div>}>
                  <Route exact path="/about" component={About} />
                </Suspense>
                {/* Default route for error 404 */}
                <Suspense fallback={<div>loading..</div>}>
                  <Route component={My404Page} />
                </Suspense>
              </Switch>
            </Suspense>
            {/* <div className={AppStyle.navCluster}>
            <Hamburger destinations={this.state.destinations} />
            <NavBox name={"home"} link={"/"} />
          </div> */}
          </Router>
        </ThemeContext>
      </div>
    );
  }
}

export default App;
