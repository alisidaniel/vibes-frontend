import React, { useState, useContext, useEffect } from "react";
import { List, ArrowLeft } from "react-feather";
import { Link, useParams, useHistory } from "react-router-dom";
import RefreshButton from "../components/Buttons/RefreshButton";

export default function EventList() {
  //   const [loading, setLoading] = useState(true);
  const history = useHistory();
  return (
    <div className="w-full h-screen w-screen">
      <div className="flex flex-row justify-between p-6 border-b">
        <div className="">
          <p className="uppercase h1">vibes</p>
          <a href="#">
            <p className="uppercase home">Home</p>
          </a>
        </div>
        <div className="flex flex-row justify-center items-center space-x-4">
          <span className="h2">Hi, Dani</span>
          <div className="w-10 h-10 bg-gray-light rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-row mt-8 mb-8">
        <div className="px-4 py-4 bg-blue-light2"></div>
        <div className="mt-1 ml-2">
          <a href="#">
            <p className="subtitle">Recent Events</p>
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-between sm:px-4 md:px-4 xs:px-4 lg:px-20 py-1 mb-3">
        <RefreshButton
          onClick={() => window.location.reload(false)}
          loading={false}
        />
        <button
          onClick={() => history.goBack()}
          className="flex flex-row text-black px-2 py-2 rounded-lg"
        >
          <ArrowLeft />
          <span> Back</span>
        </button>
      </div>

      <div className="md:px-16 xl:px-56 lg:px-20">
        <a href="/dashboard/events/tickets">
          <div className="card w-full h-12">
            <div class="border-b border-gray-light">
              <div className="ml-4 border-black vibes-title flex flex-row justify-between items-around w-4/5 pb-3">
                <span className="text-orange-light hover:text-blue-dark text-xl flex flex-row space-x-2 justify-center items-center">
                  <div className="text-black">
                    <List />
                  </div>
                  <Link to="/dashboard/events/tickets">
                    Obi Cubana mums burial.
                  </Link>
                  <span className="text-black">20</span>
                </span>
              </div>
            </div>
          </div>
        </a>
        <a href="/dashboard/events/tickets">
          <div className="card w-full h-12">
            <div class="border-b border-gray-light">
              <div className="ml-4 border-black vibes-title flex flex-row justify-between items-around w-4/5 pb-3">
                <span className="text-orange-light hover:text-blue-dark text-xl flex flex-row space-x-2 justify-center items-center">
                  <div className="text-black">
                    <List />
                  </div>
                  <Link to="/dashboard/events/tickets">
                    Obi Cubana mums burial.
                  </Link>
                  <span className="text-black">20</span>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
