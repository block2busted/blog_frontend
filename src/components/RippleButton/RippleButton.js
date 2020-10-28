import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "../../utils";
import { rippleButtonActivate } from "../../actions";

import RippleSpan from "../RippleSpan";

import "./RippleButton.css";

class RippleButton extends Component {
  render() {
    const { item, ripple } = this.props

    console.log(this.props, 'buttonProps')

    return (
      <button
        className={item.cName}
        onClick={() => this.props.rippleButtonActivate(item.type)}
      >
        {item.label}
        { ripple.type === item.type ?
          <RippleSpan ripple={ripple} />
          : null }
      </button>
    )
  }
}

const mapStateToProps = ({ buttonState: { ripple } }) => {
  return {
    ripple: ripple
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    rippleButtonActivate: (itemType) => dispatch(rippleButtonActivate(itemType))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(RippleButton);

