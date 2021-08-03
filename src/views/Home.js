import React, { useState, useContext, useEffect } from "react";
import { Camera, Send, Database, CameraOff } from "react-feather";
import { Header } from "../components/Header";
import qr1 from "../assets/qr1.png";
import { useHistory } from "react-router-dom";
import { Modal, Card } from "@wigxel/react-components/lib/cards";
import {
  TicketModel1,
  TicketModel2,
  TicketModel3,
} from "../components/Messages";
import UserContext from "../context/User/userContext";
import AuthContext from "../context/Authentication/authContext";

export default function Home() {
  const { toggle } = Modal.useModal();
  const history = useHistory();
  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);

  // cons
  useEffect(() => {
    const user = authContext.user.user;
    const qrcode = window.qrcode;
    const video = document.createElement("video");
    const canvasElement = document.getElementById("qr-canvas");
    const canvas = canvasElement.getContext("2d");
    const qrResult = document.getElementById("qr-result");
    const outputData = document.getElementById("outputData");
    const btnScanQR = document.getElementById("btn-scan-qr");
    const btnStopCamera = document.getElementById("btn-stop-camera");
    const qrBackgroundImg = document.getElementById("qrImg");
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
        qrBackgroundImg.hidden = false;
        userContext
          .verifyQR(res, user.id, user.event_id)
          .then((res) => {
            console.log("processsing....", res.response.status);
            if (res.response.status == 401) {
              toggle("401");
            }
            if (res.response.status == 400) {
              toggle("400");
            }
            if (res.response.status == 200) {
              toggle("200");
            }
          })
          .catch((err) => {
            console.log("error");
            console.log(err);
          });
      }
    };

    btnStopCamera.onclick = () => {
      if (video.srcObject) {
        scanning = false;
        video.srcObject.getTracks().forEach((track) => {
          track.stop();
        });
        qrResult.hidden = false;
        canvasElement.hidden = true;
        btnScanQR.hidden = false;
        qrBackgroundImg.hidden = false;
      } else {
        alert("Camera is off");
      }
    };

    btnScanQR.onclick = () => {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then(function (stream) {
          scanning = true;
          qrResult.hidden = true;
          btnScanQR.hidden = true;
          qrBackgroundImg.hidden = true;
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
      <div className="flex flex-row justify-between p-5">
        <button
          onClick={() => history.goBack()}
          className="flex flex-row shadow px-8 text-purple-400 px-2 py-2 rounded-lg space-x-2"
        >
          <Send className="" />
          <span> View results</span>
        </button>
      </div>
      <div className="grid p-3 h-full justify-center items-center h-56">
        <p className="-mb-24 pl-20" id="qrTitle">
          Scan Qr Code
        </p>
        <div id="qr-result" hidden="">
          <b></b> <span className="text-white" id="outputData"></span>
        </div>
        <div className="grid -mt-16 p-10">
          <canvas className="ml-0" hidden="" id="qr-canvas"></canvas>
          <img
            className="h-56 ml-5"
            src={qr1}
            hidden=""
            id="qrImg"
            alt="scan"
          />
        </div>
        <div className="pl-12 -mt-24">
          <p className="py-2">Easy and safe way to verify authentic tickets</p>

          <div className="flex flex-row space-x-2">
            <button
              type="button"
              id="btn-scan-qr"
              className="flex flex-row bg-black mr-1 rounded-lg ml-0 p-2 text-white px-4 space-x-4"
            >
              <Camera size={20} color="white" />
              <p className="text-sm font-bold">Start Scan</p>
            </button>

            <button
              type="button"
              id="btn-stop-camera"
              className="flex flex-row bg-red-500 rounded-lg ml-0 p-2 text-white px-4 space-x-4"
            >
              <CameraOff size={20} color="white" />
              <p className="text-sm font-bold">Stop Scan</p>
            </button>
          </div>
        </div>
      </div>
      <TicketModel1 />
      <TicketModel2 />
      <TicketModel3 />
    </div>
  );
}
