import React, { Component } from "react";
import style from "./style/ModelInfoContainer.module.css";
import MediaQuery from "react-responsive";
export default class ModelInfoContainer extends Component {
  /* This handles Information or functionality that is unavailable and 
                changes formatting based on content provided. 
            
            Example, link provided will provide underline, and an empty 
                    string will display Unknown
        */
  propertyHandle = (handleProp) => {
    console.log("Handling Property " + handleProp + " " + typeof handleProp);
    // No info
    if (handleProp === null || handleProp === "" || handleProp === undefined) {
      return <p>Unknown</p>;
    } else if (handleProp.ref !== undefined) {
      console.log("HAS A LINK " + handleProp.ref);
      //Has Link
      return (
        // <div className={style.link}>
        <a href={`${handleProp.ref}`}>{handleProp}</a>
      );
    }
    // else if (Array.isArray(handleProp) && typeof handleProp !== "string") {
    //   return handleProp.map((object, i) => (
    //     <a href="#" className={style.list}>
    //       {object}
    //     </a>
    //   ));
    // }
    else {
      return handleProp;
    }
  };

  render() {
    // console.log("DESCRIPTION" + this.propertyHandle(this.props.currentModel.description[0].title))

    return (
      <div>
        {/* <MediaQuery minWidth={801}> */}
        <div className={style.innerDiv}>
          <h4>Date</h4>
          <p>{this.propertyHandle(this.props.meta.date)}</p>

          <h4>Origin</h4>
          <p>{this.propertyHandle(this.props.meta.origin)}</p>

          <h4>Museum</h4>
          <p>{this.propertyHandle(this.props.meta.museum)}</p>

          <h4>Materials</h4>
          <p>
            {this.props.meta.materials.map((material, i) => {
              return i < this.props.meta.materials.length - 1
                ? `${this.propertyHandle(material)}, `
                : this.propertyHandle(material);
            })}
          </p>
          {/* {this.propertyHandle(this.props.currentModel.categories)} */}

          <h4>Dimensions</h4>
          <p>
            Length: {this.propertyHandle(this.props.meta.dimensions.length)}
          </p>

          <p>Width: {this.propertyHandle(this.props.meta.dimensions.width)}</p>

          <p>
            Height: {this.propertyHandle(this.props.meta.dimensions.height)}
          </p>
        </div>
      </div>
    );
  }
}
