import Home from "./components/Home";
import Pokemones from "./components/Pokemones";
import { Routes, Route } from "react-router-dom";
import React from "react";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
      </Routes>
    </div>
  );
}
