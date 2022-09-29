import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Logo from "../assets/pokeball.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      name="home"
      className="flex justify-center items-center bg-[#dbdbdb] h-screen w-full flex-col"
    >
      <img
        className="w-[300px]"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt=""
      />
      <div className="">
        <img className="w-[350px]" src={Logo} alt="Logo" />
        <div className="mt-9 flex justify-center items-center">
          <Link to="/pokemones">
            <button className="flex items-center px-6 py-1 my-1 rounded-lg border-4 text-[red] border-[red] hover:bg-[#439ee2] hover:border-[#439ee2] hover:text-[white]">
              Iniciar
              <span>
                <HiArrowNarrowRight className="" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
