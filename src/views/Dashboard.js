import React, { useContext, useEffect, useState } from "react";
import AdminContext from "../context/Admin/adminContect";
import PageLoader from "./Loader";
import { Link, useHistory } from "react-router-dom";

import { List, ArrowLeft } from "react-feather";
import RefreshButton from "../components/Buttons/RefreshButton";

export default function Dashboard() {
  const history = useHistory();
  const adminContext = useContext(AdminContext);
  const [scanners, setScanners] = useState([]);
  const [events, setEvents] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    adminContext
      .getScannersUsers()
      .then((res) => {
        setScanners(res.data.data);
        setLoading(false);
      })
      .catch((err) => {});
    adminContext
      .getEvents()
      .then((res) => {
        setEvents(res.data.data);
        setLoading(false);
      })
      .catch((err) => {});
    adminContext
      .getAdmins()
      .then((res) => {
        setAdmins(res.data.data);
        setLoading(false);
      })
      .catch((err) => {});
  }, []);
  return (
    <section className="px-4 py-4 container mx-auto max-w-screen-lg select-none">
      <div>
        <div className="pb-4">
          <span id="h1">Overview</span>
        </div>
        <div className="flex flex-row justify-between">
          <RefreshButton
            onClick={() => window.location.reload(false)}
            loading={false}
          />
        </div>
        {loading ? (
          <PageLoader />
        ) : (
          <div class="min-h-screen flex justify-center">
            <div class="max-w-screen-xl w-full px-4 py-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div class="flex flex-col h-40 flex-1 px-4 py-12 bg-white rounded-lg shadow-lg event-card">
                <div class="flex-1">
                  <div className="text-center py-2">
                    <span className="text-white" id="h1">
                      {admins.length}
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-2">
                    <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                    <span className="text-white" id="dashboardText">
                      ADMINS
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col h-40 flex-1 px-4 py-12 rounded-lg shadow-lg event-card2">
                <div class="flex-1">
                  <div className="text-center py-2">
                    <span className="text-white" id="h1">
                      {events.length}
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-2">
                    <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                    <span className="text-white" id="dashboardText">
                      EVENTS
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col h-40 flex-1 px-4 py-12 bg-white rounded-lg shadow-lg event-card3">
                <div class="flex-1">
                  <div className="text-center py-2">
                    <span className="text-white" id="h1">
                      {scanners.length}
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-2">
                    <div className="bg-purple-500 w-3 h-3 rounded-full"></div>
                    <span className="text-white" id="dashboardText">
                      SCANNNERS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
