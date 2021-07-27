import React, { useState, useContext, useEffect } from "react";
import { Camera, Database } from "react-feather";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Home() {
  useEffect(() => {
    const qrcode = window.qrcode;

    const video = document.createElement("video");
    const canvasElement = document.getElementById("qr-canvas");
    const canvas = canvasElement.getContext("2d");

    const qrResult = document.getElementById("qr-result");
    const outputData = document.getElementById("outputData");
    const btnScanQR = document.getElementById("btn-scan-qr");

    let scanning = false;

    qrcode.callback = (res) => {
      if (res) {
        outputData.innerText = res;
        scanning = false;

        video.srcObject.getTracks().forEach((track) => {
          track.stop();
        });

        qrResult.hidden = false;
        canvasElement.hidden = true;
        btnScanQR.hidden = false;
      }
    };

    btnScanQR.onclick = () => {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then(function (stream) {
          scanning = true;
          qrResult.hidden = true;
          btnScanQR.hidden = true;
          canvasElement.hidden = false;
          video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
          video.srcObject = stream;
          video.play();
          tick();
          scan();
        });
    };

    function tick() {
      canvasElement.height = video.videoHeight;
      canvasElement.width = video.videoWidth;
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

      scanning && requestAnimationFrame(tick);
    }

    function scan() {
      try {
        qrcode.decode();
      } catch (e) {
        setTimeout(scan, 300);
      }
    }
  }, []);
  return (
    <div className="w-full h-screen w-screen">
      <Header
        appName="vibes"
        link="/home"
        username="Dani"
        title="Home"
        eventLink="/events"
        eventName="Event Lists"
      />
      <div className="flex-col grid justify-center items-center py-20 px-10">
        <div className="flex justify-center">
          <p className="welcome">Welcome to Vibes</p>
        </div>
        <div>
          <p className="">Click button to start scanning.</p>
        </div>
      </div>
      <div className="border border-black">
        <canvas hidden="" id="qr-canvas"></canvas>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          id="btn-scan-qr"
          className="flex flex-row bg-black p-3 text-white px-12 space-x-3"
        >
          <Camera size={30} color="white" />
          <p className="font-bold">Scan</p>
        </button>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div id="qr-result" hidden="">
          <b>Scan result:</b> <span id="outputData"></span>
        </div>
      </div>
      <div className="py-8">
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
