import React, { useState, useContext, useEffect } from "react";
import { Camera, Database, CameraOff } from "react-feather";
import { Header } from "../components/Header";
import qr1 from "../assets/qr1.png";
import RefreshButton from "../components/Buttons/RefreshButton";
import { ArrowLeft, Send } from "react-feather";
import { useHistory } from "react-router-dom";
import { Modal, Card } from "@wigxel/react-components/lib/cards";
import { TicketModel } from "../components/Messages";

export default function Home() {
  // const [camera, setCamera] = useState(false);
  const { toggle } = Modal.useModal();
  const history = useHistory();
  useEffect(() => {
    // const qrcode = window.qrcode;
    // const video = document.createElement("video");
    // const canvasElement = document.getElementById("qr-canvas");
    // const canvas = canvasElement.getContext("2d");
    // const qrResult = document.getElementById("qr-result");
    // const outputData = document.getElementById("outputData");
    // const btnScanQR = document.getElementById("btn-scan-qr");
    // const btnStopCamera = document.getElementById("btn-stop-camera");
    // let scanning = false;
    // qrcode.callback = (res) => {
    //   if (res) {
    //     outputData.innerText = res;
    //     scanning = false;
    //     video.srcObject.getTracks().forEach((track) => {
    //       track.stop();
    //     });
    //     qrResult.hidden = false;
    //     canvasElement.hidden = true;
    //     btnScanQR.hidden = false;
    //   }
    // };
    // btnStopCamera.onclick = () => {
    //   if (video.srcObject) {
    //     scanning = false;
    //     video.srcObject.getTracks().forEach((track) => {
    //       track.stop();
    //     });
    //     qrResult.hidden = false;
    //     canvasElement.hidden = true;
    //     btnScanQR.hidden = false;
    //   } else {
    //     alert("Camera is off");
    //   }
    // };
    // btnScanQR.onclick = () => {
    //   navigator.mediaDevices
    //     .getUserMedia({ video: { facingMode: "environment" } })
    //     .then(function (stream) {
    //       scanning = true;
    //       qrResult.hidden = true;
    //       btnScanQR.hidden = true;
    //       canvasElement.hidden = false;
    //       video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
    //       video.srcObject = stream;
    //       video.play();
    //       tick();
    //       scan();
    //     });
    // };
    // function tick() {
    //   canvasElement.height = video.videoHeight;
    //   canvasElement.width = video.videoWidth;
    //   canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    //   scanning && requestAnimationFrame(tick);
    // }
    // function scan() {
    //   try {
    //     qrcode.decode();
    //   } catch (e) {
    //     setTimeout(scan, 300);
    //   }
    // }
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
      <div className="flex flex-row justify-between p-5">
        <button
          onClick={() => history.goBack()}
          className="flex flex-row shadow px-8 text-purple-400 px-2 py-2 rounded-lg space-x-2"
        >
          <Send className="" />
          <span> View results</span>
        </button>
      </div>
      <div className="grid p-10 justify-center items-center h-24">
        <p className="py-3" id="qrTitle">
          Scan Qr Code
        </p>
        <img className="h-56 ml-10" src={qr1} alt="scan" />
        <p className="py-2">Easy and safe way to verify authentic tickets</p>
        <div className="ml-10 py-2">
          <button
            type="button"
            onClick={() => toggle("create-scanner")}
            id="btn-scan-qr"
            className="flex flex-row bg-black p-2 text-white px-12 space-x-4"
          >
            <Camera size={30} color="white" />
            <p className="font-bold">Start Scan</p>
          </button>
        </div>
      </div>
      <TicketModel />
    </div>
  );
}
