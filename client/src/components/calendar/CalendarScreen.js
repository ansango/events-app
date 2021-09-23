import Navbar from "../ui/Navbar";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";
import "moment/locale/es";

import { messages } from "../../helpers/calendar-msg";
import CalendarEvent from "./CalendarEvent";
import { useState } from "react";
import CalendarModal from "./CalendarModal";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../state/actions/ui";
import { eventSetActive } from "../../state/actions/events";

moment.locale("es");

const localizer = momentLocalizer(moment); // or globalizeLocalizer
const events = [
  {
    start: moment().toDate(),
    end: moment().add(1, "hours").toDate(),
    title: "Cumpleaños",
    notes: "Comprar tarta",
    user: { _id: "5c9b9c9c9c9c9c9c9c9c9c9", name: "Juan" },
  },
];

const CalendarScreen = () => {
  const dispatch = useDispatch();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const onDoubleClick = (event) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (event) => {
    dispatch(eventSetActive(event));
  };

  const onView = (view) => {
    setLastView(view);
    localStorage.setItem("lastView", view);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
      border: "0px",
    };
    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onView}
        view={lastView}
        components={{ event: CalendarEvent }}
      />
      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;
