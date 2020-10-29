import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));


// const myAction = (dispatch) => {
//   setTimeout(() => dispatch({
//       type: 'DELAY'
//     }), 1000)
// }
//
// store.dispatch(myAction);

export default store;
