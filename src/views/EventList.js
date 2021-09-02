import React, { useState, useContext, useEffect } from "react";
import { ArrowLeft } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import RefreshButton from "../components/Buttons/RefreshButton";
import logo1 from "../assets/01.png";
import AdminContext from "../context/Admin/adminContect";
import PageLoader from "./Loader";
import moment from "moment";
import Pagination from "../components/Pagination";

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

  //Pagination hooks
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(50);
  const indexOfLastPage = currentPage * perPage;
  const indexOfFirstPage = indexOfLastPage - perPage;
  const currentPerPage = events.slice(indexOfFirstPage, indexOfLastPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            {currentPerPage.map((item, index) => (
              <Link
                to={{
                  pathname: "/dashboard/events/tickets",
                  state: { tickets: item.tickets, user: item.user },
                }}
              >
                <div className="flex flex-row justify-between items-between shadow p-5 mt-4">
                  <span className="text-purple-500">{item.name}</span>
                  <span>{moment(item.created_at).fromNow()}</span>
                  <span>{item.tickets.length} scan(s)</span>
                </div>
              </Link>
            ))}
            <Pagination perPage={perPage} totalData={events.length} paginate={paginate} />
          </div>
        )}
      </div>
    </section>
  );
}
