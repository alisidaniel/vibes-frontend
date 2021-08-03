import React, { useContext, useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import { Modal } from "@wigxel/react-components/lib/cards";
import Theme from "./styles/Theme";
import SearchInput from "./components/SearchInput";
import { LogOut, Grid, Users, Calendar, Chrome } from "react-feather";

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
import LandingPage from "./views/LandingPage";

//States
import AuthContext from "./context/Authentication/authContext";
import AuthState from "./context/Authentication/authState";
import UserState from "./context/User/userState";
import AdminState from "./context/Admin/adminState";
import { Header } from "./components/Header";

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
                  <Route exact path="/" component={LandingPage} />
                  <Route path="/login" component={Login} />
                  <Route path="/dashboard" component={MainDashboard} />
                  <Route path="/forgot/password" component={ForgotPassword} />
                  <AuthRoute exact path="/home" component={Home} />
                  <AuthRoute exact path="/events" component={Events} />
                  <AuthRoute path="/events/history" component={EventDetails} />
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

const MainDashboard = () => {
  const location = useLocation();
  const authContext = useContext(AuthContext);
  const links = [
    {
      id: 1,
      label: "Dashboard",
      icon: <Grid color="black" />,
      href: "/dashboard",
    },
    {
      id: 2,
      label: "Admins",
      icon: <Users color="black" />,
      href: "/dashboard/admins",
    },
    {
      id: 3,
      label: "Events",
      icon: <Calendar color="black" />,
      href: "/dashboard/events",
    },
    {
      id: 4,
      label: "Scanners",
      icon: <Chrome color="black" />,
      href: "/dashboard/scanners",
    },
  ];
  const [selected, setSelected] = useState({ href: "/dashboard" });
  const onSelect = (i) => {
    setSelected(i);
  };
  return (
    <div>
      <Header appName="vibes" username="Dani" title="Dashboard" />
      <div className="flex min-h-screen font-body text-_11" id="dashboard">
        <aside className="select-none max-w-xs w-60 h-screen overflow-y-scroll overflow-hidden bg-gradient sticky top-0 bg-_1 text-white flex flex-col justify-between">
          <div className="">
            <div className="block w-full">
              <ul className="">
                {links.map((item) => (
                  <li
                    className="flex flex-row justify-start items-center pl-6 space-x-2 py-4"
                    id={location.pathname == item.href ? "active" : ""}
                  >
                    {item.icon}
                    <a
                      onClick={() => onSelect(item)}
                      className="px-2 text-black"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="flex flex-row justify-start items-center pl-6 space-x-2 py-4">
                  <LogOut color="black" />
                  <a className="px-2 text-black" onClick={authContext.logout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center pb-4 mt-6">
            <img
              src=""
              alt="Vibes logo"
              className="rounded-lg mr-4 w-12 h-12 bg-white border inline-flex items-center justify-center"
            />
            <div className="flex-1 flex flex-col justify-start">
              <p className="font-bold text-black">Daniel</p>
              <p className="tracking-widest text-xs text-black">Staff</p>
            </div>
          </div>
        </aside>
        <main className="flex-1 relative">
          <div className="flex text-blue-300 sticky bg-offwhite top-0 shadow justify-between z-40">
            {/* <SearchInput
            value={""}
            className="text-xs"
            onChange={() => {}}
            placeholder="Search..."
          /> */}
            {/* <ToastContainer /> */}
          </div>
          <section className="relative z-10 py-10 px-4">
            <Switch>
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
              <ProtectedRoute
                exact
                path="/dashboard/events"
                component={EventList}
              />
              <ProtectedRoute path="/dashboard/scanners" component={Scanners} />
              <ProtectedRoute
                path="/dashboard/events/tickets"
                component={Tickets}
              />
              <ProtectedRoute path="/dashboard/admins" component={Admins} />
              <Route path="*" component={NotFound} />
            </Switch>
          </section>
        </main>
      </div>
    </div>
  );
};

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
