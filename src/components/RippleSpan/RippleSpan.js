import React from "react";

import "./RippleSpan.css"

const RippleSpan = ({ripple}) => {
    const rippleStyle = {
        left: `${ripple.x}px`,
        top: `${ripple.y}px`
      };
    return (
      <span style={rippleStyle}>
      </span>
    )
  }

export default RippleSpan;
