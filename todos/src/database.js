import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAwGcD6OfVHU_HJ6BGbVgTYbZK3KNnfobc",
  authDomain: "simple-todo-fda3f.firebaseapp.com",
  databaseURL: "https://simple-todo-fda3f.firebaseio.com",
  projectId: "simple-todo-fda3f",
  storageBucket: "simple-todo-fda3f.appspot.com",
  messagingSenderId: "787888042767"
};

firebase.initializeApp(config);
const database = firebase.database();

// initializing watch to data added
database.ref().child("todos").on('child_added', function (data) {
});

export default database;
