import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import gifLoading from "../assets/gifPokeball.gif";

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center p-[10px]">
        <h1 className="text-4xl">Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div className="flex justify-center text-center">
          <img src={gifLoading} alt="" />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-[18px] ">
          {pokemons.map((pokemon, idx) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
