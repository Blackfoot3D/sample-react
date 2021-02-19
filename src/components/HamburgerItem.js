import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HamburgerItem extends Component {
  getStyle = () => {
    return {
      display: this.props.display ? "inline-block" : "none",
    };
  };

  render() {
    return (
      <Link to={this.props.route}>
        <div className="HamBox">
          <h2 style={this.getStyle()}>{this.props.title}</h2>
        </div>
      </Link>
    );
  }
}
