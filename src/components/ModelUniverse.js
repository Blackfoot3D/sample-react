/* eslint-disable react/no-direct-mutation-state */
import React, { PureComponent } from "react";
import $ from "jquery";
import style from "./style/ModelUniverse.module.css";
import MediaQuery from "react-responsive";
import ModelUniverseIcon from "./ModelUniverseIcon";
import ModelUniverseControls from "./ModelUniverseControls";
import HelpButton from "./HelpButton";
import _ from "lodash";

// const ModelUniverseIcon = React.lazy(() => import("./ModelUniverseIcon"));
/**************************************************************************************
 * ModelUniverse class component. This component is responsible for rendering the 3D
 * ring of models for users to explore. This component uses the array of artifacts
 * stored in AppState to generate a dynamicly sizing ring, and distributes each
 * artifact around the perimeter of the ring.
 *************************************************************************************/
export default class ModelUniverse extends PureComponent {
  state = {
    currentModel: this.props.currentModel,
    hoverable: true,
    angle: 0,
    currentNum: 0,
    radius: document.documentElement.clientWidth * 0.8,
    iconSize: 0,
    filterCount: 0,
    fields: null,
    currentCategory: this.props.currentCategory,
    activeArtifacts: null,
    delta: 0,
  };

  /*********************************************************
   * When component mounts, perform several operations which
   * are required for the ModelUniverse to function.
   ********************************************************/
  componentDidMount() {
    //Set the size of the icons based on the ring size, and the number of total artifacts.
    this.setState({
      iconSize: (2 * Math.PI * this.state.radius) / this.props.models.length,
    });
    //Add Listeners for resizing the ring, and navigating the ring using the mouse wheel.
    const el = document.getElementById("modelUniverseOuterBox");
    if (el) {
      // el.addEventListener("wheel", this.onWheel, { passive: true });
      el.addEventListener(
        "wheel",
        _.debounce(this.onWheel, 200, { leading: true, trailing: false })
      );
      window.addEventListener("resize", this.onResize);
    }
    //Run the initial distribution of the icons to space them evenly around the ring.
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

  /**********************************************************
   * When component unmounts, remove the listeners that were
   * added on mount
   *********************************************************/
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
    const el = document.getElementById("modelUniverseOuterBox");
    if (el) {
      el.removeEventListener("wheel", this.onWheel);
    }
  }

  /*************************************************
   * Function used as the onWheel Listener.
   * Scrolling up and down on the mouse wheel
   * rotates the ModelUniverse.
   * Arguments:
   * event: scroll wheel event determining the
   * direction of the scroll
   ************************************************/
  // onWheel = (event) => {
  //   this.state.delta += event.deltaY;
  //   console.log("scrolling universe", this.state.delta);
  //   if (this.state.delta <= -500) {
  //     this.setState({ delta: 0 });
  //     this.findPrevious();
  //   } else if (this.state.delta >= 500) {
  //     this.setState({ delta: 0 });
  //     this.findNext();
  //   }
  // };

  onWheel = (event) => {
    console.log("scrolling universe", this.state.delta);
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
    if (event.deltaY < 0) {
      this.findPrevious();
    } else if (event.deltaY > 0) {
      this.findNext();
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

  /*************************************************
   * Function used as the resize listener. When the
   * window resizes, adjust the size of the icons,
   * calculate a new radius, and redistribute the
   * nodes.
   ************************************************/
  onResize = () => {
    var tempRadius = document.documentElement.clientWidth * 0.8;
    this.setState({
      radius: tempRadius,
      iconSize: (2 * Math.PI * tempRadius) / this.props.models.length,
    });
    // this.componentDidUpdate();
    // this.distributeFields();
    // this.forceUpdate();
    // clearTimeout(this.resizeTimer);
    setTimeout(this.distributeFields, 2000);
  };

  /*************************************************
   * Function used to dynamically space all model
   * icons around the ModelUniverse.
   ************************************************/
  distributeFields = () => {
    // This grabs the parent (modelUniverseInnerContainer) and grabs it's children which
    // should be the models as long as the structure is unchanged.

    if (this.state.fields === null) {
      const parentContainer = document.getElementById(
        "modelUniverseInnerContainer"
      );
      const modelContainers = parentContainer.childNodes;
      this.state.fields = $("." + modelContainers[0].className);
    }
    // var radius = 2100 / 2;
    var radius = this.state.radius;
    //fields is used as the identifier. Unfortunately,
    //React generates a css string for us as the field identifier, which changes on a system to system basis when compiling
    // var fields = $(".ModelUniverseIcon_field__2Oxqm"),
    var container = $("#modelUniverseInnerContainer"),
      width = container.width(),
      height = container.height(),
      // angle = 7.87,
      angle = 1.5708,
      step = (2 * Math.PI) / this.state.fields.length;
    this.state.fields.each(function () {
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

  getBlur = (i) => {
    // console.log("getBlur", i);
    // i += 1;
    var numLeft = Math.floor(this.props.models.length / 2);
    var numRight = this.props.models.length - numLeft;
    var length = this.props.models.length;
    var x;
    if (i < this.state.currentNum) {
      if (this.state.currentNum - i > numLeft) {
        x = length - this.state.currentNum + i;
      } else {
        x = this.state.currentNum - i;
      }
    } else if (i > this.state.currentNum) {
      if (i - this.state.currentNum > numRight) {
        x = length - i + this.state.currentNum;
      } else {
        x = i - this.state.currentNum;
      }
    } else {
      x = 0;
    }
    // console.log("blur val i", x / length);
    // console.log("currentNum", i);
    return x / length;
  };

  render() {
    // console.log("MUV", this.state);
    return (
      <div className={style.outerContainer} id="modelUniverseOuterBox">
        <div className={style.helpContainer}>
          <HelpButton
            helpMessages={[
              { state: "ModelUniverse", helpMessage: "Browse the items using your mouse scroll wheel or the arrows. You can filter the items using the filter feature at the bottom right and click on the item to see the object in detail." },
            ]}
            helpState={"ModelUniverse"}
          />
        </div>
        <div className={style.outerBox}>
          <div
            id="modelUniverseInnerContainer"
            className={style.container}
            //translateZ needs to be the same as the radius that the icons are spanning, otherwise it produces a blurring effect, because of the perspective.
            style={{
              transform: ` perspective(${Math.floor(
                this.state.radius * 0.8
              )}px) translateZ(-${Math.floor(this.state.radius * 1)}px)  
               rotateX(90deg) rotateZ(${this.state.angle}deg) 
              `,
            }}>
            {/* <Suspense fallback={<div>Loading...</div>}> - */}
            {this.props.models.map((object, i) => (
              <ModelUniverseIcon
                obj={object}
                key={i}
                num={i}
                currentNum={this.state.currentNum}
                blur={this.getBlur(i)}
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
            {/* </Suspense> */}
          </div>
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
        />
      </div>
    );
  }
}
