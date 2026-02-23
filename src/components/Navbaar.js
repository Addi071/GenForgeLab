import React from 'react'
import logo from '../assets/images/gfl22.png'

export const Navbaar = () => {
  return (

    <div className='z-50 fixed top-0 flex justify-center w-full text-white font-bold overflow-x-hidden'>

      <div className='border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl flex items-center justify-between pd mx-auto  nav-h nav'>

        <img src={logo} alt="logo" className='logo' />

        <svg
          className="menu-icon"
          width="30"
          height="28"
          viewBox="0 0 30 24">

          <line className='bottom' x1="0" y1="2" x2="30" y2="2" />
          <line className='middle' x1="0" y1="12" x2="30" y2="12" />
          <line className='top' x1="0" y1="22" x2="30" y2="22" />

        </svg>

      </div>
    </div>

  )
}
