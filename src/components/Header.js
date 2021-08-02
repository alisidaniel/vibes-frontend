import React from "react";
import { User } from "react-feather";
import { Link } from "react-router-dom";
import AuthContext from "../context/Authentication/authContext";
import vibesImage from "../assets/pm2.jpeg";
export const Header = ({
  appName,
  link,
  title,
  username,
  eventLink,
  eventName,
}) => {
  const [dropdown, setDropdown] = React.useState(false);
  const authContext = React.useContext(AuthContext);
  return (
    <div className="w-full h-20" id="header">
      <div className="flex flex-row justify-between p-5">
        <div className="flex flex-row justify-center items-center space-x-2">
          <img
            className="rounded-full w-11 h-11 bg-white text-white"
            src={vibesImage}
            alt="logo"
          />
          <a href={link}>
            <span className="text-white">{title}</span>
          </a>
        </div>
        <div className="flex flex-row justify-center items-center space-x-4">
          <span className="text-white">Hi, Dani</span>
          <button onClick={() => setDropdown(!dropdown)}>
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
            <button
              onClick={authContext.logout}
              className="text-gray-700 font-bold block w-full text-left px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-3"
            >
              Sign out
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
