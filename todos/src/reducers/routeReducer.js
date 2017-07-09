import actionTypes from "../actions/actionTypes"

export default function (state = [], action) {
    switch (action.type) {
        case actionTypes.locationChanged:
            return action.payload;
        default:
            return state;
    }
}