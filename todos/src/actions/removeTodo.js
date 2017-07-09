import actionTypes from "../actions/actionTypes"
import database from "../database"

export function removeTodo(key) {
    return dispatch => {
        database
            .ref()
            .child("todos/" + key)
            .remove()
            .then(() => {
                dispatch({type: actionTypes.removeTodo, payload: key})
            });
    }
}

export default removeTodo;