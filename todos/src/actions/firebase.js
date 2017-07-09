import actionTypes from "./actionTypes";
import database from "../database";

const getFirebase = () => {
  return dispatch => {
    dispatch(onFirebaseStart());
    let data = [];
    database
      .ref()
      .child("todos")
      .once("value", snap => {
        snap.forEach((ele, i) => {
          let todo = ele.val();
          todo.key = ele.key;
          data.push(todo);
        });
      })
      .then(() => {
        dispatch(onDatabaseRetrieved(data));
      });
  };
};


function onFirebaseStart() {
  return {type: actionTypes.retrieveDatabase};
}

function onDatabaseRetrieved(data) {
  return {type: actionTypes.databaseRetrieved, payload: data};
}

// function onRequestRejected() {
//   return {type: actionTypes.requestRejected};
// }

export default getFirebase;
