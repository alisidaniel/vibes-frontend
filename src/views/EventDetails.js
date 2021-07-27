import React, { useState, useContext, useEffect } from "react";
import { Table } from "../components/Table";
import { StatusBadge, isStatus } from "../components/Badge";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function EventDetails() {
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
      <div className="flex flex-row mt-8">
        <div className="px-4 py-4 rounded-r-lg bg-gray-light"></div>
        <div className="mt-1 ml-2">
          <a href="#">
            <p className="subtitle">Scanned results</p>
          </a>
        </div>
      </div>

      <div className="lg:p-20">
        <Table
          columns={["S/N", "Ticket", "Scanner Name", "Event", "Status", ""]}
          items={dumData}
          renderRow={renderPage}
        />
      </div>
      <Footer />
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
