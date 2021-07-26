import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Camera } from "react-feather";

export default function Login() {
  const { register, handleSubmit } = useForm();
  // const [loading, setLoading] = useState(true);

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
        <form className="w-96" action="/dashboard">
          <hgroup className="mb-2 text-center">
            <p className="h4">Password reset</p>
          </hgroup>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <button className="w-full bg-black outline-white uppercase text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
