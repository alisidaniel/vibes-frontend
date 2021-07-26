import React, { useState, useContext, useEffect } from "react";
import { List } from "react-feather";
import vibesImage from "../assets/pm2.jpeg";

export default function EventList() {
  //   const [loading, setLoading] = useState(true);
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
      <div className="flex flex-row mt-8">
        <div className="px-4 py-4 bg-blue-light2"></div>
        <div className="mt-1 ml-2">
          <a href="#">
            <p className="subtitle">Recent Events</p>
          </a>
        </div>
      </div>

      <div className="sm:px-10 xs:px-20 md:px-24 xl:px-56 lg:px-40">
        <a href="/history">
          <div className="card w-full rounded-full h-32 mt-5 px-5 py-5">
            <div className="card-subtitle rounded-full h-20 w-full px-2 py-2">
              <div className="flex flex-row justify-start items-center">
                <div className="w-16 h-16 bg-gray-light rounded-full">
                  <img
                    src={vibesImage}
                    className="h-16 w-16 rounded-full"
                    atl="logo"
                  />
                </div>
                <div className="ml-4 vibes-title flex flex-row justify-evenly items-around w-4/5">
                  <span> Obi Cubana mums burial.</span>
                  <div className="flex flex-row">
                    <List className /> 20
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="sm:px-10 xs:px-20 md:px-24 xl:px-56 lg:px-40">
        <a href="/history">
          <div className="card w-full rounded-full h-32 mt-5 px-5 py-5">
            <div className="card-subtitle rounded-full h-20 w-full px-2 py-2">
              <div className="flex flex-row justify-start items-center">
                <div className="w-16 h-16 bg-gray-light rounded-full">
                  <img
                    src={vibesImage}
                    className="h-16 w-16 rounded-full"
                    atl="logo"
                  />
                </div>
                <div className="ml-4 vibes-title flex flex-row justify-evenly items-around w-4/5">
                  <span> Obi Cubana mums burial.</span>
                  <div className="flex flex-row">
                    <List className /> 20
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
