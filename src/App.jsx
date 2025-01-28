import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Refrigeration from "./pages/Refrigeration";
import Installation from "./pages/Installation";
import Heating from "./pages/Heating";
import ServiceRequest from "./pages/ServiceRequest";


const App = () => {
  return (
    <Router>
      <div className="App">


        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default route */}
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/refrigeration" element={<Refrigeration/>} />
          <Route path="/maintenance" element={<Installation/>} />
          <Route path="/heating-ac" element={<Heating/>} />
          <Route path="/service-request" element={<ServiceRequest/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;