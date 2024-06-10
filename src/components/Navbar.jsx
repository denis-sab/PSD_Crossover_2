import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import minimø from "../assets/minimø.png"

function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center py-4 fixed w-full pr-20 bg-white'>
      
      <div className='flex flex-start'>
        {/* <img src={minimø} alt="minimo" className='ml-20 ' /> */}
        <h1 className='ml-20 font-inconsolata capitalize tracking-widest text-4xl mx-5'>MINIMØ</h1>
      </div>

      <div className='flex flex-row flex-end justify-around text-zinc-500 font-bold'>
            <div className='font-playfair mx-5 font-light'>LIFESTYLE</div>
            <div className='font-playfair mx-5 font-light'>PHOTODIARY</div>
            <div className='font-playfair mx-5 font-light'>MUSIC</div>
            <div className='font-playfair mx-5 font-light'>TRAVEL</div>
      </div>


    </div>
  )
}

export default Navbar