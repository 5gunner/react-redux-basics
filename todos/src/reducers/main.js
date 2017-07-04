import todosReducer from "./todos";
import { combineReducers } from "redux";

export const allReducers = combineReducers({ todos: todosReducer });

export default allReducers;