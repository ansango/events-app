import uiTypes from "../types/uiTypes";

const initialState = {
  modalOpen: false,
};

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case uiTypes.openModal:
      return {
        ...state,
        modalOpen: true,
      };
    case uiTypes.closeModal:
      return {
        ...state,
        modalOpen: false,
      };

    default:
      return state;
  }
};

export default uiReducer;
