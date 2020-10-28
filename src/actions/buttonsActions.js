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
}


export {
  rippleButtonActivate,
};
