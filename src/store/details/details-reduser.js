import { SET_LOADING, SET_POST, SET_ERROR } from "./details-actions";

const initialState = {
  currentPost: null,
  status: "idle",
  error: null,
};

export const detailsReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    case SET_POST:
        return {
            ...state,
            status: "received",
            currentPost: payload
        }
    default:
      return state;
  }
};
