import React, { useState, useContext, useEffect } from "react";
import { Plus } from "react-feather";
import { Modal, Card } from "@wigxel/react-components/lib/cards";
import { Table } from "../components/Table";
import { HeadingGroup } from "../components/Typography/Heading";
import AdminContext from "../context/Admin/adminContect";
import { useForm } from "react-hook-form";
import Pagination from "../components/Pagination";
import moment from "moment";

export default function Scanners() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { toggle } = Modal.useModal();
  const adminContext = useContext(AdminContext);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoader] = useState([]);

  useEffect(() => {
    adminContext
      .getAdmins()
      .then((res) => {
        setAdmins(res.data.data);
      })
      .catch((err) => {});
  }, []);

  const doCreateAdmin = async (formData) => {
    adminContext
      .addAdmin(
        formData.name,
        formData.email,
        formData.password,
        formData.username
      )
      .then((res) => {
        alert("Successful");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <button
            onClick={() => toggle("create-scanner")}
            className="flex flex-row bg-green-400 text-white px-2 py-2 rounded-lg"
          >
            <Plus />
            <span> Create New</span>
          </button>
        </div>
      </div>

      <Table
        columns={["S/N", "Name", "Username", "Email", "Date Created", ""]}
        items={currentPerPage}
        renderRow={RenderPage}
      />
      <Pagination perPage={perPage} totalData={admins.length} paginate={paginate} />

      <Modal name="create-scanner" size="sm">
        <Card style={{ backgroundColor: "white" }}>
          <HeadingGroup
            heading="Create Admin"
            subHeading="Create new admin for vibe events."
          />
          <form onSubmit={handleSubmit(doCreateAdmin)}>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border-none rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
                {...register("name", { required: true })}
              />
            </div>
            {/* errors will return when field validation fails  */}
            {errors.name && (
              <span className="text-danger-400">Name is required</span>
            )}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border-none rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Username"
                {...register("username", { required: true })}
              />
            </div>
            {/* errors will return when field validation fails  */}
            {errors.username && (
              <span className="text-danger-400">Username is required</span>
            )}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border-none rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <span className="text-danger-400">Email is required</span>
            )}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                {...register("password", { required: true })}
              />
            </div>
            {/* errors will return when field validation fails  */}
            {errors.password && (
              <span className="text-danger-400">Password is required</span>
            )}

            <button className="w-full bg-black outline-white uppercase text-white font-bold py-2 px-4 rounded-lg">
              Submit
            </button>
          </form>
        </Card>
      </Modal>
    </section>
  );
}

const RenderPage = (item, index) => {
  const adminContext = React.useContext(AdminContext);
  const deleteUser = async (user) => {
    try {
      await adminContext.deleteUser(user);
      alert("Successfully deleted");
      window.location.reload(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <tr className={`${index % 2 === 0 ? "bg-green-100" : ""}`}>
      {[
        index + 1,
        item.name,
        item.username,
        item.email,
        moment(item.created_at).fromNow(),
        "delete",
      ].map((text, idx) => (
        <td
          key={idx}
          className={`font-light py-2 ${idx === 0 ? "pl-4" : "px-2"}`}
        >
          {text === "delete" ? (
            <button
              onClick={() => {
                deleteUser(item.id);
              }}
              className="bg-red-500 px-2 py-1 rounded-lg text-white"
            >
              Delete
            </button>
          ) : (
            text
          )}
        </td>
      ))}
    </tr>
  );
};
