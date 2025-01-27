import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Import Home from the pages folder
import About from "./pages/About";


const App = () => {
  return (
    <Router>
      <div className="App">


        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default route */}
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;