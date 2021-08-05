import React, { useState, useContext } from "react";
import { Menu, User } from "react-feather";
import AuthContext from "../context/Authentication/authContext";
import vibesImage from "../assets/pm2.jpeg";
import { Sidebar } from "./Sidebar";
export const Header = ({
  appName,
  link,
  title,
  username,
  eventLink,
  eventName,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [slider, setSlider] = useState(false);
  const authContext = useContext(AuthContext);
  return (
    <div className="w-full h-20 absolute" id="header">
      <div className="flex flex-row justify-between p-5">
        <div className="flex flex-row justify-center items-center space-x-2">
          <div className="hidden md:flex lg:flex xl:flex space-x-2">
            <img
              className="rounded-full w-11 h-11 bg-white text-white"
              src={vibesImage}
              alt="logo"
            />
            <a className="py-2" href={link}>
              <span className="text-white ">{title}</span>
            </a>
          </div>
          <div className="visible md:invisible lg:invisible text-white">
            <Menu
              onClick={() => {
                setSlider(!slider);
              }}
              color="white"
            />
          </div>
        </div>
        {slider ? <Sidebar /> : null}
        <div className="flex flex-row justify-center items-center space-x-4">
          <span className="text-white">Hi, Dani</span>
          <button
            onClick={() => {
              setDropdown(!dropdown);
            }}
          >
            <div className="w-10 h-10 bg-gray-light rounded-full flex justify-center items-center">
              <User color="white" />
            </div>
          </button>
        </div>
      </div>
      {dropdown ? (
        <div
          class="origin-top-right absolute right-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            {eventLink ? (
              <a
                href={eventLink}
                className="text-gray-700 font-bold block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                {eventName}
              </a>
            ) : null}
            <a
              onClick={authContext.logout}
              className="text-gray-700 font-bold block w-full text-left px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-3"
            >
              Sign out
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};
