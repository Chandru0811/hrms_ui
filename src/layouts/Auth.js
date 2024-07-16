import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/auth/Login";
import Signup from "../Pages/auth/Signup";
import { ToastContainer } from "react-toastify";

function Auth({ handleLogin }) {
  return (
    <BrowserRouter basename="/hrms">
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="*" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Auth;
