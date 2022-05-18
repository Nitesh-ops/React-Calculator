import React, { Component } from "react";
import Button from "./Button";
import KeyPad from "./KeyPad";
import Screen from "./Screen";
import "./stylesheets/calculator.css";

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }

  calculate = () => {
    try {
      const result = eval(this.state.data);
      this.setState({
        data: result,
      });
    } catch (e) {
      this.setState({
        data: "error",
      });
    }
  };

  handleClick = (event) => {
    const value = event.target.getAttribute("data-value");
    switch (value) {
      case "clear":
        this.setState({
          data: "",
        });
        break;
      case "equal":
        this.calculate();
        break;
      default:
        this.setState({
          data: this.state.data + value,
        });
    }
  };

  render() {
    return (
      <div className="calculator">
        <Screen data={this.state.data} />
        <KeyPad>
          <Button
            onClick={this.handleClick}
            label="clear"
            size="3"
            value="clear"
          />
          <Button onClick={this.handleClick} label="÷" value="/" />

          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="-" value="-" />

          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="+" value="+" />

          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="3" value="3" />
          <Button onClick={this.handleClick} label="=" value="equal" />
        </KeyPad>
      </div>
    );
  }
}
