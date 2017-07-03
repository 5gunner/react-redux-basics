import { combineReducers } from "redux";
import ReducerUser from "./reducer-user";
import ReducerTab from "./reducer-tab";
import { routerReducer } from "react-router-redux";

export const allReducers = combineReducers({
    users: ReducerUser,
    activeTab: ReducerTab,
    routing: routerReducer
});

export default allReducers;