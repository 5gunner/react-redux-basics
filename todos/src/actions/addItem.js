import database from "../database";
import actionTypes from "./actionTypes";

const addItem = todo => {
  return dispatch => {
    database
      .ref()
      .child("todos")
      .push({ task: todo, completed: false })
      .then(() => {
        dispatch(onTaskAdded());
      });
  };
};

// check for any new task aded to firebase
function onTaskAdded() {
  let newTask;
  database
    .ref()
    .child("todos")
    .on('child_added', function (data) {
      newTask = data.val();
    });
  return {type: actionTypes.newTaskAdded, payload: newTask};
}

export default addItem;
