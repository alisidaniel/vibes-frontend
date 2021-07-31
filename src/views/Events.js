import React, { useState, useContext, useEffect } from "react";
import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router-dom";
import RefreshButton from "../components/Buttons/RefreshButton";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Events() {
  // const [loading, setLoading] = useState(true);
  const history = useHistory();
  return (
    <div className="w-full h-screen w-screen">
      <Header appName="vibes" link="/home" username="Dani" title="Home" />
      <div className="flex flex-row mt-8 mb-8">
        <div className="px-4 py-4 rounded-r-lg bg-gray-light"></div>
        <div className="mt-1 ml-2">
          <a href="#">
            <p className="font-bold">Recent Events</p>
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
      <div className="md:px-16 xl:px-56 lg:px-20 mb-4">
        <a href="/history">
          <div className="w-80 px-2 md:w-full lg:w-full h-19 shadow-lg rounded-lg flex flex-row space-x-2">
            <div className="bg-purple w-2 rounded-l-lg"></div>
            <div className="flex flex-row justify-center items-center space-x-3">
              <div className="flex event-card rounded-full w-12 h-12 justify-center items-center text-white font-bold">
                <span>Ba</span>
              </div>
              <div className="font-bold">Banjoko</div>
            </div>
          </div>
        </a>
      </div>
      <div className="md:px-16 xl:px-56 lg:px-20 mb-4">
        <a href="/history">
          <div className="w-80 px-2 md:w-full lg:w-full h-19 shadow-lg rounded-lg flex flex-row space-x-2">
            <div className="bg-purple w-2 rounded-l-lg"></div>
            <div className="flex flex-row justify-center items-center space-x-3">
              <div className="flex event-card rounded-full w-12 h-12 justify-center items-center text-white font-bold">
                <span>Ba</span>
              </div>
              <div className="font-bold">Banjoko</div>
            </div>
          </div>
        </a>
      </div>
      <div className="md:px-16 xl:px-56 lg:px-20 mb-4">
        <a href="/history">
          <div className="w-80 px-2 md:w-full lg:w-full h-19 shadow-lg rounded-lg flex flex-row space-x-2">
            <div className="bg-purple w-2 rounded-l-lg"></div>
            <div className="flex flex-row justify-center items-center space-x-3">
              <div className="flex event-card rounded-full w-12 h-12 justify-center items-center text-white font-bold">
                <span>Ba</span>
              </div>
              <div className="font-bold">Banjoko</div>
            </div>
          </div>
        </a>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
