import Home from "./components/Home";
import Pokemones from "./components/Pokemones";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { getPokemons } from "./api";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/inicio" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
      </Routes>
    </div>
  );
}
