import { createStore, applyMiddleware, compose } from "redux";
import { allReducers } from "./reducers/main";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = createStore(
  allReducers,
  {},
  compose(
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// store.subscribe(() => {
//   console.groupCollapsed("changed state", store.getState());
// });

// store.dispatch(dispatch => {
//   dispatch({ type: "DISPATCH_STARTED" });
// });

export default store;
