import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../context/Authentication/authContext";
import { LogOut, Grid, Users, Calendar, Chrome } from "react-feather";

export const Sidebar = () => {
  const location = useLocation();
  const authContext = useContext(AuthContext);
  const links = [
    {
      id: 1,
      label: "Dashboard",
      icon: <Grid color="black" />,
      href: "/dashboard",
    },
    {
      id: 2,
      label: "Admins",
      icon: <Users color="black" />,
      href: "/dashboard/admins",
    },
    {
      id: 3,
      label: "Events",
      icon: <Calendar color="black" />,
      href: "/dashboard/events",
    },
    {
      id: 4,
      label: "Scanners",
      icon: <Chrome color="black" />,
      href: "/dashboard/scanners",
    },
    {
      id: 5,
      label: "App Users",
      icon: <Users color="black" />,
      href: "/dashboard/app/users",
    },
  ];
  const [selected, setSelected] = useState({ href: "/dashboard" });
  const onSelect = (i) => {
    setSelected(i);
  };
  return (
    <aside className="select-none max-w-xs w-40 h-screen overflow-y-scroll overflow-hidden bg-gradient sticky top-0 bg-_1 text-white flex flex-col justify-between">
      <div className="">
        <div className="block w-full">
          <ul className="">
            {links.map((item) => (
              <li
                className="flex flex-row justify-start items-center pl-6 space-x-2 py-4"
                id={location.pathname == item.href ? "active" : ""}
              >
                {item.icon}
                <a
                  onClick={() => onSelect(item)}
                  className="px-2 text-black"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex flex-row justify-start items-center pl-6 space-x-2 py-4">
              <LogOut color="black" />
              <a className="px-2 text-black" onClick={authContext.logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center pb-4 mt-6">
        <img
          src=""
          alt="Vibes logo"
          className="rounded-lg mr-4 w-12 h-12 bg-white border inline-flex items-center justify-center"
        />
        <div className="flex-1 flex flex-col justify-start">
          <p className="font-bold text-black">Daniel</p>
          <p className="tracking-widest text-xs text-black">Staff</p>
        </div>
      </div>
    </aside>
  );
};
