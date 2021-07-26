import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
  Link,
} from "react-router-dom";
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

function App() {
  return (
    <Modal.Provider>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/history" component={EventDetails} />
            <Route path="/forgot/password" component={ForgotPassword} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/events" component={EventList} />
            <Route path="/dashboard/scanners" component={Scanners} />
            <Route path="/dashboard/events/tickets" component={Tickets} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Modal.Provider>
  );
}

const MainDashboard = () => {
  return (
    <div>
      <p>Hello MainDashboard</p>
    </div>
  );
};

const NotFound = () => (
  <div>
    <span>
      404 | <b>NOT FOUND</b>
    </span>
  </div>
);

export default App;
