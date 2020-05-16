import { combineReducers } from "redux";

const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_QUESTION":
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};

const goBackClicked = (state = false, action) => {
  switch (action.type) {
    case "GO_BACK":
      return (state = true);
    case "CONTINUE":
      return (state = false);
    default:
      return state;
  }
};

export default combineReducers({
  questionReducer,
  goBackClicked,
});
