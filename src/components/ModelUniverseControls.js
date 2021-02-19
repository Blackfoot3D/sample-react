import React, { Component } from "react";
import style from "./style/ModelUniverseControls.module.css";
import FilterBox from "./FilterBox";
import MediaQuery from "react-responsive";
// import { Link } from "react-router-dom";
export default class ModelUniverseControls extends Component {
  state = {
    filterVisible: false,
  };

  /***************************************************************
   * Function to toggle the visibility of the filter.
   ***************************************************************/
  showFilterMenu = () => {
    var newVal = !this.state.filterVisible;
    this.setState({ filterVisible: newVal });
    if (this.props.toggleFilter) {
      this.props.toggleFilter();
    }
  };

  /***************************************************************
   * Function used to set the style of the filter button. When
   * active, the filter button transforms into the circle with the
   * checkmark in it.
   ***************************************************************/
  getFilterButtonStyle = () => {
    if (this.state.filterVisible === false) {
      return style.filter;
    } else {
      return [style.filter, style.filterActive].join(" ");
    }
  };

  /***************************************************************
   * Function to toggle the visibility of the "Filter" text inside
   * the filter button.
   ***************************************************************/
  getInnerFilterStyle = () => {
    if (this.state.filterVisible) {
      return style.filterInnerHidden;
    } else {
      return style.filterInnerVisible;
    }
  };

  /***************************************************************
   * Function to toggle the visibility of the active filters that
   * appear to the right of the filter button. When the filter is
   * active, the box containing currently active filters is
   * hidden.
   ***************************************************************/
  getActiveFiltersStyle = () => {
    if (this.state.filterVisible === false) {
      return style.activeFiltersBox;
    } else {
      return [style.activeFiltersBox, style.filtersBoxHidden].join(" ");
    }
  };

  /***************************************************************
   * Function used to print all of the active filters in the
   * filterBox.
   ***************************************************************/
  printActiveFilters = () => {
    var filterNames = "";
    //loop through all active filters in the currentCategory prop
    for (var i = 0; i < this.props.currentCategory.length; i++) {
      if (this.props.currentCategory[i].options !== "All") {
        filterNames += this.props.currentCategory[i].options;
        //append comma
        filterNames += ", ";
      }
    }
    //slice the comma off of the final entry, and return the values to be printed.
    return filterNames.replace(/, (\s+)?$/, "");
  };

  render() {
    console.log("MUC", this.props);
    return (
      // <div className={style.front}>
      <>
        <div className={style.navBar}>
          <div
            className={style.cluster}
            style={{
              opacity: "0",
              visibility: "hidden",
              pointerEvents: "none",
            }}>
            <div className={style.clusterButton}>
              <button
                onClick={this.showFilterMenu}
                className={this.getFilterButtonStyle()}>
                <div className={this.getInnerFilterStyle()}>
                  Filter{" "}
                  <MediaQuery maxWidth={800}>
                    {this.props.filterCount < this.props.artifactCount &&
                      `(${this.props.filterCount})`}
                  </MediaQuery>
                </div>
              </button>
            </div>
            <MediaQuery minWidth={800}>
              <div
                className={this.getActiveFiltersStyle()}
                onClick={this.showFilterMenu}>
                {this.printActiveFilters()}
              </div>
            </MediaQuery>
          </div>
          <MediaQuery minWidth={801}>
            <div className={[style.cluster, style.arrows].join(" ")}>
              <div
                onClick={this.props.findNext}
                className={[style.button, style.previous].join(" ")}></div>
              <div
                onClick={this.props.findPrevious}
                className={[style.button, style.next].join(" ")}></div>
            </div>
          </MediaQuery>
          <div className={style.cluster}>
            <div className={style.clusterButton}>
              <button
                onClick={this.showFilterMenu}
                className={this.getFilterButtonStyle()}>
                <div className={this.getInnerFilterStyle()}>
                  Filter{" "}
                  <MediaQuery maxWidth={800}>
                    {this.props.filterCount < this.props.artifactCount &&
                      `(${this.props.filterCount})`}
                  </MediaQuery>
                </div>
              </button>
            </div>
            <MediaQuery minWidth={801}>
              <div
                className={this.getActiveFiltersStyle()}
                onClick={this.showFilterMenu}>
                {this.printActiveFilters()}
              </div>
            </MediaQuery>
          </div>
        </div>
        <FilterBox
          visible={this.state.filterVisible}
          categories={this.props.categories}
          setCategory={this.props.setCategory}
          resetCategory={this.props.resetCategory}
          artifactCount={this.props.artifactCount}
          currentCategory={this.props.currentCategory}
          filterCount={this.props.filterCount}
          activeArtifacts={this.props.activeArtifacts}
          models={this.props.models}
        />
      </>
      // </div>
    );
  }
}
