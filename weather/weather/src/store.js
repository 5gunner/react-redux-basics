import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import logger from "redux-logger";
import allReducers from "./reducers/allReducers"

export const store = createStore(allReducers);

console.log(store);

export default store;