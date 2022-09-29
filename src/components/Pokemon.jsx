import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoriteContext";
import "../index.css";
import heartEmpty from "../assets/heart-empty.png";
import heartFull from "../assets/heart-full.png";

const Pokemon = (props, { type }) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const redHeart = <img className="w-[30px]" src={heartFull} alt="" />;
  const blackHeart = <img className="w-[30px]" src={heartEmpty} alt="" />;
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <div className="flex rounded-[3px] shadow-4xl bg-[#838383]">
      <div className="pt-[0px] pr-[5px]">
        <img
          className="w-[100px]"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>
      <div className="flex flex-col justify-between pt-[10px] pr-[10px] pb-[10px] pl-[10px] flex-1">
        <div className="flex flex-row justify-between items-center">
          <h3 className="capitalize ">{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex ">
            {pokemon.types.map((type, idx) => {
              return (
                <div
                  className="mr-[10px] capitalize p-[3px] rounded-[10px] text-[18px] w-[50px] h-[50px]"
                  key={idx}
                >
                  <img
                    src={`/${type.type.name}_icon.png`}
                    alt={type.type.name}
                  />
                </div>
              );
            })}
          </div>
          <button onClick={clickHeart}>
            <div className="">{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
