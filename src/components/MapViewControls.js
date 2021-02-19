import React, { Component } from "react";
import style from "./style/ModelUniverseControls.module.css";
import FilterBox from "./FilterBox";
import { Link } from "react-router-dom";
export default class MapViewControls extends Component {
  state = {
    filterVisible: false,
  };
  showFilterMenu = () => {
    var newVal = !this.state.filterVisible;
    this.setState({ filterVisible: newVal });
  };

  getFilterButtonStyle = () => {
    if (this.state.filterVisible === false) {
      return style.filter;
    } else {
      return [style.filter, style.filterActive].join(" ");
    }
  };

  getActiveFiltersStyle = () => {
    if (this.state.filterVisible === false) {
      return style.activeFiltersBox;
    } else {
      return [style.activeFiltersBox, style.filtersBoxHidden].join(" ");
    }
  };

  getInnerFilterStyle = () => {
    if (this.state.filterVisible) {
      return style.filterInnerHidden;
    } else {
      return style.filterInnerVisible;
    }
  };

  printActiveFilters = () => {
    var filterNames = "";
    for (var i = 0; i < this.props.currentCategory.length; i++) {
      if (this.props.currentCategory[i].options !== "All") {
        filterNames += this.props.currentCategory[i].options;
        // if (i < this.props.currentCategory.length - 1) {
        filterNames += ", ";
        // }
      }
    }
    // filterNames.slice(-2);
    return filterNames.replace(/, (\s+)?$/, "");
  };

  render() {
    return (
      <div className={style.front}>
        {/* <header className={style.headerStyle}> */}
        <ul className={style.navBar}>
          <div className={style.cluster}>
            <Link to={"/"}>
              <li className={style.inactiveMode}>Circle</li>
            </Link>
            <div className={style.seperator}>|</div>
            <Link to={"/mapview"}>
              <li className={style.activeMode}>Map</li>
            </Link>
          </div>
          <div className={[style.cluster, style.arrows].join(" ")}>
            {/* <li
              onClick={this.props.findPrevious}
              className={[style.button, style.previous].join(" ")}></li>
            <li
              onClick={this.props.findNext}
              className={[style.button, style.next].join(" ")}></li> */}
          </div>
          <div className={style.cluster}>
            <FilterBox
              visible={this.state.filterVisible}
              categories={this.props.categories}
              setCategory={this.props.setCategory}
              resetCategory={this.props.resetCategory}
              artifactCount={this.props.artifactCount}
              currentCategory={this.props.currentCategory}
              filterCount={this.props.filterCount}
              // countActiveArtifacts={this.props.countActiveArtifacts}
              activeArtifacts={this.props.activeArtifacts}
              models={this.props.models}
            />
            <div className={style.clusterButton}>
              <div
                className={this.getActiveFiltersStyle()}
                onClick={this.showFilterMenu}>
                {this.printActiveFilters()}
              </div>
              <button
                onClick={this.showFilterMenu}
                className={this.getFilterButtonStyle()}>
                <div className={this.getInnerFilterStyle()}>Filter</div>
              </button>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
