import types from "../types";

const initialState = {
  modalOpen: false,
};

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.openModal:
      return {
        ...state,
        modalOpen: true,
      };
    case types.closeModal:
      return {
        ...state,
        modalOpen: false,
      };

    default:
      return state;
  }
};

export default uiReducer;
