import { combineReducers } from "redux";
import ReducerUser from "./reducer-user";

export const allReducers = combineReducers({ users: ReducerUser });

export default allReducers;