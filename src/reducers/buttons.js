import { useEffect } from "react";

const updateButton = (state, action) => {
  if (state === undefined) {
    return {
      ripple: {},
      timerId: null
    }
  }

  switch (action.type) {
    case 'RIPPLE_BUTTON_ACTIVATE':
      const { timerId } = state.buttonState
      clearTimeout(timerId);
      const newRipple = {
        type: action.payload,
        x: event.clientX - event.target.offsetLeft,
        y: event.clientY - event.target.offsetTop
      };
      return {
        ripple: newRipple
      }
    case 'RIPPLE_BUTTON_OFF':
      return {
        timerId: null,
        ripple: {}
      }
    default:
      return state.buttonState
  }
}

export default updateButton
