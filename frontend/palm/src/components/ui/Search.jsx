import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import SearchModal from "../../modal.jsx/SearchModal";
const Search = ({cross}) => {
   
  return (
    <>
      <SearchModal>
        <div className="  flex flex-col px-4 py-4   max-w-2xl w-full ">
          <div className=" flex  border-b-2 border-white  items-center justify-content justify-between  ">
            <p className="font-bold text-white">Search....</p>
            <div className="flex gap-8">
              <FaSearch color="white" />
              <RxCross1 color="white"  onClick={cross}/>
            </div>
          </div>
        </div>
      </SearchModal>
    </>
  );
};

export default Search;
