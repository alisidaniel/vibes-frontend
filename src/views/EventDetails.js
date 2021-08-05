import React, { useState, useContext, useEffect } from "react";
import { Table } from "../components/Table";
import { StatusBadge, isStatus } from "../components/Badge";
import { Header } from "../components/Header";
import { ArrowLeft } from "react-feather";
import RefreshButton from "../components/Buttons/RefreshButton";
import { useHistory } from "react-router-dom";

export default function EventDetails() {
  const history = useHistory();
  const { state } = history.location;
  const { data } = state;

  return (
    <div className="w-full h-screen w-screen">
      <Header appName="vibes" link="/home" username="Dani" title="Home" />
      <div className="p-7 mb-2">
        <div className="flex flex-row justify-between mt-16 mb-4">
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
        <Table
          columns={["S/N", "Ticket", "Date"]}
          items={data.tickets}
          renderRow={RenderPage}
        />
      </div>
    </div>
  );
}

const RenderPage = (item, index) => {
  return (
    <tr className={`${index % 2 === 0 ? "bg-green-100" : ""}`}>
      {[
        index + 1,
        `${item.ticket.substring(0, 7)}..`,
        item.created_at.substring(0, 10),
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
