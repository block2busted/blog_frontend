const clickedButton = (state, action) => {
  if (state === undefined) {

  }
}


// clickedButton = (buttonType) => {
//     clearTimeout(this.state.timerId)
//
//     const newRipple = {
//       item: buttonType,
//       x: event.clientX - event.target.offsetLeft,
//       y: event.clientY - event.target.offsetTop
//     };
//
//     this.setState({
//       ...this.state.ripple,
//       ripple: newRipple
//     });
//
//     this.state.timerId = setTimeout(() => {
//         this.setState({
//           timerId: null,
//           ripple: {}
//         })
//       }, 1000)
//   };