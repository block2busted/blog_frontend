import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "../../utils";
import { rippleButtonClicked } from "../../actions";

import RippleSpan from "../RippleSpan";

import "./RippleButton.css";

class RippleButton extends Component {
  render() {
    const { item, ripple } = this.props

    return (
      <button
        className={item.cName}
        onClick={() => this.props.rippleButtonClicked(item.type)}
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
    rippleButtonClicked: (itemType) => rippleButtonClicked(dispatch)(itemType)
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(RippleButton);

