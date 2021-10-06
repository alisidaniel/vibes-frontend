import React, {useState, useEffect} from 'react';
import Html5QrcodeScanner from 'html5-qrcode';

const Scanner1 = () => {
    useEffect(() => {
        function onScanSuccess(qrMessage) {
            // handle the scanned code as you like, for example:
            console.log(`QR matched = ${qrMessage}`);
          }
          
          function onScanFailure(error) {
            // handle scan failure, usually better to ignore and keep scanning.
            // for example:
            console.warn(`QR error = ${error}`);
          }
          
          let html5QrcodeScanner = new Html5QrcodeScanner(
              "reader", { fps: 10, qrbox: 250 }, /* verbose= */ false);
          html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  
    }, [])
    return (
        <div className="w-100 h-100">
            <div className="text-center">
                <h1>dsndjhsflfhasdlfhasdlfasldfhalsdhfalshdflahdflh</h1>
            </div>
            <div>
                <div id="reader" width="600px"></div>
            </div>
        </div>
    )
}

export default Scanner1;