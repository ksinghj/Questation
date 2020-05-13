import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const questions = (state = [], action) => {
  switch (action.type) {
    case "CREATE_QUESTION":
      return [...state, { question: action.payload }];
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  questions,
});
