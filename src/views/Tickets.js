import React, {useState} from "react";
import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router-dom";
import { Table } from "../components/Table";
import RefreshButton from "../components/Buttons/RefreshButton";
import { StatusBadge, isStatus } from "../components/Badge";
import Pagination from "../components/Pagination";
import moment from "moment";

export default function Tickets() {
  const history = useHistory();
  const { state } = history.location;
  const { tickets } = state;

  // Pagination hooks
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(50);
  const indexOfLastPage = currentPage * perPage;
  const indexOfFirstPage = indexOfLastPage - perPage;
  const currentPerPage = tickets.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

      <Table
        columns={["S/N", "Ticket", "Scanner Name", "Time"]}
        items={currentPerPage}
        renderRow={RenderPage}
      />
      <Pagination perPage={perPage} totalData={tickets.length} paginate={paginate} />
    </section>
  );
}

const RenderPage = (item, index) => {
  const history = useHistory();
  const { state } = history.location;
  const { user } = state;
  return (
    <tr className={`${index % 2 === 0 ? "bg-green-100" : ""}`}>
      {[index + 1, item.ticket, user.name, moment(item.created_at).fromNow()].map((text, idx) => (
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
