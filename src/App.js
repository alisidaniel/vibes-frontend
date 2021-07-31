import React, { useContext } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Modal } from "@wigxel/react-components/lib/cards";
import Theme from "./styles/Theme";

//Views
import Login from "./views/Login";
import Home from "./views/Home";
import Events from "./views/Events";
import EventDetails from "./views/EventDetails";
import Dashboard from "./views/Dashboard";
import ForgotPassword from "./views/ForgotPassword";
import EventList from "./views/EventList";
import Scanners from "./views/Scanners";
import Tickets from "./views/Tickets";
import Admins from "./views/Admins";

//States
import AuthContext from "./context/Authentication/authContext";
import AuthState from "./context/Authentication/authState";
import UserState from "./context/User/userState";
import AdminState from "./context/Admin/adminState";

const AuthRoute = (props) => {
  const authContext = useContext(AuthContext);
  if (!authContext?.isAuthenticated) return <Redirect to="/login" />;
  if (authContext.user.user.isAdmin === 1) return <Redirect to="/dashboard" />;
  return <Route {...props} />;
};

function App() {
  return (
    <Modal.Provider>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <AuthState>
            <UserState>
              <AdminState>
                <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/forgot/password" component={ForgotPassword} />
                  <AuthRoute exact path="/home" component={Home} />
                  <AuthRoute path="/events" component={Events} />
                  <AuthRoute path="/history" component={EventDetails} />
                  <ProtectedRoute
                    exact
                    path="/dashboard"
                    component={Dashboard}
                  />
                  <ProtectedRoute
                    exact
                    path="/dashboard/events"
                    component={EventList}
                  />
                  <ProtectedRoute
                    path="/dashboard/scanners"
                    component={Scanners}
                  />
                  <ProtectedRoute
                    path="/dashboard/events/tickets"
                    component={Tickets}
                  />
                  <ProtectedRoute path="/dashboard/admins" component={Admins} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </AdminState>
            </UserState>
          </AuthState>
        </BrowserRouter>
      </ThemeProvider>
    </Modal.Provider>
  );
}

const ProtectedRoute = (props) => {
  const authContext = useContext(AuthContext);
  if (!authContext?.isAuthenticated) return <Redirect to="/login" />;
  if (authContext.user.user.isAdmin === 0) return <Redirect to="/login" />;
  return <Route {...props} />;
};

const NotFound = () => (
  <div>
    <span className="flex justify-center items-center">
      404 | <b>NOT FOUND</b>
    </span>
  </div>
);

export default App;
