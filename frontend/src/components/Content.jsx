import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Post from "../pages/Post";
// import Profile from "../pages/Profile";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/profile/:id" element={<Profile />} /> */}
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}
