import Navbar from "../ui/Navbar";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";
import "moment/locale/es";

import { messages } from "../../helpers/calendar-msg";

moment.locale("es");






const localizer = momentLocalizer(moment); // or globalizeLocalizer
const events = [
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
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
      />
    </div>
  );
};

export default CalendarScreen;
