import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingIn from "./components/signin/SingIn";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Sidebar from "./components/side-bar/sidebar";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Library from "./library/library";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Routes>
          <Route path="/signin" element={<SingIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/library" element={<Library />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
