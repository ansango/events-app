import types from "../types";

export const uiOpenModal = () => ({
  type: types.openModal,
});

export const uiCloseModal = () => ({
  type: types.closeModal,
});
