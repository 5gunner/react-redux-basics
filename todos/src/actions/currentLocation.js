import actionTypes from "./actionTypes";

const getCurrentLocation = (location) => {
    return {
        type: actionTypes.locationChanged,
        payload: location
    }
}

export default getCurrentLocation;