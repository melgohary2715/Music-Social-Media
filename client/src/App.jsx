// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile"; // Assume you have a Profile component
// Import other components

function App() {
  return (
    <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
