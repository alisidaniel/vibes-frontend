import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/Authentication/authContext";
import vibesImage from "../assets/pm2.jpeg";

export default function Login() {
  const authContext = useContext(AuthContext);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authContext?.isAuthenticated) {
      history.push("/home");
    }
  }, []);

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
          setLoading(false);
          // toast.error("Error: Please spin up server.");
          btnLoader.removeAttribute("disabled", "");
          btnLoader.innerHTML = "Login";
        });
    }
  };

  return (
    <div className="w-full h-screen py-6 justify-center items-center" id="body">
      <div className="flex justify-center items-center">
        <div
          className="p-10 lg:w-7/12 md:w-5/12 sm:w-full xs:w-full rounded-lg"
          id="login"
        >
          <div className="flex flex-row justify-center items-center space-x-2">
            <img className="rounded-lg w-11 h-11" src={vibesImage} alt="logo" />
            <span>Vibes Scanner</span>
          </div>
          <div className="py-4 text-center">
            <span id="h6">Login</span>
          </div>
          <form onSubmit={handleSubmit(doLogin)}>
            <div className="mb-3">
              <label className="block mb-2" for="username" id="label">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Username"
                {...register("username", { required: true })}
              />
            </div>
            {/* errors will return when field validation fails  */}
            {errors.username && (
              <span className="text-danger-400">Username is required</span>
            )}

            <div className="mb-3">
              <label className="block mb-2" for="username" id="label">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
                type="password"
                {...register("password", { required: true })}
              />
            </div>
            {/* errors will return when field validation fails  */}
            {errors.password && (
              <span className="text-danger-400">Password is required</span>
            )}
            <div>
              <a href="/forgot/password" className="text-purple-500">
                Forgot password
              </a>
            </div>

            <div className="mb-3 py-5">
              <button
                id="submit"
                className="block w-full py-2 rounded-lg bg-black text-white"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-row justify-center mt-2">
            <span>© Vibes SA Inc</span>
          </div>
        </div>
      </div>
    </div>
  );
}
