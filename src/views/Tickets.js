import React, { useState, useContext, useEffect } from "react";
import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router-dom";
import { Table } from "../components/Table";
import RefreshButton from "../components/Buttons/RefreshButton";
import { StatusBadge, isStatus } from "../components/Badge";

export default function Tickets() {
  const history = useHistory();
  const { state } = history.location;
  const { tickets, user } = state;

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
          columns={["S/N", "Ticket", "Scanner Name", "Time"]}
          items={tickets}
          renderRow={RenderPage}
        />
      </div>
    </section>
  );
}

const RenderPage = (item, index) => {
  const history = useHistory();
  const { state } = history.location;
  const { user } = state;
  return (
    <tr className={`${index % 2 === 0 ? "bg-gray-light" : ""}`}>
      {[index + 1, item.ticket, user.name, item.created_at].map((text, idx) => (
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
