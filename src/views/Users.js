import React, { useState, useContext, useEffect } from "react";
import { Table } from "../components/Table";
import AdminContext from "../context/Admin/adminContect";
import Pagination from "../components/Pagination";
import moment from "moment";

export default function UsersApp() {

  const adminContext = useContext(AdminContext);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoader] = useState([]);

  useEffect(() => {
    adminContext.getUsers().then(res => {
        setAdmins(res);
    }).catch((err) => {});
  }, []);

    //Pagination hooks
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(50);
    const indexOfLastPage = currentPage * perPage;
    const indexOfFirstPage = indexOfLastPage - perPage;
    const currentPerPage = admins.slice(indexOfFirstPage, indexOfLastPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="px-4 py-4 container mx-auto max-w-screen-lg select-none">
      <div className="flex flex justify-between items-between mb-2">
        <div className="flex flex-row">
          <div className="px-4 py-4 rounded-r-lg bg-gray-light"></div>
          <div className="mt-1 ml-2">
            <a href="#">
              <p className="font-bold text-black">List</p>
            </a>
          </div>
        </div>

        <div className="flex flex-row justify-end items-end">
          {/* <button
            onClick={() => toggle("create-scanner")}
            className="flex flex-row bg-green-400 text-white px-2 py-2 rounded-lg"
          >
            <Plus />
            <span> Create New</span>
          </button> */}
        </div>
      </div>

      <Table
        columns={["S/N", "Name", "Email", "Date Created"]}
        items={currentPerPage}
        renderRow={RenderPage}
      />
      <Pagination perPage={perPage} totalData={admins.length} paginate={paginate} />

    </section>
  );
}

const RenderPage = (item, index) => {
  return (
    <tr className={`${index % 2 === 0 ? "bg-green-100" : ""}`}>
      {[
        index + 1,
        item.name,
        item.email,
        moment(item.created_at).fromNow()
      ].map((text, idx) => (
        <td
          key={idx}
          className={`font-light py-2 ${idx === 0 ? "pl-4" : "px-2"}`}
        >
          {text}
        </td>
      ))}
    </tr>
  );
};
