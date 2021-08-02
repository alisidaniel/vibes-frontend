import React, { useState, useContext, useEffect } from "react";
import { Table } from "../components/Table";
import { StatusBadge, isStatus } from "../components/Badge";
import { Header } from "../components/Header";
import { ArrowLeft } from "react-feather";
import RefreshButton from "../components/Buttons/RefreshButton";
import { useHistory } from "react-router-dom";

export default function EventDetails() {
  const history = useHistory();
  const dumData = [
    {
      index: 0,
      name: "Alisi Daniel",
      me: "Alisi Joe",
      you: "Alisi Joe",
      him: "Alisi Joe",
    },
    {
      index: 1,
      name: "Alisi Joe",
      me: "Alisi Joe",
      you: "Alisi Joe",
      him: "Alisi Joe",
    },
    {
      index: 2,
      name: "Alisi Joe",
      me: "Alisi Joe",
      you: "Alisi Joe",
      him: "Alisi Joe",
      status: "closed",
    },
    {
      name: "Alisi Joe",
      me: "Alisi Joe",
      you: "Alisi Joe",
      him: "Alisi Joe",
    },
    {
      index: 3,
      name: "Alisi Joe",
      me: "Alisi Joe",
      you: "Alisi Joe",
      him: "Alisi Joe",
      status: "active",
    },
    {
      index: 4,
      name: "Alisi Joe",
      me: "Alisi Joe",
      you: "Alisi Joe",
      him: "Alisi Joe",
      status: "success",
    },
    {
      index: 5,
      name: "Alisi Joe",
      me: "Alisi Joe",
      you: "Alisi Joe",
      him: "Alisi Joe",
      status: "approved",
    },
  ];
  return (
    <div className="w-full h-screen w-screen">
      <Header appName="vibes" link="/home" username="Dani" title="Home" />
      <div className="p-12">
        <div className="flex flex-row justify-between">
          <RefreshButton
            onClick={() => window.location.reload(false)}
            loading={false}
          />
          <button
            onClick={() => history.goBack()}
            className="flex flex-row shadow px-8 text-purple-400 px-2 py-2 rounded-lg"
          >
            <ArrowLeft className="text-purple-400" color="purple" />
            <span> Back</span>
          </button>
        </div>
        <div className="ml-10">
          <Table
            columns={["S/N", "Ticket", "Scanner Name", "Event", "Status", ""]}
            items={dumData}
            renderRow={renderPage}
          />
        </div>
      </div>
    </div>
  );
}

const renderPage = (item, index) => {
  console.log(item);
  return (
    <tr className={`${index % 2 === 0 ? "bg-gray-light" : ""}`}>
      {[
        index + 1,
        item.name,
        item.me,
        item.you,
        item.him,
        item.status,
        null,
      ].map((text, idx) => (
        <td
          key={idx}
          className={`font-light py-2 ${idx === 0 ? "pl-4" : "px-2"}`}
        >
          {isStatus(text) ? <StatusBadge status={String(text)} /> : text}
        </td>
      ))}
    </tr>
  );
};
