import React from 'react'
import { FaRegCircle } from "react-icons/fa";

const Circle = ({next}) => {
  return (

    <>
         <div className="flex gap-2  items-center " onClick={next}>
            <FaRegCircle />
            <FaRegCircle />
            <FaRegCircle />
            <FaRegCircle />
          </div>
          </>
  )
}

export default Circle
