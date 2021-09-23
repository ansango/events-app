import moment from "moment";
import types from "../types";

const initialState = {
  events: [
    {
      start: moment().toDate(),
      end: moment().add(1, "hours").toDate(),
      title: "Cumpleaños",
      notes: "Comprar tarta",
      user: { _id: "5c9b9c9c9c9c9c9c9c9c9c9", name: "Juan" },
    },
  ],
  activeEvent: null,
};

const calendarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: payload,
      };
    default:
      return state;
  }
};

export default calendarReducer;
