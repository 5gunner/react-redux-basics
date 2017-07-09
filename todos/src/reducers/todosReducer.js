import actionTypes from "../actions/actionTypes";

export default function (state = [], action) {
  switch (action.type) {
    case actionTypes.checkUncheck:
      return state.map(
        (todo) =>
          (todo.key === action.payload.key
            ? { ...todo, completed: !todo.completed }
            : todo)
      );
    case actionTypes.databaseRetrieved:
      return [...state, ...action.payload];
    case actionTypes.newTaskAdded:
      return [
        ...state,
        action.payload
      ]
    case actionTypes.removeTodo:
      return state.filter(todo => todo.key !== action.payload);
    default:
      return [...state];
  }
}
