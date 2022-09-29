import React from "react";
const { useState } = React;

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };
  return (
    <div className="flex flex-row justify-center items-center mt-10 ">
      <input
        className="p-[10px] rounded-[3px] shadow-3xl border-none focus:outline-none mr-[20px]"
        onChange={onChange}
        placeholder="Buscar pokemon..."
      />

      <button
        className="p-2 rounded-lg border-4 text-[white] border-[white] hover:bg-[#439ee2] hover:border-[#439ee2] hover:text-[white]"
        onClick={onClick}
      >
        Buscar
      </button>
    </div>
  );
};

export default Searchbar;
