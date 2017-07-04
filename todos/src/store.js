import { createStore } from "redux";
import { allReducers } from "./reducers/main";

export const store = createStore(allReducers);

export default store;