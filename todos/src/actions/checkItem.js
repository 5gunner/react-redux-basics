import database from "../database";
import actionTypes from "./actionTypes";

const checkItem = (key, completed) => {
  return dispatch => {
    dispatch(switchCheckUncheck(key, completed));
  }
};

function switchCheckUncheck(key, completed) {
  let isCompleted = completed
    ? false
    : true;
  database
    .ref()
    .child("todos/" + key)
    .update({completed: isCompleted});
  return {
    type: actionTypes.checkUncheck,
    payload: {
      key,
      completed
    }
  };
}

export default checkItem;