import React from 'react'

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

        <a href="https://www.facebook.com/pabitra.mohanty.169067?mibextid=ZbWKwL" target='_blank'>
        <lord-icon
          src="https://cdn.lordicon.com/ktgglpbq.json"
          trigger="loop"
          delay="2000"
          stroke="bold"
          colors="primary:#30e849,secondary:#30e849"
          style={{ "width": "35px", "height": "35px" }}>
        </lord-icon>
        </a>
        
        <a href="https://www.instagram.com/pabitra_m3022/" target='_blank'>
        <lord-icon
          src="https://cdn.lordicon.com/ewswvzmw.json"
          trigger="loop"
          delay="2000"
          stroke="bold"
          colors="primary:#30e849,secondary:#30e849"
          style={{ "width": "35px", "height": "35px" }}>
        </lord-icon>
        </a>
        
        <a href="https://x.com/Pabitra3022" target='_blank'>
        <lord-icon
          src="https://cdn.lordicon.com/cbxaxfqs.json"
          trigger="loop"
          delay="2000"
          stroke="bold"
          colors="primary:#30e849,secondary:#30e849"
          style={{ "width": "35px", "height": "35px" }}>
        </lord-icon>
        </a>

      </div>
    </div>
  )
}

export default Footer
