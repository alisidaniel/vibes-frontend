import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Labelled } from "@wigxel/react-components/lib/form";
import { useForm } from "react-hook-form";
import { H1 } from "../components/Typography/Heading";
import { P } from "@wigxel/react-components/lib/typography";
import Button from "../components/Buttons";
import { Lock, Mail } from "react-feather";

export default function Login() {
  const { register, handleSubmit } = useForm();

  // const [loading, setLoading] = useState(true);

  return (
    <div class="w-full h-screen">
      <div className="flex justify-center py-48 border-3 border-red">
        <form className="w-3/12">
          <hgroup className="mb-2">
            {/* <H1 bold className="text-_2 uppercase">
              Login
            </H1> */}
            {/* <P>
              <span className="text-xs text-_2">
                Enter your login details to gain access to your account.
              </span>
            </P> */}
          </hgroup>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <button className="w-full bg-white-500 outline-black uppercase text-black font-bold py-2 px-4 rounded">
            Sign IN
          </button>
        </form>
      </div>
    </div>
  );
}
