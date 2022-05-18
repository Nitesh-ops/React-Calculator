import React, { Component } from "react";
import "./stylesheets/keypad.css";

export default class KeyPad extends Component {
  render() {
    return <div className="keypad">{this.props.children}</div>;
  }
}
