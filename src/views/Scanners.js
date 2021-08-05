import React, { useState, useContext, useEffect } from "react";
import { Plus } from "react-feather";
import { Modal, Card } from "@wigxel/react-components/lib/cards";
import { Table } from "../components/Table";
import { HeadingGroup } from "../components/Typography/Heading";
import AdminContext from "../context/Admin/adminContect";
import { useForm } from "react-hook-form";

export default function Scanners() {
  const { toggle } = Modal.useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [scanners, setScanners] = useState([]);
  const [events, setEvents] = useState([]);
  const adminContext = useContext(AdminContext);
  useEffect(() => {
    adminContext.getEvents().then((res) => {
      setEvents(res.data.data);
      console.log(res.data.data);
    });
    adminContext
      .getScannersUsers()
      .then((res) => {
        setScanners(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {});
  }, []);
  const doCreateUser = async (formData) => {
    adminContext
      .addUser(
        formData.name,
        formData.email,
        formData.password,
        formData.username,
        formData.event
      )
      .then((res) => {
        alert("Successful");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="px-2 py-2 container mx-auto max-w-screen-lg select-none">
      <div>
        <div className="flex flex-row justify-between itmes-between mb-2">
          <div className="flex flex-row">
            <div className="px-4 py-4 rounded-r-lg bg-gray-light"></div>
            <div className="mt-1 ml-2">
              <a href="#">
                <p className="font-bold text-black">Scanners List</p>
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
          columns={["S/N", "Username", "Event", "Status", "Date"]}
          items={scanners}
          renderRow={RenderPage}
        />

        <Modal name="create-scanner" size="sm">
          <Card style={{ backgroundColor: "white" }}>
            <HeadingGroup
              heading="Create Scanner"
              subHeading="Create new scanner for vibe events."
            />
            <form onSubmit={handleSubmit(doCreateUser)}>
              <div className="mb-4">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  for="password"
                >
                  Select event
                </label>
                <select
                  className="shadow appearance-none border-none py-2 px-3 rounded w-full text-black leading-tight focus:outline-none focus:shadow-outlin"
                  {...register("event", { required: true })}
                >
                  <option>Choose event</option>
                  {events.map((item) => (
                    <option value={item.ref}>{item.name}</option>
                  ))}
                </select>
              </div>
              {/* errors will return when field validation fails  */}
              {errors.event && (
                <span className="text-danger-400">Event is required</span>
              )}
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
      </div>
    </section>
  );
}

const RenderPage = (item, index) => {
  const adminContext = useContext(AdminContext);
  const doActivate = async (user_id, active) => {
    adminContext
      .disableEnable(user_id, active)
      .then((res) => {
        if (active) {
          alert("Scanner user Deactivated.");
          window.location.reload(false);
        }
        if (!active) {
          alert("Scanner user Activated.");
          window.location.reload(false);
        }
      })
      .catch((err) => {});
  };
  return (
    <tr className={`${index % 2 === 0 ? "bg-green-100" : ""}`}>
      {[
        index + 1,
        item.username,
        `${item.event ? item.event.name : "-"}`,
        "",
        item.created_at,
      ].map((text, idx) => (
        <td
          key={idx}
          className={`font-light py-2 ${idx === 0 ? "pl-4" : "px-2"}`}
        >
          {text == "" ? (
            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              {item.active ? (
                <div>
                  <input
                    type="checkbox"
                    // checked="checked"
                    onClick={() => {
                      doActivate(item.id, false);
                    }}
                    name="toggle"
                    id="toggle"
                    class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle"
                    class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              ) : (
                <div>
                  <input
                    type="checkbox"
                    onClick={() => {
                      doActivate(item.id, true);
                    }}
                    checked="checked"
                    name="toggle"
                    id="toggle"
                    class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle"
                    class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              )}
            </div>
          ) : (
            text
          )}
        </td>
      ))}
    </tr>
  );
};
