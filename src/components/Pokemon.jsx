import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoriteContext";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };
  return (
    <div className="flex rounded-[3px] shadow-4xl">
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
                <div className="mr-[10px] capitalize" key={idx}>
                  {type.type.name}
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
