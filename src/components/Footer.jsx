import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <div
      className='grid md:flex justify-center md:justify-between items-center w-full md:w-[80vw] lg:w-[70vw] gap-4 py-4 mx-auto'
    >
      <div
        className='flex justify-center items-center'
      >

        <lord-icon
          src="https://cdn.lordicon.com/srupsmbe.json"
          trigger="loop"
          delay="1000"
          stroke="bold"
          colors="primary:#30e849,secondary:#30e849"
          style={{ "width": "50px", "height": "50px" }}>
        </lord-icon>
        <p>Copyright @ {new Date().getFullYear()} - All Rights Reserved</p>
      </div>

      <div className='flex justify-around items-center md:gap-3 px-3'>
        <lord-icon
          src="https://cdn.lordicon.com/ktgglpbq.json"
          trigger="loop"
          delay="2000"
          stroke="bold"
          colors="primary:#30e849,secondary:#30e849"
          style={{ "width": "35px", "height": "35px" }}>
        </lord-icon>
        <lord-icon
          src="https://cdn.lordicon.com/ewswvzmw.json"
          trigger="loop"
          delay="2000"
          stroke="bold"
          colors="primary:#30e849,secondary:#30e849"
          style={{ "width": "35px", "height": "35px" }}>
        </lord-icon>
        <lord-icon
          src="https://cdn.lordicon.com/cbxaxfqs.json"
          trigger="loop"
          delay="2000"
          stroke="bold"
          colors="primary:#30e849,secondary:#30e849"
          style={{ "width": "35px", "height": "35px" }}>
        </lord-icon>

      </div>
    </div>
  )
}

export default Footer
