import React from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <div className="flex flex-row items-center">
      <button onClick={onLeftClick}>
        <div>
          <GoChevronLeft className="text-[35px] text-[red] border-[red] border-2 rounded-lg hover:bg-[#439ee2] hover:border-[#439ee2] hover:text-[white] " />
        </div>
      </button>
      <div className="mx-4">
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        <div className="">
          <GoChevronRight className="text-[35px] text-[red] border-[red] border-2 rounded-lg hover:bg-[#439ee2] hover:border-[#439ee2] hover:text-[white] " />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
