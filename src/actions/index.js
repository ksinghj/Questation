import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_QUESTION,
  GO_BACK,
  CONTINUE,
  ENTER_STUDENTS,
  CREATE_A_CLASS,
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createQuestionSheet = inputs => {
  return {
    type: CREATE_QUESTION,
    payload: inputs,
  };
};

export const clickGoBack = () => {
  return {
    type: GO_BACK,
  };
};

export const clickContinue = () => {
  return {
    type: CONTINUE,
  };
};

export const enterStudents = students => {
  return {
    type: ENTER_STUDENTS,
    payload: students,
  };
};

export const createAClass = questions => {
  return {
    type: CREATE_A_CLASS,
    payload: questions,
  };
};

export const answers = evaldArr => {
  return {
    type: "ANSWERS",
    payload: evaldArr,
  };
};
