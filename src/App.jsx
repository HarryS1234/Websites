import React, { useEffect } from 'react';
import QRCode from 'qrcode';
import Home from './pages/Home';

const App = () => {
  useEffect(() => {
    const ipAddress = '192.168.2.255'; // Replace with your computer's IP address
    const url = `http://${ipAddress}:5174`;
    QRCode.toCanvas(document.getElementById('qrcode'), url, (error) => {
      if (error) console.error(error);
    });
  }, []);

  return (
    <div>
      <h1>Scan the QR Code to Open on Your Phone</h1>
      <canvas id="qrcode"></canvas>
      <Home/>
    </div>
  );
};

export default App;