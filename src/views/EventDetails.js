import React, { useState, useContext, useEffect } from "react";
import { List } from "react-feather";
import vibesImage from "../assets/pm2.jpeg";
import { Table } from "../components/Table";

export default function EventDetails() {
  //   const [loading, setLoading] = useState(true);
  return (
    <div className="w-full h-screen w-screen">
      <div className="flex flex-row justify-between p-6 border-b">
        <div className="">
          <p className="uppercase h1">vibes</p>
          <a href="#">
            <p className="uppercase home">Home</p>
          </a>
        </div>
        <div className="flex flex-row justify-center items-center space-x-4">
          <span className="h2">Hi, Dani</span>
          <div className="w-10 h-10 bg-gray-light rounded-full"></div>
        </div>
      </div>

      <div>
        <Table
          columns={[
            "S/n",
            "Reference",
            "Borrower",
            "Amount",
            "Duration",
            "Schedule",
            "Date",
            "Status",
            "",
          ]}
          items={Array(20).fill(4)}
          renderRow={renderPage}
        />
      </div>
    </div>
  );
}

const renderPage = (item, index) => {
  return (
    <tr className={`${index % 2 === 0 ? "bg-gray-200" : ""}`}>
      {[index + 1, null].map((text, idx) => (
        <td
          key={idx}
          className={`font-light py-2 ${idx === 0 ? "pl-4" : "px-2"}`}
        ></td>
      ))}
    </tr>
  );
};
