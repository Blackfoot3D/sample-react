// import React from "react";
import React, { Component, Suspense } from "react";
import style from "./style/ModelContainer.module.css";
// import "@google/model-viewer/dist/model-viewer.min.js";
// import Hotspot from "./Hotspot";
const Hotspot = React.lazy(() => import("./Hotspot"));
var mobile = window.matchMedia("(max-width: 800px)").matches;
var modelViewer = null;

const tapDistance = 2;
let panning = false;
let panX = null,
  panY = null;
let startX = null,
  startY = null;
let lastX = null,
  lastY = null;
let metersPerPixel = null;

// import $ from "jquery";
/*****************************************************************
 * ModelContainer class component is responsible for rendering and
 * displaying Model-viewer which contains the currently active
 * model. It also maintains active hotspots for the current model.
 *****************************************************************/
export default class ModelContainer extends Component {
  state = {
    activeHotspots: 0,
    currentHotspotDesign: "none",
    currentHotspotMaterials: "none",
    currentCategory: "none",
    cameraTargetDesign: "auto",
    cameraTargetMaterials: "auto",
    hotspotActivated: false,
    mvRef: null,
    activated: false,
    // MaterialsHSActive:
    //   this.props.currentRoute === "materials" &&
    //   this.state.currentHotspotMaterials !== "none",
    // DesignHSActive:
    //   this.props.currentRoute === "design" &&
    //   this.state.currentHotspotDesign !== "none", // loaded: false
  };

  /*******************************************************
   * Things related to panning
   *******************************************************/
  startPan = () => {
    const orbit = modelViewer.getCameraOrbit();
    const { theta, phi, radius } = orbit;
    const psi = theta - modelViewer.turntableRotation;
    metersPerPixel =
      (0.75 * radius) / modelViewer.getBoundingClientRect().height;
    panX = [-Math.cos(psi), 0, Math.sin(psi)];
    panY = [
      -Math.cos(phi) * Math.sin(psi),
      Math.sin(phi),
      -Math.cos(phi) * Math.cos(psi),
    ];
    modelViewer.interactionPrompt = "none";
  };

  movePan = (thisX, thisY) => {
    const dx = (thisX - lastX) * metersPerPixel;
    const dy = (thisY - lastY) * metersPerPixel;
    lastX = thisX;
    lastY = thisY;

    const target = modelViewer.getCameraTarget();
    target.x += dx * panX[0] + dy * panY[0];
    target.y += dx * panX[1] + dy * panY[1];
    target.z += dx * panX[2] + dy * panY[2];
    modelViewer.cameraTarget = `${target.x}m ${target.y}m ${target.z}m`;

    // This pauses turntable rotation
    modelViewer.dispatchEvent(
      new CustomEvent("camera-change", {
        detail: { source: "user-interaction" },
      })
    );
  };

  recenter = (pointer) => {
    panning = false;
    if (
      Math.abs(pointer.clientX - startX) > tapDistance ||
      Math.abs(pointer.clientY - startY) > tapDistance
    )
      return;
    const rect = modelViewer.getBoundingClientRect();
    const x = pointer.clientX - rect.left;
    const y = pointer.clientY - rect.top;
    const hit = modelViewer.positionAndNormalFromPoint(x, y);
    modelViewer.cameraTarget =
      hit === null ? "auto auto auto" : hit.position.toString();
  };

  onPointerUp = (event) => {
    const pointer = event.clientX ? event : event.changedTouches[0];
    if (
      Math.abs(pointer.clientX - startX) < tapDistance &&
      Math.abs(pointer.clientY - startY) < tapDistance
    ) {
      this.recenter(pointer);
    }
    panning = false;
  };

  /*****************************************************************
   * When the component updates, check if rotation should be enabled
   * or disabled.
   *****************************************************************/
  componentDidUpdate() {
    this.toggleModelRotation();
    console.log("Model Container State: ", this.state.MaterialsHSActive);
  }

  /*****************************************************************
   * When the component unmounts, remove the load listener.
   *****************************************************************/
  componentWillUnmount() {
    window.removeEventListener("load", this.renderModel);
  }
  componentDidMount() {
    // const mvRef = React.createRef();
    // this.setState({ mvRef: mvRef });
    if (mobile === false) {
      // window.addEventListener("mouseover", this.loadmv, { once: true });
      // window.addEventListener("touchmove", this.loadmv, { once: true });
      // window.addEventListener("scroll", this.loadmv, { once: true });
      // window.addEventListener("keydown", this.loadmv, { once: true });
      // window.addEventListener("load", this.loadmv, { once: true });
      window.addEventListener("mouseover", this.renderModel, { once: true });
      window.addEventListener("touchmove", this.renderModel, { once: true });
      window.addEventListener("scroll", this.renderModel, { once: true });
      window.addEventListener("keydown", this.renderModel, { once: true });
      window.addEventListener("load", this.renderModel, { once: true });
      window.addEventListener("resize", () => {
        mobile = window.matchMedia("(max-width: 800px)").matches;
      });
    } else if (document.readyState === "complete") {
      import("@google/model-viewer/dist/model-viewer.min.js").then(
        console.log("Loaded Model-Viewer")
      );
    } else {
      document.onload = import(
        "@google/model-viewer/dist/model-viewer.min.js"
      ).then(console.log("Loaded Model-Viewer"));
    }
  }
  renderModel = () => {
    if (document.readyState === "complete") {
      document.onload = import(
        "@google/model-viewer/dist/model-viewer.min.js"
      ).then(this.loadmv());
    }

    modelViewer = document.querySelector(`#${this.props.currentModel.id}`);
    // mv.cameraTarget = "1m 1m 1m";
    // console.log("mv query", mv.camera);

    modelViewer.addEventListener(
      "mousedown",
      (event) => {
        if (
          !(
            this.props.currentRoute === "materials" &&
            this.state.currentHotspotMaterials !== "none"
          ) &&
          !(
            this.props.currentRoute === "design" &&
            this.state.currentHotspotDesign !== "none"
          )
        ) {
          startX = event.clientX;
          startY = event.clientY;
          panning =
            event.button === 2 ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey;
          if (!panning) return;

          lastX = startX;
          lastY = startY;
          this.startPan();
          event.stopPropagation();
        }
      },
      true
    );

    modelViewer.addEventListener(
      "touchstart",
      (event) => {
        if (
          !(
            this.props.currentRoute === "materials" &&
            this.state.currentHotspotMaterials !== "none"
          ) &&
          !(
            this.props.currentRoute === "design" &&
            this.state.currentHotspotDesign !== "none"
          )
        ) {
          startX = event.touches[0].clientX;
          startY = event.touches[0].clientY;
          panning = event.touches.length === 2;
          if (!panning) return;

          const { touches } = event;
          lastX = 0.5 * (touches[0].clientX + touches[1].clientX);
          lastY = 0.5 * (touches[0].clientY + touches[1].clientY);
          this.startPan();
        }
      },
      true
    );

    modelViewer.addEventListener(
      "mousemove",
      (event) => {
        if (
          !(
            this.props.currentRoute === "materials" &&
            this.state.currentHotspotMaterials !== "none"
          ) &&
          !(
            this.props.currentRoute === "design" &&
            this.state.currentHotspotDesign !== "none"
          )
        ) {
          if (!panning) return;

          this.movePan(event.clientX, event.clientY);
          event.stopPropagation();
        }
      },
      true
    );

    modelViewer.addEventListener(
      "touchmove",
      (event) => {
        if (
          !(
            this.props.currentRoute === "materials" &&
            this.state.currentHotspotMaterials !== "none"
          ) &&
          !(
            this.props.currentRoute === "design" &&
            this.state.currentHotspotDesign !== "none"
          )
        ) {
          if (!panning || event.touches.length !== 2) return;

          const { touches } = event;
          const thisX = 0.5 * (touches[0].clientX + touches[1].clientX);
          const thisY = 0.5 * (touches[0].clientY + touches[1].clientY);
          this.movePan(thisX, thisY);
        }
      },
      true
    );

    modelViewer.addEventListener(
      "mouseup",
      (event) => {
        if (
          !(
            this.props.currentRoute === "materials" &&
            this.state.currentHotspotMaterials !== "none"
          ) &&
          !(
            this.props.currentRoute === "design" &&
            this.state.currentHotspotDesign !== "none"
          )
        ) {
          this.recenter(event);
        }
      },
      true
    );

    modelViewer.addEventListener(
      "touchend",
      (event) => {
        if (
          !(
            this.props.currentRoute === "materials" &&
            this.state.currentHotspotMaterials !== "none"
          ) &&
          !(
            this.props.currentRoute === "design" &&
            this.state.currentHotspotDesign !== "none"
          )
        ) {
          if (event.touches.length === 0) {
            this.recenter(event.changedTouches[0]);
          }
        }
      },
      true
    );
  };
  /*****************************************************************
   * Function used to determine whether or not the model-viewer
   * camera should be rotating. If the currently active section has
   * hotspots (design and materials). Check if they are active and
   * disable auto rotate and interaction prompt if they are.
   * This allows users to be able to read and interact with the
   * model while it remains still.
   *****************************************************************/
  toggleModelRotation = () => {
    //get the model-viewer container by id.
    var container = document.getElementById(`${this.props.currentModel.id}`);
    //if the current route is not materials or design, enable auto-rotate and interaction prompt
    if (window.matchMedia("(max-width: 800px)").matches) {
      container.setAttribute("interaction-prompt", "auto");
      container.removeAttribute("auto-rotate");
    } else {
      if (
        this.props.currentRoute !== "materials" &&
        this.props.currentRoute !== "design"
      ) {
        container.setAttribute("auto-rotate", "auto-rotate");
        container.setAttribute("interaction-prompt", "auto");
      }
      //if the currentRoute is design, check if there is an active design hotspot.
      //if there is an active hotspot for design, disable model rotation and interaction prompt.
      //otherwise enable rotation
      else {
        if (this.props.currentRoute === "design") {
          if (
            this.state.currentHotspotDesign === "none" ||
            this.props.designContent === "intro"
          ) {
            container.setAttribute("auto-rotate", "auto-rotate");
            container.setAttribute("interaction-prompt", "auto");
          } else {
            container.removeAttribute("auto-rotate");
            container.setAttribute("interaction-prompt", "none");
          }
        }
        //if the currentRoute is materials, check if there is an active materials hotspot.
        //if there is an active hotspot for materials, disable model rotation and interaction prompt.
        //otherwise enable rotation
        else if (this.props.currentRoute === "materials") {
          if (
            this.state.currentHotspotMaterials === "none" ||
            this.props.materialsContent === "intro"
          ) {
            container.setAttribute("auto-rotate", "auto-rotate");
            container.setAttribute("interaction-prompt", "auto");
          } else {
            container.removeAttribute("auto-rotate");
            container.setAttribute("interaction-prompt", "none");
          }
        }
      }
    }
  };

  /*****************************************************************
   * Function sets the model-viewer camera-target to look at the
   * currently active hotspot within the active section. if there is
   * an active one. otherwise, camera-target is set to auto.
   *****************************************************************/
  setCameraTarget = () => {
    //if the currentRoute is design, and the designContent is the intro,
    //set camera target to auto. Otherwise, set the camera-target to the
    //hotspot coordinates.
    if (this.props.currentRoute === "design") {
      if (this.props.designContent === "intro") {
        //this.state.currentHotspotDesign = "none";
        return "auto";
      } else {
        return this.state.cameraTargetDesign;
      }
    }
    //if the currentRoute is materials, and the materialsContent is the intro,
    //set camera target to auto. Otherwise, set the camera-target to the
    //hotspot coordinates.
    else if (this.props.currentRoute === "materials") {
      if (this.props.materialsContent === "intro") {
        //this.state.currentHotspotMaterials = "none";
        return "auto";
      } else {
        return this.state.cameraTargetMaterials;
      }
    }
    //default to auto
    else {
      return "auto";
    }
  };

  /*****************************************************************
   * Function sets the active hotspot in the component state.
   * Each applicable route (design and materials) can have one
   * active hotspot. This function sets the hotspot for each route.abs
   * Arguments:
   * hotspot: the hotspot that you want to set as the active one.
   *****************************************************************/
  setActiveHotspot = (hotspot) => {
    //if the currentRoute is "design", check if the hotspot has
    //the same name as the active design hotspot. If the names
    //are the same, set the currentHotspotDesign to "none" to
    //disable that hotspot. Otherwise set hotspot as the current
    //design hotspot.
    if (this.props.currentRoute === "design") {
      if (this.state.currentHotspotDesign === hotspot.name) {
        this.setState({
          currentHotspotDesign: "none",
          currentCategory: this.props.currentCategory,
          cameraTargetDesign: "auto",
        });
      } else {
        this.setState({
          currentHotspotDesign: hotspot.name,
          cameraTargetDesign: hotspot.dataPosition,
        });
      }
    }
    //if the currentRoute is "materials", check if the hotspot has
    //the same name as the active materials hotspot. If the names
    //are the same, set the currentHotspotMaterials to "none" to
    //disable that hotspot. Otherwise set hotspot as the current
    //design hotspot.
    else if (this.props.currentRoute === "materials") {
      if (this.state.currentHotspotMaterials === hotspot.name) {
        this.setState({
          currentHotspotMaterials: "none",
          currentCategory: this.props.currentCategory,
          cameraTargetMaterials: "auto",
        });
      } else {
        this.setState({
          currentHotspotMaterials: hotspot.name,
          cameraTargetMaterials: hotspot.dataPosition,
        });
      }
    }
  };

  /*****************************************************************
   * Function sets a state flag once a hotspot has been interacted
   * with for the first time. This flag is used to control the css
   * class that a hotspot will initially have. This will help users
   * to identify hotspots for the first time, as this is a very
   * unique way for users to interact with a website.
   *****************************************************************/
  hsClicked = () => {
    this.setState({ hotspotActivated: true });
  };

  loadmv = () => {
    console.log("loaded mv");
    var mv = document.getElementById(this.props.currentModel.id);
    mv.setAttribute("src", this.props.currentModel.Model.mdl);
    this.setState({ activated: true });
  };

  onButtonLoad = () => {
    var loadButton = document.getElementById(
      `load3D_${this.props.currentModel.id}`
    );
    loadButton.style.display = "none";
    this.toggleAlert();
    var mv = document.getElementById(`${this.props.currentModel.id}`);
    mv.setAttribute("src", this.props.currentModel.Model.mdl);
    this.setState({ activated: true });
  };

  toggleAlert = () => {
    var alert = document.getElementById("alertPrompt");
    if (alert.style.display === "inline-block") {
      alert.style.display = "none";
    } else {
      alert.style.display = "inline-block";
    }
  };

  /**************************************************
   * Function responsible for rendering Mobile and
   * desktop versions of the Model
   **************************************************/
  renderModelViewer = () => {
    if (mobile === true) {
      return (
        <div
          className={style.fullWindow}
          id={`${this.props.currentModel.id}_modelcontainer`}>
          {/* <div className={[this.getModelContainerStyle(), style.test].join(" ")}> */}
          <model-viewer
            ref={this.state.mvRef}
            loading="lazy"
            // poster={`${this.props.currentModel.Model.icon}`}
            class="mv2"
            id={this.props.currentModel.id}
            // id="First"
            // reveal="interaction"
            // src={this.props.currentModel.Model.mdl}
            // src={this.setSrc}
            // onLoad={this.loadmv()}
            // auto-rotate
            // autoplay
            // animation-name="animation"
            camera-controls
            shadow-intensity="3"
            exposure="1"
            shadow-softness="0.9"
            interaction-policy="always-allow"
            interaction-prompt="auto"
            interaction-prompt-style="basic"
            // set camera target dynamically.
            camera-target={this.setCameraTarget()}
            alt={`A 3D Model of a Blackfoot ${this.props.currentModel.id}`}>
            <div
              id={`load3D_${this.props.currentModel.id}`}
              slot="poster"
              style={{
                backgroundImage: `url(${this.props.currentModel.Model.icon})`,
                // width: "100%",
                height: "100%",
                // position: "absolute",
                // top: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}>
              <div
                className={style.buttonLoad}
                onClick={() => {
                  this.toggleAlert();
                }}>
                Load 3D Model
              </div>
              <div className={style.promptContainer} id="alertPrompt">
                <div className={style.confirmPrompt}>
                  <div
                    style={{
                      textAlign: "left",
                      paddingTop: "2%",
                      paddingBottom: "2%",
                    }}
                    className={style.op}>
                    <b>Warning:</b> Due to the high detail of the 3D Blackfoot
                    Objects, we urge you to only view them while connected to
                    wifi, or on a wired connection. Please be sure you are not
                    using mobile data before proceeding.
                  </div>
                  <b className={style.op}>Proceed?</b>
                  <div className={style.options}>
                    <div
                      className={style.optionsButton}
                      onClick={this.renderModel}>
                      Proceed
                    </div>
                    <div
                      className={style.optionsButton}
                      onClick={this.toggleAlert}>
                      Cancel
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Dynamically render each hotspot contained within the artifact file. */}
            {this.state.activated === true && (
              <Suspense fallback={<div>Loading...</div>}>
                {this.props.currentModel.Model.hotspots.map((object, i) => (
                  <Hotspot
                    dataPosition={object.dataPosition}
                    dataNormal={object.dataNormal}
                    name={object.name}
                    artifact={this.props.currentModel.id}
                    content={object.content}
                    category={object.category}
                    key={i}
                    setActiveHotspot={this.setActiveHotspot}
                    activeHotspots={this.state.activeHotspots}
                    currentCategory={this.props.currentRoute}
                    currentHotspotDesign={this.state.currentHotspotDesign}
                    currentHotspotMaterials={this.state.currentHotspotMaterials}
                    setHotspotContent={this.props.setHotspotContent}
                    currentRoute={this.props.currentRoute}
                    designContent={this.props.designContent}
                    materialsContent={this.props.materialsContent}
                    hotspotActivated={this.state.hotspotActivated}
                    hsClicked={this.hsClicked}
                  />
                ))}
              </Suspense>
            )}
          </model-viewer>
          {/* {this.setMV()} */}
        </div>
      );
    } else {
      return (
        <div className={style.fullWindow}>
          {/* <div className={[this.getModelContainerStyle(), style.test].join(" ")}> */}
          <model-viewer
            ref={this.state.mvRef}
            loading="lazy"
            // poster={`${this.props.currentModel.Model.icon}`}
            class="mv2"
            id={this.props.currentModel.id}
            // id="First"
            // reveal="interaction"
            // src={this.props.currentModel.Model.mdl}
            // src={this.setSrc}
            // onLoad={this.loadmv()}
            auto-rotate
            // autoplay
            // animation-name="animation"
            camera-controls
            shadow-intensity="3"
            exposure="1"
            shadow-softness="0.9"
            interaction-policy="always-allow"
            interaction-prompt="auto"
            // set camera target dynamically.
            camera-target={this.setCameraTarget()}
            alt={`A 3D Model of a Blackfoot ${this.props.currentModel.id}`}>
            <div
              slot="poster"
              style={{
                backgroundImage: `url(${this.props.currentModel.Model.icon})`,
                // width: "100%",
                height: "100%",
                // position: "absolute",
                // top: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}></div>
            {/* Dynamically render each hotspot contained within the artifact file. */}
            {/* {document.readyState === "complete" && */}
            {this.props.currentModel.Model.hotspots.map((object, i) => (
              <Suspense fallback={<div>Loading...</div>}>
                <Hotspot
                  dataPosition={object.dataPosition}
                  dataNormal={object.dataNormal}
                  name={object.name}
                  artifact={this.props.currentModel.id}
                  content={object.content}
                  category={object.category}
                  key={i}
                  setActiveHotspot={this.setActiveHotspot}
                  activeHotspots={this.state.activeHotspots}
                  currentCategory={this.props.currentRoute}
                  currentHotspotDesign={this.state.currentHotspotDesign}
                  currentHotspotMaterials={this.state.currentHotspotMaterials}
                  setHotspotContent={this.props.setHotspotContent}
                  currentRoute={this.props.currentRoute}
                  designContent={this.props.designContent}
                  materialsContent={this.props.materialsContent}
                  hotspotActivated={this.state.hotspotActivated}
                  hsClicked={this.hsClicked}
                />
              </Suspense>
            ))}
          </model-viewer>
        </div>
      );
    }
  };
  render() {
    return this.renderModelViewer();
  }
}
