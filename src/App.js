import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./page/register";
import Login from "./page/login";
import Movies from "./page/movies";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
}
export default App;