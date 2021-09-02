import React, { useState, useContext, useEffect } from "react";
import { ArrowLeft } from "react-feather";
import { useHistory, Link } from "react-router-dom";
import RefreshButton from "../components/Buttons/RefreshButton";
import { Header } from "../components/Header";
import logo1 from "../assets/01.png";
import UserContext from "../context/User/userContext";
import PageLoader from "./Loader";
import moment from 'moment';
import Pagination from "../components/Pagination";

export default function Events() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const userContext = useContext(UserContext);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    userContext
      .getEvents()
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {});
  }, []);

    //Pagination hooks
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(50);
    const indexOfLastPage = currentPage * perPage;
    const indexOfFirstPage = indexOfLastPage - perPage;
    const currentPerPage = events.slice(indexOfFirstPage, indexOfLastPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

      <div className="p-10">
        <div className="flex flex-row justify-between mt-20">
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
            <PageLoader />
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 py-3">
                <div className="w-48 h-28 shadow-lg border" id="box">
                  <span className="font-bold p-4">Events</span>
                  <img className="w-36 h-20" src={logo1} alt="logo" />
                </div>
                <div className="text-center w-48 h-28 shadow-lg p-2 py-7">
                  <p className="font-bold">{events[0].tickets.length}</p>
                  <p>Total Scan</p>
                </div>
              </div>
              {currentPerPage.map((item) => (
                <Link
                  to={{
                    pathname: "/events/history",
                    state: { data: item },
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-between items-between shadow p-5 mt-4">
                    <p className="text-purple-500">{item.name}</p>
                    <p className="text-sm">{moment(item.created_at).fromNow()}</p>
                  </div>
                </Link>
              ))}
              <Pagination perPage={perPage} totalData={events.length} paginate={paginate} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
