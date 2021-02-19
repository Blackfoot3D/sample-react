import React, { Component } from "react";
import style from "./style/FilterBox.module.css";

export default class FilterBox extends Component {
  state = { activeArtifacts: null };
  getVisibility = () => {
    if (this.props.visible === false) {
      return [style.hidden, style.container].join(" ");
    } else {
      return [style.visible, style.container].join(" ");
    }
  };
  getColumns = () => {
    var columnCount = this.props.categories.length;
    return {
      gridTemplateColumns: `repeat(${columnCount}, minmax(0, auto))`,
      // width: `${columnCount * 251}px`,
    };
  };
  componentDidMount() {
    this.appendOverlay();
    // this.setState({
    //   activeArtifacts: this.getActiveArtifacts(
    //     this.props.models,
    //     this.props.currentCategory
    //   ),
    // });
    // var active = this.getActiveArtifacts(
    //   this.props.models,
    //   this.props.currentCategory
    // );
    // this.state.activeArtifacts = active;
    // this.setInitialChecked();
  }

  componentDidUpdate() {
    // var active = this.getActiveArtifacts(
    //   this.props.models,
    //   this.props.currentCategory
    // );
    // this.state.activeArtifacts = active;
    this.setInitialChecked();
  }

  resetButton = () => {
    var myRadioList = document.getElementsByTagName("input");
    for (var i = 0; i < myRadioList.length; i++) {
      if (myRadioList[i].type === "radio") {
        myRadioList[i].checked = false;
      }
    }
    this.props.resetCategory();
  };

  appendOverlay = () => {
    var bft = document.getElementById("filter_Blackfoot Tribe");
    var tribeOverlay = document.createElement("div");
    tribeOverlay.innerHTML = `*`;
    var tribeOverlayBox = document.createElement("div");
    tribeOverlayBox.classList.add(style.b);
    tribeOverlayBox.innerHTML =
      "Tribe may be unknown due to a chain of ownership.";
    tribeOverlay.classList.add(style.overlay);
    bft.appendChild(tribeOverlay);
    bft.appendChild(tribeOverlayBox);
  };
  displayFilterResults = (filterCount, artifactCount) => {
    if (artifactCount - filterCount === 0) {
      return <div className={style.filterResults}>all objects</div>;
    } else if (artifactCount - filterCount === artifactCount - 1) {
      return (
        <div className={style.filterResults}>
          {filterCount} object
          <div className={style.resetbtn} onClick={this.resetButton}>
            <div className={style.x}>&times;</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={style.filterResults}>
          {filterCount} objects
          <div className={style.resetbtn} onClick={this.resetButton}>
            <div className={style.x}>&times;</div>
          </div>
        </div>
      );
    }
  };

  onRadioClick = (value, category) => {
    var button = document.getElementById(value);
    // button.checked = !button.checked;
    //this.props.setCategory(value, category);
    for (var i = 0; i < this.props.currentCategory.length; i++) {
      if (this.props.currentCategory[i].title === category) {
        if (this.props.currentCategory[i].options === value) {
          button.checked = false;
          this.props.setCategory("All", category);
        } else {
          this.props.setCategory(value, category);
        }
      }
    }
  };

  setChecked = (option, category) => {
    for (var i = 0; i < this.props.currentCategory.length; i++) {
      if (this.props.currentCategory[i].title === category) {
        if (this.props.currentCategory[i].options === option) {
          return true;
        }
      }
    }
    return false;
  };

  setInitialChecked = () => {
    for (var i = 0; i < this.props.currentCategory.length; i++) {
      if (this.props.currentCategory[i].options !== "All") {
        document.getElementById(
          this.props.currentCategory[i].options
        ).checked = true;
      }
    }
  };

  getRadioButtonStyle = (option, category) => {
    if (this.props.activeArtifacts !== null) {
      for (var i = 0; i < this.props.activeArtifacts.length; i++) {
        for (
          var j = 0;
          j < this.props.activeArtifacts[i].categories.length;
          j++
        ) {
          if (this.props.activeArtifacts[i].categories[j].title === category) {
            if (
              this.props.activeArtifacts[i].categories[j].options.includes(
                option
              )
            ) {
              return style.radioItem;
            }
          }
        }
      }
      return style.radioItemInvalid;
    }
  };

  toggleOptions = (cat) => {
    var optionsBox = document.getElementById(`options_${cat}`);
    console.log("hello", optionsBox);
    optionsBox.classList.toggle(style.open);
  };
  render() {
    return (
      <div className={this.getVisibility()}>
        <div className={style.header}>
          Filters
          {this.displayFilterResults(
            this.props.filterCount,
            this.props.artifactCount
          )}
        </div>
        {/* might need to dynamically change the column count here incase additional categories are added.*/}
        <div className={style.columns} style={this.getColumns()}>
          {this.props.categories.map((category, i) => (
            <div className={style.column} key={i}>
              <p
                className={style.subHeader}
                id={`filter_${category.title}`}
                onClick={() => this.toggleOptions(category.title)}>
                {category.title}
              </p>
              <div
                className={[style.optionsBox, style.open].join(" ")}
                id={`options_${category.title}`}>
                {category.options.map((option, i) => (
                  <div
                    className={this.getRadioButtonStyle(option, category.title)}
                    key={i}>
                    <input
                      onClick={() => this.onRadioClick(option, category.title)}
                      className={style.checkbox}
                      type="radio"
                      id={option}
                      name={category.title}
                      // checked={this.setChecked(option, category.title)}
                      value={option}></input>
                    {/* <span className={style.checkmark}></span> */}
                    <label className={style.option} htmlFor={option}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
