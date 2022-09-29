import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemonData, getPokemons, searchPokemon } from "../api";
import favoriteContext, { FavoriteProvider } from "../contexts/favoriteContext";
import { Navbar } from "./Navbar";
import Pokedex from "./Pokedex";
import Searchbar from "./Searchbar";

const localStorageKey = "favorite_pokemon";

const Pokemones = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promise = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promise);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setNotFound(false);
    } catch (err) {}
  };

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div
        name="pokemones"
        className="flex bg-[#Ee832a] h-full w-full flex-col"
      >
        <Navbar />
        <Searchbar onSearch={onSearch} />
        {notFound ? (
          <div className="text-center p-[20px] text-xl">
            No se encontro el Pokemon buscado
          </div>
        ) : (
          <Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
        )}
        <div>
          <Link to="/inicio">
            <button className="flex items-center px-6 py-1 my-1 text-[white] rounded-lg border-4 border-[white] hover:bg-[#439ee2] hover:border-[#439ee2] hover:text-[white]">
              Volver
            </button>
          </Link>
        </div>
      </div>
    </FavoriteProvider>
  );
};

export default Pokemones;
