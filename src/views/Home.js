import React, { useState, useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Labelled } from "@wigxel/react-components/lib/form";
// import { useForm } from "react-hook-form";
// import { H1 } from "../components/Typography/Heading";
// import { P } from "@wigxel/react-components/lib/typography";
// import Button from "../components/Buttons";
import { Camera } from "react-feather";
// import { Navbar } from "../components/Navbar";

export default function Home() {
  //   const [loading, setLoading] = useState(true);
  return (
    <div className="w-full h-screen w-screen">
      <div className="flex flex-row justify-between p-6 border-b">
        <div className="">
          <p className="uppercase h1">vibes</p>
          <p className="uppercase home">Home</p>
        </div>
        <div className="flex flex-row justify-center items-center space-x-4">
          <span className="h2">Hi, Dani</span>
          <div className="w-10 h-10 bg-gray-light rounded-full"></div>
        </div>
      </div>
      <div className="flex-col grid justify-center items-center py-20 px-10">
        <div className="flex justify-center">
          <p className="welcome">Welcome to Vibes</p>
        </div>
        <div>
          <p className="">Click button to start scanning.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="flex flex-row bg-black p-3 text-white px-12 space-x-3">
          <Camera size={30} color="white" />
          <p className="font-bold">Scan</p>
        </button>
      </div>
    </div>
  );
}
