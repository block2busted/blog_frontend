import React, { Component } from "react";

import "./RippleButton.css";
import RippleSpan from "../RippleSpan";

class RippleButton extends Component {
  state = {
    ripple: {},
    timerId: null
  };

  clickedButton = (buttonType) => {
    clearTimeout(this.state.timerId)

    const newRipple = {
      type: buttonType,
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop
    };

    this.setState({
      ...this.state.ripple,
      ripple: newRipple
    });

    this.state.timerId = setTimeout(() => {
        this.setState({
          timerId: null,
          ripple: {}
        })
      }, 1000)
  };


  render() {
    const { item } = this.props

    return (
      <button
        className={item.cName}
        onClick={() => this.clickedButton(item.type)}
      >
        {item.label}
        {this.state.ripple.type === item.type ?
          <RippleSpan ripple={this.state.ripple} />
          : null}
      </button>
    )
  }
}

export default RippleButton;

