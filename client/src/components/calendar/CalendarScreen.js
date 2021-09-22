import Navbar from "../ui/Navbar";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment); // or globalizeLocalizer
const myEventsList = [
  {
    start: moment().toDate(),
    end: moment().add(1, "hours").toDate(),
    title: "Cumpleaños",
  },
];

const CalendarScreen = () => {
  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default CalendarScreen;
