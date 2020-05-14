import { combineReducers } from "redux";

const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_QUESTION":
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  questionReducer,
});
