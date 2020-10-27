const rippleButtonClicked = (payload) => {
  return {
    type: 'RIPPLE_BUTTON_CLICKED',
    payload
  }
};

export {
  rippleButtonClicked
};
