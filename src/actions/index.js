import streams from "../api/streams";
import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types";

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
export const createStream = formValues => async dispatch => {
  const res = await streams.post("/streams", formValues);
  dispatch({ type: CREATE_STREAM, payload: res.data });
};
