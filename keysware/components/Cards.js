import React from 'react'
// import { LiaTshirtSolid } from 'react-icons/ai';
import { AiFillShop } from 'react-icons/ai';




const Cards = (props) => {
  return (

    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border border-gray-200 p-6 rounded-lg bg-purple-700 hover:bg-purple-600 text-white">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-700 mb-4 ">
          <AiFillShop />

        </div>
        <h2 className="text-lg text-white font-medium title-font mb-2">{props.h2}</h2>
        <div className="leading-relaxed text-base italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum ipsa </div>
      </div>
    </div>

  )
}

export default Cards
