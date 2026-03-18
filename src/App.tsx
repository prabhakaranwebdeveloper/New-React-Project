import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Videoplayer from "./Components/Videoplayer/Videoplayer";

const App: React.FC = () => {
  
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
       <Videoplayer />
    </>
  );
};

export default App;