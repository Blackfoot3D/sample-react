import React, { Component } from "react";
import style from "./style/Hotspot.module.css";

/**********************************************************
 * Component used to render interactive Hotspots onto an
 * artifact.
 **********************************************************/
export default class Hotspot extends Component {
  state = {
    active: true,
  };

  /**********************************************************
   * On component update, we check which hotspots should
   * appear, and assign the appropriate css classes.
   **********************************************************/
  componentDidUpdate() {
    //get the hotspot by id
    var button = document.getElementById(
      `hs-${this.props.artifact}-${this.props.name}`
    );
    //check which route is active. If the current route is "materials",
    //only display hotspots related to materials
    if (this.props.currentRoute === "materials") {
      //if the story content is set to intro, hotspots are deactivated.
      if (this.props.materialsContent === "intro") {
        button.classList.remove(style.hotspotActive);
      }
      //if the current "materials" hotspot matches this hotspot, add active css.
      else if (this.props.currentHotspotMaterials === this.props.name) {
        button.classList.add(style.hotspotActive);
      }
      //if the current "materials" hotspot does not match the current hotspot,
      //remove its active css
      else if (this.props.currentHotspotMaterials !== this.props.name) {
        button.classList.remove(style.hotspotActive);
      }
    }
    //check which route is active. If the current route is "design",
    //only display hotspots related to design
    else if (this.props.currentRoute === "design") {
      //if the story content is set to intro, hotspots are deactivated.
      if (this.props.designContent === "intro") {
        button.classList.remove(style.hotspotActive);
      }
      //if the current "design" hotspot matches this hotspot, add active css.
      else if (this.props.currentHotspotDesign === this.props.name) {
        button.classList.add(style.hotspotActive);
      }
      //if the current "design" hotspot does not match the current hotspot,
      //remove its active css
      else if (this.props.currentHotspotDesign !== this.props.name) {
        button.classList.remove(style.hotspotActive);
      }
    }
  }

  /**********************************************************
   * Function handles onClick events for hotspots. Onclick,
   * set the content of the hotspot into the Story content
   * panel.
   **********************************************************/
  onHSClick = () => {
    /*Call hsClicked() function from parent to set the 
    hotspotActivated flag to true.*/
    if (this.props.hotspotActivated === false) {
      this.props.hsClicked();
    }
    //If the current route is materials, check if the currentHotspotMaterials
    //matches this hotspot, if it does not match, set the content as this hotspot's
    //content. Otherwise, set the hotspot content to "intro"
    if (this.props.currentRoute === "materials") {
      if (this.props.currentHotspotMaterials !== this.props.name) {
        this.props.setHotspotContent(this.props.name, this.props.category);
      } else if (this.props.currentHotspotMaterials === this.props.name) {
        this.props.setHotspotContent("intro", this.props.category);
      }
    }
    //If the current route is design, check if the currentHotspotDesign
    //matches this hotspot, if it does not match, set the content as this hotspot's
    //content. Otherwise, set the hotspot content to "intro"
    else if (this.props.currentRoute === "design") {
      if (this.props.currentHotspotDesign !== this.props.name) {
        this.props.setHotspotContent(this.props.name, this.props.category);
      } else if (this.props.currentHotspotDesign === this.props.name) {
        this.props.setHotspotContent("intro", this.props.category);
      }
    }
    //call function to set parent state (ModelContainer) to reflect current hotspot.
    this.props.setActiveHotspot(this.props);
  };

  /**********************************************************
   * Function used to set the css classes of the hotspots.
   * If the hotspotActivated flag is false, we set a special
   * animated version of the hotspot class.
   **********************************************************/
  getStyle = () => {
    //before a hotspot has ben clicked for the first time, apply special css
    if (this.props.hotspotActivated === false) {
      if (this.props.currentCategory === this.props.category) {
        return [style.hotSpotVisible, style.hotSpotInit].join(" ");
      } else {
        return [style.hotSpotHidden, style.hotSpotInit].join(" ");
      }
    }
    //otherwise apply regular old css.
    else {
      if (this.props.currentCategory === this.props.category) {
        return [style.hotSpotVisible, style.hotSpot].join(" ");
      } else {
        return [style.hotSpotHidden, style.hotSpot].join(" ");
      }
    }
  };

  /**********************************************************
   * Render a hotspot onto an artifact.
   **********************************************************/
  render() {
    return (
      <button
        className={this.getStyle()}
        id={`hs-${this.props.artifact}-${this.props.name}`}
        slot={`hotspot-${this.props.artifact}-${this.props.name}`}
        data-position={this.props.dataPosition}
        data-normal={this.props.dataNormal}
        data-visibility-attribute="visible"
        onClick={this.onHSClick}>
        <span className={style.hotSpotSpan}>{this.props.name}</span>
      </button>
    );
  }
}
