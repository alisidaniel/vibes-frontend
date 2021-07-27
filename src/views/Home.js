import React, { useState, useContext, useEffect } from "react";
import { Camera, Database } from "react-feather";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Home() {
  //   const [loading, setLoading] = useState(true);
  return (
    <div className="w-full h-screen w-screen">
      <Header appName="vibes" link="/home" username="Dani" title="Home" />
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
      <div className="py-16">
        <div className="flex flex-row justify-center space-x-2">
          <Database />
          <span className="font-bold">Scanned Data</span>
        </div>
        <div className="flex justify-center">
          <span className="font-bold">200</span>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
