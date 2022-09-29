import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoriteContext";

const { useEffect } = React;

export const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <nav className="flex items-center justify-center">
      <div className="">
        <img
          className="w-[300px]"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt=""
        />
      </div>
      <div className="">&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
};
