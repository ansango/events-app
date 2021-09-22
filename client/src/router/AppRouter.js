import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "../components/auth/Login";
import CalendarScreen from "../components/calendar/CalendarScreen";
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} exact={true} />
        <Route path="/" component={CalendarScreen} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
