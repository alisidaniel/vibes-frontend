import React, { useContext, useEffect, useState } from "react";
import AdminContext from "../context/Admin/adminContect";

export default function Dashboard() {
  const adminContext = useContext(AdminContext);
  const [scanners, setScanners] = useState([]);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    adminContext
      .getScannersUsers()
      .then((res) => {
        setScanners(res.data.data);
      })
      .catch((err) => {});
    adminContext
      .getEvents()
      .then((res) => {
        setEvents(res.data.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <section className="px-4 py-4 container mx-auto max-w-screen-lg select-none">
      <div>
        <div className="pb-4">
          <span id="h1">Overview</span>
        </div>

        <div className="flex flex-row p-6 justify-around items-around bg-white w-full h-32  shadow-lg">
          <div className="flex flex-row justify-around itmes-around space-x-12">
            <div className="grid-cols-1 justify-center">
              <div className="text-center py-2">
                <span id="h1">20</span>
              </div>
              <div className="flex flex-row justify-center items-center space-x-2">
                <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                <span id="dashboardText">ADMINS</span>
              </div>
            </div>
            <div className="border"></div>
          </div>
          <div className="flex flex-row justify-around itmes-around space-x-24">
            <div className="grid-cols-1 justify-center">
              <div className="text-center py-2">
                <span id="h1">{events.length}</span>
              </div>
              <div className="flex flex-row justify-center items-center space-x-2">
                <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                <span id="dashboardText">EVENTS</span>
              </div>
            </div>
            <div className="border"></div>
          </div>
          <div className="">
            <div className="grid-cols-1 justify-center">
              <div className="text-center py-2">
                <span id="h1">{scanners.length}</span>
              </div>
              <div className="flex flex-row justify-center items-center space-x-2">
                <div className="bg-purple-500 w-3 h-3 rounded-full"></div>
                <span id="dashboardText">SCANNNERS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
