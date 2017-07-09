import todosReducer from "./todosReducer";
import routeReducer from "./routeReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({ todos: todosReducer, routing: routeReducer });

export default allReducers;