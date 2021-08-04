import React, { useState, useContext, useEffect } from "react";
import { List, ArrowLeft } from "react-feather";
import { useHistory } from "react-router-dom";
import RefreshButton from "../components/Buttons/RefreshButton";
import logo1 from "../assets/01.png";

export default function EventList() {
  const history = useHistory();
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

        <div className="flex flex-row py-3">
          <div className="w-48 h-28 shadow-lg border" id="box">
            <span className="font-bold p-4">Events</span>
            <img className="w-36 h-20" src={logo1} alt="logo" />
          </div>
          <div className="text-center w-48 h-28 shadow-lg p-2 py-7">
            <p className="font-bold">4</p>
            <p>Total Events</p>
          </div>
        </div>
        <a href="/dashboard/events/tickets">
          <div className="flex flex-row justify-between items-between shadow p-5 mt-4">
            <p className="text-purple-500">Dami’s birthday bash</p>
            <p>23, Aug 2021</p>
            <p>15 scans</p>
          </div>
        </a>
        <a href="#">
          <div className="flex flex-row justify-between items-between shadow p-5 mt-4">
            <p className="text-purple-500">Dami’s birthday bash</p>
            <p>23, Aug 2021</p>
            <p>15 scans</p>
          </div>
        </a>
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
