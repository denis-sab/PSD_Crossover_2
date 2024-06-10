import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import minimø from "../assets/minimø.png"

function Navbar() {
  return (
    <div className='flex flex-row justify-between my-5 mx-5 fixed top-0 z-50  relative '>
      
      <div className='w-[30%]  '>
    
        <img src={minimø} alt="minimo" className='ml-20 ' />
     
     
      </div>

      <div className='w-[60%] flex flex-row justify-around  text-zinc-500 font-bold'>
            <div>LIFESTYLE</div>
            <div>PHOTODIARY</div>
            <div>MUSIC</div>
            <div>TRAVEL</div>
      </div>


    </div>
  )
}

export default Navbar