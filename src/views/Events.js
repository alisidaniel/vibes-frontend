import React, { useState, useContext, useEffect } from "react";
import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router-dom";
import RefreshButton from "../components/Buttons/RefreshButton";
import { Header } from "../components/Header";
import logo1 from "../assets/01.png";
import UserContext from "../context/User/userContext";

export default function Events() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const userContext = useContext(UserContext);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    userContext
      .getEvents()
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="w-full h-screen w-screen">
      <Header
        appName="vibes"
        link="/home"
        username="Dani"
        title="Home"
        eventLink="/events"
        eventName="Event Lists"
      />
      <div className="p-16">
        <div className="flex flex-row justify-between">
          <RefreshButton
            onClick={() => window.location.reload(false)}
            loading={false}
          />
          <button
            onClick={() => history.goBack()}
            className="flex flex-row shadow px-8 text-purple-400 px-2 py-2 rounded-lg"
          >
            <ArrowLeft className="text-purple-400" color="purple" />
            <span> Back</span>
          </button>
        </div>
        <div>
          {loading ? (
            ""
          ) : (
            <div>
              <div className="flex flex-row py-3">
                <div className="w-48 h-28 shadow-lg border" id="box">
                  <span className="font-bold p-4">Events</span>
                  <img className="w-36 h-20" src={logo1} alt="logo" />
                </div>
                <div className="text-center w-48 h-28 shadow-lg p-2 py-7">
                  <p className="font-bold">{events[0].tickets.length}</p>
                  <p>Total Scan</p>
                </div>
              </div>
              {events.map((item) => (
                <a href="/events/history">
                  <div className="flex flex-row justify-between items-between shadow p-5 mt-4">
                    <p className="text-purple-500">{item.name}</p>
                    <p>{item.created_at}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
