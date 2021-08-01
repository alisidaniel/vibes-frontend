import React, { useState, useContext, useEffect } from "react";
import vibesImage from "../assets/pm2.jpeg";
export default function Login2() {
  return (
    <div
      className="w-full h-screen py-24 justify-center items-center"
      id="body"
    >
      <div className="flex justify-center items-center">
        <div className="w-6/12 p-10 rounded-lg" id="login">
          <div className="flex flex-row justify-center items-center space-x-2">
            <img className="rounded-lg w-11 h-11" src={vibesImage} alt="logo" />
            <span>Vibes Scanner</span>
          </div>
          <div className="py-4 text-center">
            <span id="h6">Login</span>
          </div>
          <form>
            <div className="mb-3">
              <label className="block mb-2" for="username" id="label">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Username"
                // {...register("username", { required: true })}
              />
            </div>

            <div className="mb-3">
              <label className="block mb-2" for="username" id="label">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
                type="password"
                // {...register("username", { required: true })}
              />
            </div>
            <div>
              <a href="#">Forgot password</a>
            </div>

            <div className="mb-3 py-5">
              <button className="block w-full py-2 rounded-lg bg-black text-white">
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
