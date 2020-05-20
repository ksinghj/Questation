import streams from "../api/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  CREATE_QUESTION,
  GO_BACK,
  CONTINUE,
  ENTER_STUDENTS,
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

// axios post request
export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await streams.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: res.data });
  history.push("/");
};

export const fetchStreams = () => async dispatch => {
  const res = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: res.data });
};

export const fetchStream = id => async dispatch => {
  const res = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: res.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const res = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: res.data });
  history.push("/");
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
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
    type: "CREATE_A_CLASS",
    payload: questions,
  };
};
