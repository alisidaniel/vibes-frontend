import React, { useState, useContext, useEffect } from "react";
import vibesImage from "../assets/pm2.jpeg";
import qrImage from "../assets/qr.png";

export default function LandingPage() {
  return (
    <div className="w-full h-screen p-10" id="body">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-center items-center space-x-2">
          <img className="rounded-full w-11 h-11" src={vibesImage} alt="logo" />
          <a href="#">
            <span id="title">Vibes Scanner</span>
          </a>
        </div>
        <div>
          <button className="border border-white text-white p-0 px-4 py-2 rounded-lg hover:bg-white hover:text-black">
            Sign In
          </button>
          {/* <button>Login</button> */}
        </div>
      </div>
      <div className="flex flex-row justify-between pt-36">
        <div className="">
          <div className="py-4">
            <p id="text1">Scan and Verify Qr code</p>
            <p id="text1">in seconds!</p>
          </div>
          <p id="text2">Dummy text dummy text dummy text dummy text</p>
          <p id="text2">Dummy text dummy text dummy text dummy text</p>
          <p id="text2">Dummy text dummy text dummy text dummy text</p>
          <div className="pt-10">
            <button className="bg-black text-white px-12 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="">
          <img className="w-100 h-96" src={qrImage} alt="logo" />
        </div>
      </div>
      <span className="flex justify-center items-center" id="footer">
        © Vibes SA Inc
      </span>
    </div>
  );
}
