import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Camera } from "react-feather";

//
import AuthContext from "../context/Authentication/authContext";

export default function Login() {
  const authContext = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  const doLogin = async (formData) => {
    if (formData.username === "" || formData.password === "") {
      // alert("Enter email and password.");
      // toast("Enter email and password.");
      setLoading(false);
    } else {
      const btnLoader = document.querySelector("#submit");
      btnLoader.setAttribute("disabled", "");
      btnLoader.innerHTML = "Loading... ";
      authContext
        ?.userLogin(formData.username, formData.password)
        .then(function (res) {
          console.log(res);
          setLoading(false);
          if (res.message === "Request failed with status code 400") {
            // toast.error("Invalid email or password.");
            btnLoader.removeAttribute("disabled", "");
            btnLoader.innerHTML = "Login";
          }
        })
        .catch(function (err) {
          console.log(err);
          setLoading(false);
          // toast.error("Error: Please spin up server.");
          btnLoader.removeAttribute("disabled", "");
          btnLoader.innerHTML = "Login";
        });
    }
  };

  return (
    <div class="w-full h-screen w-screen body">
      <div className="border-b border-white head">
        <div className="bg-header1 headerIcon"></div>
        <div className="flex justify-center items-center py-6">
          <p className="uppercase h1">vibes</p>
          <Camera size={30} color="white" />
        </div>
      </div>
      <div className="flex justify-end -mt-10 head2">
        <div className="headerIcon2 -mr-2"></div>
      </div>

      <div className="flex justify-center py-20 px-10">
        <form className="w-96" onSubmit={handleSubmit(doLogin)}>
          <hgroup className="mb-2 text-center">
            <p className="h4 uppercase">login</p>
            {/* <P>
              <span className="text-xs text-_2">
                Enter your login details to gain access to your account.
              </span>
            </P> */}
          </hgroup>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border-none rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              {...register("username", { required: true })}
              placeholder="Username"
            />
          </div>
          {/* errors will return when field validation fails  */}
          {errors.username && (
            <span className="text-danger">Password is required</span>
          )}
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              {...register("password", { required: true })}
              placeholder="******************"
            />
          </div>
          {errors.password && (
            <span className="text-danger">Password is required</span>
          )}
          <button
            id="submit"
            className="w-full bg-black outline-white uppercase text-white font-bold py-2 px-4 rounded"
          >
            Sign IN
          </button>
        </form>
      </div>
    </div>
  );
}
