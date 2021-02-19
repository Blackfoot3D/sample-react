/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import style from "../style/MapView.module.css";
import MapContainer from "../MapContainer";
import MapViewControls from "../MapViewControls";
/***************************************************
 * MapView Functional Component. This is used to
 * render the map view's css grid.
 ***************************************************/

export default class MapView extends Component {
  state = {
    activeArtifacts: null,
    models: this.props.models,
    filterCount: 0,
  };
  componentDidMount() {
    var active = this.getActiveArtifacts(
      this.props.models,
      this.props.currentCategory
    );
    this.state.activeArtifacts = active;
    this.setState({ filterCount: active.length });
  }

  componentDidUpdate() {
    var active = this.getActiveArtifacts(
      this.props.models,
      this.props.currentCategory
    );
    this.state.activeArtifacts = active;
    if (this.state.filterCount !== active.length) {
      this.setState({ filterCount: active.length });
    }
  }
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
  render() {
    return (
      <div className={style.grid}>
        <MapContainer
          models={this.props.models}
          categories={this.props.categories}
          setCategory={this.props.setCategory}
          currentCategory={this.props.currentCategory}
          center={this.props.center}
          activeArtifacts={this.state.activeArtifacts}
          currentModel={this.props.currentModel}
          view={this.props.view}
        />
        <MapViewControls
          categories={this.props.categories}
          currentCategory={this.props.currentCategory}
          setCategory={this.props.setCategory}
          resetCategory={this.props.resetCategory}
          artifactCount={this.state.models.length}
          filterCount={this.state.filterCount}
          activeArtifacts={this.state.activeArtifacts}
          models={this.props.models}
        />
      </div>
    );
  }
}
