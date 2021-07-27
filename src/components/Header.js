import React from "react";
import { User } from "react-feather";
import { Link } from "react-router-dom";

export const Header = ({
  appName,
  link,
  title,
  username,
  eventLink,
  eventName,
}) => {
  const [dropdown, setDropdown] = React.useState(false);
  return (
    <div className="flex flex-row justify-between p-6 border-b">
      <div className="">
        <p className="uppercase h1">{appName}</p>
        <Link to={link}>
          <p className="uppercase home">{title}</p>
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center space-x-4">
        <span className="h2">Hi, {username}</span>
        <button onClick={() => setDropdown(!dropdown)}>
          <div className="w-10 h-10 bg-gray-light rounded-full flex justify-center items-center">
            <User />
          </div>
        </button>
      </div>
      {dropdown ? (
        <div
          class="origin-top-right absolute right-0 mt-14 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
              type="submit"
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
