import React, {useState, useContext, useEffect} from 'react';
import { Camera, CameraOff } from "react-feather";
import { Header } from "../components/Header";
import qr1 from "../assets/qr1.png";
import { Modal } from "@wigxel/react-components/lib/cards";
import {
    TicketModel1,
    TicketModel2,
    TicketModel3,
    TicketModel4,
  } from "../components/Messages";
  import UserContext from "../context/User/userContext";
  import AuthContext from "../context/Authentication/authContext";

const Scanner1 = () => {

    const [camera, setCamera] = useState();
    const { toggle } = Modal.useModal();
    const userContext = useContext(UserContext);
    const authContext = useContext(AuthContext);
    const user = authContext.user.user;
    const { Html5Qrcode } = window;

    // This method will trigger user permissions
    Html5Qrcode.getCameras().then(devices => {
        if (devices && devices.length) {
        var cameraId = devices[0].id;
        setCamera(cameraId);
        // .. use this to start scanning.
        }
    }).catch(err => {
        // handle err
        console.log(err);
    });

    let html5QrCode = new Html5Qrcode("reader");
    const qrBackgroundImg = document.getElementById("qrImg");
    const qrReader = document.getElementById("reader");
    const startCamera = async () => {
        qrBackgroundImg.hidden = true;
        html5QrCode.start(
          { facingMode: "environment" }, 
            {
                fps: 10,    // Optional frame per seconds for qr code scanning
                qrbox: 250  // Optional if you want bounded box UI
            },
            qrCodeMessage => {
                // do something when code is read
                // document.getElementById("result").innerHTML = '<span class="result">' + qrCodeMessage + "</span>";
                // console.log(`QR Code detected: ${qrCodeMessage}`);
                verify(qrCodeMessage, user.id, user.event_id);
            },
            errorMessage => {
            // parse error, ideally ignore it. For example:
            // console.log(`QR Code no longer in front of camera.`, errorMessage);
            })
            .catch(err => {
            // Start failed, handle it. For example,
            console.log(`Unable to start scanning, error: ${err}`);
            });
    }
            
    const stopCamera = async () => {
        html5QrCode.stop().then(ignore => {
            // QR Code scanning is stopped.
            qrBackgroundImg.hidden = false;
            qrReader.innerHTML = '';
        }).catch(err => {
            // Stop failed, handle it.
        });
    }
    

    const verify = async (ticket, user, event) => {
        userContext
          .verifyQR(ticket, user, event)
          .then((response) => {
            // console.log("processsing....", res.response);
            if (response.status) {
              toggle("Success");
            }
            if (response.response.status == 403) {
              toggle("Exist");
            }
            if (response.response.status == 400) {
              toggle("Invalid");
              setTimeout(function () {
                // window.location.reload(false);
              }, 4000);
            }
            if (response.response.status == 401) {
              toggle("Unauthorized");
              setTimeout(function () {
                // window.location.reload(false);
              }, 4000);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

    useEffect(() => {
        
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
        <div className="grid p-0 h-full justify-center items-center h-full">
        <div id="result"></div>
          <div className="flex grid justify-center items-center">
          <div id="reader"></div>
            <div className="grid justify-center items-center">
              <p className="mb-3" id="qrTitle">
                Scan Qr Code
              </p>
              <img
                className="h-100"
                src={qr1}
                hidden=""
                id="qrImg"
                alt="scan"
              />
            </div>
            <div className="text-center justify-self-center">
            <p className="py-2">Easy and safe way to verify authentic tickets</p>
  
            <div className="flex flex-row space-x-2">
              <button
                type="button"
                onClick={() => startCamera()}
                className="flex flex-row bg-black mr-1 rounded-lg ml-0 p-2 text-white px-4 space-x-4"
              >
                <Camera size={20} color="white" />
                <p className="text-sm font-bold">Start Scan</p>
              </button>
  
              <button
                type="button"
                onClick={() => stopCamera()}
                className="flex flex-row bg-red-500 rounded-lg ml-0 p-2 text-white px-4 space-x-4"
              >
                <CameraOff size={20} color="white" />
                <p className="text-sm font-bold">Stop Scan</p>
              </button>
            </div>
          </div>
          </div>
        </div>
        <TicketModel1 />
        <TicketModel2 />
        <TicketModel3 />
        <TicketModel4 />
      </div>
    )
}

export default Scanner1;