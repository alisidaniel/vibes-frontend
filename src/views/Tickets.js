import React, { useState, useContext, useEffect } from "react";
import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router-dom";
import { Table } from "../components/Table";
import RefreshButton from "../components/Buttons/RefreshButton";
import { StatusBadge, isStatus } from "../components/Badge";
import { Header } from "../components/Header";

export default function Tickets() {
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
    },
    {
      index: 4,
      name: "Alisi Joe",
      me: "Alisi Joe",
      you: "Alisi Joe",
      him: "Alisi Joe",
    },
    {
      index: 5,
      name: "Alisi Joe",
      me: "Alisi Joe",
      you: "Alisi Joe",
      him: "Alisi Joe",
    },
  ];
  return (
    <section className="px-4 py-4 container mx-auto max-w-screen-lg select-none">
      <div className="flex flex-row justify-between items-between sm:px-4 md:px-2 xs:px-4 py-3">
        <RefreshButton
          onClick={() => window.location.reload(false)}
          loading={false}
        />
        <button
          onClick={() => history.goBack()}
          className="flex flex-row shadow px-8 text-purple-400 px-2 py-2 rounded-lg"
        >
          <ArrowLeft />
          <span> Back</span>
        </button>
      </div>
      <div className="ml-10">
        <Table
          columns={["S/N", "Ticket", "Scanner Name", "Event", "Time"]}
          items={dumData}
          renderRow={renderPage}
        />
      </div>
    </section>
  );
}

const renderPage = (item, index) => {
  console.log(item);
  return (
    <tr className={`${index % 2 === 0 ? "bg-gray-light" : ""}`}>
      {[index + 1, item.name, item.me, item.you, "2 days ago"].map(
        (text, idx) => (
          <td
            key={idx}
            className={`font-light py-2 ${idx === 0 ? "pl-4" : "px-2"}`}
          >
            {isStatus(text) ? <StatusBadge status={String(text)} /> : text}
          </td>
        )
      )}
    </tr>
  );
};
