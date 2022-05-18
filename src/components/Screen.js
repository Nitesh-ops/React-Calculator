import React, { Component } from "react";
import "./stylesheets/screen.css";

export default class Screen extends Component {
  render() {
    return <div className="display">{this.props.data}</div>;
  }
}
