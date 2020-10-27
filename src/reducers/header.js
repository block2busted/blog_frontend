const updateHeader = (state, action) => {
  if (state === undefined) {
    return {
      toggleClicked: false
    }
  }

  switch (action.type) {
    case 'TOGGLE_CLICKED':
      return {
        toggleClicked: !state.headerState.toggleClicked
      }
    default:
      return state
  }
};

export default updateHeader;
