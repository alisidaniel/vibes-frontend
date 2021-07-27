import React from "react";
import { UserPlus, CreditCard, Settings, User } from "react-feather";
import vibesImage from "../assets/pm.png";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export default function Home() {
  //   const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-screen w-screen">
      <Header appName="vibes" username="Dani" title="Dashbord" />

      <div className="mt-4">
        <Link to="/dashboard/events">
          <div className="flex justify-center items-center sm:px-10 xs:px-20 md:px-24 xl:px-56 lg:px-40 py-2">
            <div className="admin-card w-96 lg:w-full border-shadow-lg border shadow-lg bg-black h-56 xs:p-3 xs:p-2 sm:p-2 sm:p-2 rounded-xl">
              <div className="flex flex-row justify-between p-10">
                <span className="text-white">
                  <CreditCard />
                </span>
                <div className="text-white font-bold uppercase">Events</div>
              </div>
              <div className="w-full border border-white -mt-6"></div>
              <div className="flex flex-row justify-between pt-4">
                <div className="p-10">
                  <span className="text-white h6">Total</span>
                  <div className="text-white font-bold text-lg">100</div>
                </div>
                <div className="h-20 w-20 pt-5">
                  <img src={vibesImage} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/dashboard/scanners">
          <div className="flex justify-center items-center sm:px-10 xs:px-20 md:px-24 xl:px-56 lg:px-40 py-2">
            <div className="admin-card w-96 lg:w-full border-shadow-lg border shadow-lg bg-black h-56 xs:p-3 xs:p-2 sm:p-2 sm:p-2 rounded-xl">
              <div className="flex flex-row justify-between p-10">
                <span className="text-white">
                  <UserPlus />
                </span>
                <div className="text-white font-bold uppercase">Scanners</div>
              </div>
              <div className="w-full border border-white -mt-6"></div>
              <div className="flex flex-row justify-between pt-4">
                <div className="p-10">
                  <span className="text-white h6">Total</span>
                  <div className="text-white font-bold text-lg">100</div>
                </div>
                <div className="h-20 w-20 pt-5">
                  <img src={vibesImage} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/dashboard/admins">
          <div className="flex justify-center items-center sm:px-10 xs:px-20 md:px-24 xl:px-56 lg:px-40 py-2">
            <div className="admin-card w-96 lg:w-full border-shadow-lg border shadow-lg bg-black h-56 xs:p-3 xs:p-2 sm:p-2 sm:p-2 rounded-xl">
              <div className="flex flex-row justify-between p-10">
                <span className="text-white">
                  <Settings />
                </span>
                <div className="text-white font-bold uppercase">Admins</div>
              </div>
              <div className="w-full border border-white -mt-6"></div>
              <div className="flex flex-row justify-between pt-4">
                <div className="p-10">
                  <span className="text-white h6">Total</span>
                  <div className="text-white font-bold text-lg">40</div>
                </div>
                <div className="h-20 w-20 pt-5">
                  <img src={vibesImage} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
