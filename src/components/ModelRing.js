import React, { PureComponent, Suspense } from "react";
import ActiveModel from "./ActiveModel";
import HelpButton from "./HelpButton";
import $ from "jquery";
import style from "./style/ModelRing.module.css";
import _ from "lodash";
import ModelRingIcon from "./ModelRingIcon";
import ModelUniverseControls from "./ModelUniverseControls";
var xDown = null;
var yDown = null;
/**************************************************************************************
 * ModelContainer Class component. This component hold the current active model, as
 * well as the ring of ModelIcon components surrounding the current model. Depending on
 * Desired functionality, this component might be used only on the home page, and
 * another component may be used to render the model for an artifacts designated page.
 ******************************************************************************************/
export default class ModelRing extends PureComponent {
  state = {
    currentModel: this.props.currentModel,
    hoverable: true,
    angle: 0,
    radius: document.documentElement.clientWidth * 1.5,
    iconSize:
      (2 * Math.PI * (document.documentElement.clientWidth * 1.5)) /
      this.props.models.length,
    // models: this.props.models,
    currentNum: 0,
    filterCount: 0,
    fields: null,
    currentCategory: this.props.currentCategory,
    activeArtifacts: null,
    delta: 0,
    filterOpen: 0,
  };

  /**************************************************
   * Function responsible for toggling the filter
   * open and closed.
   **************************************************/
  toggleFilter = () => {
    if (this.state.filterOpen === 0) {
      this.setState({ filterOpen: 1 });
    } else {
      this.setState({ filterOpen: 0 });
    }
  };
  /*
Function which determines grid placement, depending on if the page is the home page
*/
  getStyle = () => {
    return {
      // gridColumn: this.props.home ? "4 / span 6" : "6 / span 6",
      display: this.props.hidden ? "none" : "",
    };
  };
  //set the current model to reflect which Model Icon was clicked.
  setActiveModel = (obj) => {
    // this.setState({ hoverable: false });
    this.setState({ currentModel: obj.Model.mdl, hoverable: false });
    this.props.changeName(obj);
  };

  //when on the home page, this function handles hover functionality.
  mouseHover = (obj) => {
    this.setState({ currentModel: obj.Model.mdl });
  };

  /*************************************************
   * Function finds the list of all artifacts that are
   * applicable to the current filter.
   * Arguments:
   * models: an array of artifacts containing their
   * applicable categories.
   * categories: the current categories of the active
   * filter.
   * Return:
   * true if the artifact matches, and
   * false if it does not match.
   ************************************************/
  getActiveArtifacts = (models, categories) => {
    var arCount = [];
    for (var i = 0; i < models.length; i++) {
      if (this.checkCategory(models[i], categories) === true) {
        arCount.push(models[i]);
      }
    }
    // this.setState({ filterCount: arCount });
    return arCount;
  };

  /*************************************************
   * Function checks an artifact to see if its
   * categories match the currentCategory prop, set
   * by the filter.
   * Arguments:
   * artifact: The artifact that is being checked.
   * Return:
   * true if the artifact matches, and
   * false if it does not match.
   ************************************************/
  checkCategory = (artifact) => {
    for (var i = 0; i < artifact.categories.length; i++) {
      for (var j = 0; j < this.props.currentCategory.length; j++) {
        if (
          artifact.categories[i].title === this.props.currentCategory[j].title
        ) {
          if (
            artifact.categories[i].options.includes(
              this.props.currentCategory[j].options
            ) ||
            this.props.currentCategory[j].options === "All"
          ) {
            break;
          } else {
            return false;
          }
        }
      }
    }
    return true;
  };
  //Function used to dynamically space all model icons around the circle
  distributeFields = () => {
    var radius = this.state.radius;
    //var fields = $(".field"),
    //fields is used as the identifier. Unfortunately,
    //React generates a css string for us as the field identifier, which changes on a system to system basis when compiling
    var fields = $(".ModelRingIcon_field__2kZu3"),
      container = $("#RingContainer"),
      width = container.width(),
      height = container.height(),
      angle = 0,
      step = (2 * Math.PI) / fields.length;
    fields.each(function () {
      var x = Math.round(
        width / 2 + radius * Math.cos(angle) - $(this).width() / 2
      );
      var y = Math.round(
        height / 2 + radius * Math.sin(angle) - $(this).height() / 2
      );
      $(this).css({
        left: x + "px",
        top: y + "px",
      });
      angle += step;
    });
  };

  onResize = () => {
    var tempRadius = document.documentElement.clientWidth * 1.5;
    this.setState({
      radius: tempRadius,
      iconSize: (2 * Math.PI * tempRadius) / this.props.models.length,
    });
    setTimeout(this.distributeFields, 0);
  };

  //After mounting the component, distribute the modelicons
  componentDidMount() {
    var active = this.getActiveArtifacts(
      this.props.models,
      this.props.currentCategory
    );
    this.setState({
      // radius: tempRadius,
      // iconSize: (2 * Math.PI * this.state.radius) / this.props.models.length,
      activeArtifacts: active,
    });
    // this.state.activeArtifacts = active;
    const el = document.getElementById("RingOuterBox");
    if (el) {
      // el.addEventListener("wheel", this.onWheel, { passive: true });
      el.addEventListener(
        "wheel",
        _.debounce(this.onWheel, 200, { leading: true, trailing: false })
      );
      el.addEventListener(
        "touchmove",
        _.debounce(this.handleTouchMove, 100, {
          trailing: false,
          leading: true,
        })
      );
      el.addEventListener("touchstart", this.handleTouchStart);
      window.addEventListener("resize", this.onResize);
    }
    window.addEventListener("resize", this.onResize, false);
    this.distributeFields();
  }

  /*************************************************
   * On update, refresh the list of active
   * artifacts.
   ************************************************/
  componentDidUpdate() {
    var active = this.getActiveArtifacts(
      this.props.models,
      this.props.currentCategory
    );
    this.state.activeArtifacts = active;
    // this.state.filterCount = active.length;
    // this.state.filterCount = active.length;
    //Set the state to include the length of the filtered artifacts array
    //Set the activeArtifacts array
    // this.state.filterCount = active.length;
    this.setState({ filterCount: active.length });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize, false);
  }

  onWheel = (event) => {
    console.log("scrolling universe", this.state.currentModel);
    // if (event.deltaY < 0) {
    //   if (this.state.delta > 0) {
    //     this.state.delta = 0;
    //   }
    //   this.state.delta += event.deltaY;
    //   if (this.state.delta <= -500) {
    //     this.setState({ delta: 0 });
    //     this.findPrevious();
    //   }
    // } else if (event.deltaY > 0) {
    //   if (this.state.delta < 0) {
    //     this.state.delta = 0;
    //   }
    //   this.state.delta += event.deltaY;
    //   if (this.state.delta >= 500) {
    //     this.setState({ delta: 0 });
    //     this.findNext();
    //   }
    // }
    if (this.state.filterOpen === 0) {
      if (event.deltaY < 0) {
        this.findPrevious();
      } else if (event.deltaY > 0) {
        this.findNext();
      }
    }
  };
  /*************************************************
   * Function that is used to rotate the
   * ModelUniverse to the next model. This will
   * only visit models that are currently
   * applicable to the filter.
   ************************************************/
  findNext = () => {
    const current = (element) => element.id === this.state.currentModel.id;
    var currentI = this.props.models.findIndex(current);
    var stepSize = 360 / this.props.models.length;
    var tempAngle = this.state.angle;
    var tempI;
    var i;
    tempI = currentI;

    for (i = 0; i < this.props.models.length; i++) {
      if (tempI + 1 === this.props.models.length) {
        tempI = 0;
      } else {
        tempI += 1;
      }
      // This active if check should be more efficient, as it is fewer loops to check.
      if (
        this.checkModelActive(
          this.props.models[tempI],
          this.state.activeArtifacts
        ) === true
      ) {
        this.state.currentNum = currentI;
        this.setState({
          currentModel: this.props.models[tempI],
          angle: (tempAngle -= stepSize * (i + 1)),
          currentNum: tempI,
        });
        break;
      }
    }
    // }
  };

  /*************************************************
   * Function that is used to rotate the
   * ModelUniverse to the next model. This will
   * only visit models that are currently
   * applicable to the filter.
   ************************************************/
  findPrevious = () => {
    const current = (element) => element.id === this.state.currentModel.id;
    var currentI = this.props.models.findIndex(current);

    var stepSize = 360 / this.props.models.length;
    var tempAngle = this.state.angle;
    var tempI;
    var i;
    tempI = currentI;
    for (i = 0; i < this.props.models.length; i++) {
      if (tempI === 0) {
        tempI = this.props.models.length - 1;
      } else {
        tempI -= 1;
      }
      if (
        this.checkModelActive(
          this.props.models[tempI],
          this.state.activeArtifacts
        ) === true
      ) {
        this.setState({
          currentModel: this.props.models[tempI],
          angle: (tempAngle += stepSize * (i + 1)),
          currentNum: tempI,
        });
        break;
      }
    }
  };

  /*************************************************
   * Helper function used in findNext() and
   * findPrevious(). Determines if an artifact can
   * be found in the list of active artifacts.
   * Arguments:
   * obj: the artifact we are testing to see if it
   * is active.
   * activeModels: an array of models that are
   * active.
   * Return:
   * true if obj is found in activeModels,
   * false otherwise.
   ************************************************/
  checkModelActive = (obj, activeModels) => {
    if (activeModels !== null) {
      for (var i = 0; i < activeModels.length; i++) {
        if (activeModels[i].id === obj.id) {
          return true;
        }
      }
      return false;
    }
  };
  selectiveRender = (object, i) => {
    if (!(object.id === this.state.currentModel.id)) {
      return (
        <ModelRingIcon
          obj={object}
          key={i}
          setActiveModel={this.setActiveModel}
          mouseHover={this.mouseHover}
          hoverable={this.props.hoverable}
          currentCategory={this.props.currentCategory}
          size={this.state.iconSize}
        />
      );
    }
  };

  /**************************************************
   * Functions control the swipe motion and actions
   * when in mobile.
   **************************************************/
  handleSwipe = async (direction) => {
    // var currentI = this.props.routes.indexOf(this.props.currentRoute);
    if (this.state.filterOpen === 0) {
      if (direction === "up") {
        this.findNext();
      } else if (direction === "down") {
        this.findPrevious();
      }
    }
  };
  getTouches = (evt) => {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  };
  handleTouchStart = (evt) => {
    const firstTouch = this.getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  handleTouchMove = (evt) => {
    evt.preventDefault();
    if (!xDown || !yDown) {
      return;
    }
    // var currentI = this.props.routes.indexOf(this.props.currentRoute);
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        // this.handleSwipe("left");
        // this.goto(this.props.routes[currentI + 1]);
      } else {
        /* right swipe */
        // this.handleSwipe("right");
        // this.goto(this.props.routes[currentI - 1]);
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
        this.handleSwipe("up");
      } else {
        /* down swipe */
        this.handleSwipe("down");
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
    evt.preventDefault();
  };
  /************************************************************/

  render() {
    console.log("rendering ring: ", window.navigator.connection);
    return (
      <div className={style.outerBox} style={this.getStyle()} id="RingOuterBox">
        <div className={style.helpContainer}>
          <HelpButton
            helpMessages={[
              { state: "ModelUniverse", helpMessage: "Model Ring Help" },
            ]}
            helpState={"ModelUniverse"}
          />
        </div>
        <div
          id="RingContainer"
          className={style.container}
          style={{
            width: `${this.state.radius * 2}px`,
            height: `${this.state.radius * 2}px`,
            transform: `translateX(-44%) rotateZ(${this.state.angle}deg)`,
          }}>
          <div
            style={{
              width: `${this.state.radius * 2}px`,
              height: `${this.state.radius * 2}px`,
            }}></div>
          <Suspense>
            {this.props.models.map((object, i) => (
              <ModelRingIcon
                obj={object}
                key={i}
                num={i}
                currentNum={this.state.currentNum}
                // setActiveModel={this.setActiveModel}
                mouseHover={this.mouseHover}
                hoverable={this.props.hoverable}
                currentCategory={this.props.currentCategory}
                angle={this.state.angle}
                currentModel={this.state.currentModel}
                size={this.state.iconSize}
                // currentModel={object}
                activeArtifacts={this.state.activeArtifacts}
                checkModelActive={this.checkModelActive}
                numArtifacts={this.props.models.length}
              />
            ))}
          </Suspense>
        </div>
        <div className={style.arrowNavBox}>
          <div
            className={style.arrowNavButton}
            onClick={() => this.findPrevious()}></div>
          <div
            className={style.arrowNavButton}
            style={{ transform: "rotate(-90deg)" }}
            onClick={() => this.findNext()}></div>
        </div>
        <ModelUniverseControls
          findPrevious={this.findPrevious}
          findNext={this.findNext}
          categories={this.props.categories}
          currentCategory={this.props.currentCategory}
          setCategory={this.props.setCategory}
          resetCategory={this.props.resetCategory}
          artifactCount={this.props.models.length}
          filterCount={this.state.filterCount}
          // countActiveArtifacts={this.countActiveArtifacts}
          activeArtifacts={this.state.activeArtifacts}
          models={this.props.models}
          toggleFilter={this.toggleFilter}
        />
      </div>
    );
  }
}
// ModelRing.defaultProps = {
//   hidden: "None",
// };
