const rippleButtonActivate = (payload) => {
  console.log(payload, 'item')
  return {
    type: 'RIPPLE_BUTTON_ACTIVATE',
    payload
  }
};

const rippleButtonOff = () => {
  return {
    type: 'RIPPLE_BUTTON_OFF'
  }
};

const rippleButtonClicked = (dispatch) => (payload) => {
  dispatch(rippleButtonActivate(payload));
  setTimeout(() =>
    dispatch(rippleButtonOff()
    ), 1000)
};

export {
  rippleButtonClicked
};
