import React from "react";
import Login from './components/Login';
import Navbar from './components/Navbar';
import ChatRoom from "./components/ChatRoom";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;