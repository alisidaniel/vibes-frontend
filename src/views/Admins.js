import React, { useState, useContext, useEffect } from "react";
import { Plus } from "react-feather";
import { Modal, Card } from "@wigxel/react-components/lib/cards";
import { Table } from "../components/Table";
import { isStatus } from "../components/Badge";
import { Footer } from "../components/Footer";
import { HeadingGroup } from "../components/Typography/Heading";
import { Header } from "../components/Header";

export default function Scanners() {
  const { toggle } = Modal.useModal();
  const dumData = [
    {
      index: 0,
      name: "Alisi Daniel",
      me: "Alisi Joe",
      status: "Disable",
    },
    {
      index: 1,
      name: "Alisi Joe",
      me: "Alisi Joe",
      status: "Enable",
    },
    {
      index: 2,
      name: "Alisi Joe",
      me: "Alisi Joe",
      status: "Enable",
    },
    {
      name: "Alisi Joe",
      me: "Alisi Joe",
      you: "Alisi Joe",
      status: "Disable",
    },
    {
      index: 3,
      name: "Alisi Joe",
      me: "Alisi Joe",
      status: "Enable",
    },
    {
      index: 4,
      name: "Alisi Joe",
      me: "Alisi Joe",
      status: "Disable",
    },
    {
      index: 5,
      name: "Alisi Joe",
      me: "Alisi Joe",
      status: "Disable",
    },
  ];
  return (
    <div className="w-full h-screen w-screen">
      <Header
        appName="vibes"
        link="/dashboard"
        username="Dani"
        title="Dashboard"
      />
      <div className="flex flex-row mt-8">
        <div className="px-4 py-4 rounded-r-lg bg-gray-light"></div>
        <div className="mt-1 ml-2">
          <a href="#">
            <p className="font-bold text-black">List</p>
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-end items-end mr-20">
        <button
          onClick={() => toggle("create-scanner")}
          className="flex flex-row bg-green text-white px-2 py-2 rounded-lg"
        >
          <Plus />
          <span> Create New</span>
        </button>
      </div>

      <div className="lg:p-20">
        <Table
          columns={["S/N", "Username", "Email", "Date Created", ""]}
          items={dumData}
          renderRow={renderPage}
        />
      </div>
      <Modal name="create-scanner" size="sm">
        <Card style={{ backgroundColor: "white" }}>
          <HeadingGroup
            heading="Create Admin"
            subHeading="Create new admin for vibe events."
          />
          <form>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border-none rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border-none rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                required
              />
            </div>

            <button className="w-full bg-black outline-white uppercase text-white font-bold py-2 px-4 rounded-lg">
              Submit
            </button>
          </form>
        </Card>
      </Modal>
      <Footer />
    </div>
  );
}

const renderPage = (item, index) => {
  return (
    <tr className={`${index % 2 === 0 ? "bg-gray-light" : ""}`}>
      {[index + 1, item.name, item.me, item.you, item.status].map(
        (text, idx) => (
          <td
            key={idx}
            className={`font-light py-2 ${idx === 0 ? "pl-4" : "px-2"}`}
          >
            {isStatus(text) ? (
              <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  for="toggle"
                  class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
                <label for="toggle" class="text-xs text-gray-700">
                  Disable
                </label>
              </div>
            ) : (
              text
            )}
          </td>
        )
      )}
    </tr>
  );
};
