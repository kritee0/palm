import React from 'react'
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Search = () => {
  return (
    <>
    <div className='border-b-black'>
        <p className='font- bold'>
            Search
        </p>
        <div>
        <FaSearch />
        <RxCross1 />
        </div>

    </div>
    </>
  )
}

export default Search
