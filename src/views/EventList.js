import React, { useState, useContext, useEffect } from "react";
import { List, ArrowLeft } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import RefreshButton from "../components/Buttons/RefreshButton";
import logo1 from "../assets/01.png";
import AdminContext from "../context/Admin/adminContect";
import PageLoader from "./Loader";

export default function EventList() {
  const history = useHistory();
  const adminContext = useContext(AdminContext);
  const [loading, setLoader] = useState(true);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    adminContext
      .getEvents()
      .then((res) => {
        setEvents(res.data.data);
        setLoader(false);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="px-4 py-4 container mx-auto max-w-screen-lg select-none">
      <div>
        <div className="">
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
        </div>
        {loading ? (
          <PageLoader />
        ) : (
          <div>
            <div className="flex flex-row py-3">
              <div className="w-48 h-28 shadow-lg border" id="box">
                <span className="font-bold p-4">Events</span>
                <img className="w-36 h-20" src={logo1} alt="logo" />
              </div>
              <div className="text-center w-48 h-28 shadow-lg p-2 py-7">
                <p className="font-bold">{events.length}</p>
                <p>Total Events</p>
              </div>
            </div>
            {events.map((item, index) => (
              <Link
                to={{
                  pathname: "/dashboard/events/tickets",
                  state: { tickets: item.tickets, user: item.user },
                }}
              >
                <div className="flex flex-row justify-between items-between shadow p-5 mt-4">
                  <p className="text-purple-500">{item.name}</p>
                  <p>{item.created_at}</p>
                  <p>{item.tickets.length} scan(s)</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
{
  /* <a href="/dashboard/events/tickets">
<div className="w-80 px-2 md:w-full lg:w-full h-19 shadow-lg rounded-lg flex flex-row space-x-2">
  <div className="bg-purple w-2 rounded-l-lg"></div>
  <div className="flex flex-row justify-between items-evenly">
    <div className="flex flex-row justify-center items-center space-x-3">
      <div className="flex event-card rounded-full w-12 h-12 justify-center items-center text-white font-bold">
        <span>Ba</span>
      </div>
      <div className="font-bold">Banjoko</div>
    </div>
  </div>
</div>
</a> */
}
