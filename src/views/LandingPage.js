import React, { useState, useContext, useEffect } from "react";
import vibesImage from "../assets/pm2.jpeg";
import qrImage from "../assets/qr.png";

export default function LandingPage() {
  return (
    <div className="w-auto min-h-screen p-10" id="body">
      <div className="flex flex-row justify-between min-w-full">
        <div className="flex flex-row justify-center items-center space-x-2">
          <img className="rounded-full w-11 h-11" src={vibesImage} alt="logo" />
          <a href="#">
            <span id="title">Vibes Scanner</span>
          </a>
        </div>
        <div className="py-2">
          <a
            href="/login"
            className="border border-white text-white sm:text-xs sm:px-2 p-0 px-4 py-2 rounded-lg hover:bg-white hover:text-black"
          >
            Sign In
          </a>
          {/* <button>Login</button> */}
        </div>
      </div>

      <div className="lg:flex md:flex lg:flex-row md:flex-row justify-between pt-36 xs:grid sm:grid">
        <div className="">
          <div className="py-4">
            <p id="text1">Scan and Verify Qr code</p>
            <p id="text1">in seconds!</p>
          </div>
          <p id="text2">
            This scanner only works with QR codes generated from Vibes tickets
          </p>
          <p id="text2">
            Attempts to use otherwise is prosecutable under the law
          </p>
          <p id="text2">All rights are reserved to vibes SA.</p>
          <div className="pt-10">
            <a
              href="/home"
              className="bg-black text-white px-12 py-2 rounded-lg"
            >
              Get Started
            </a>
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
