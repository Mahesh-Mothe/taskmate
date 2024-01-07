import React from 'react'
import logo from '../assets/logo.png'
export default function Header() {
  return (
    <header>
        <div className='logo'>
            <img src={logo} alt='img1' />
            <span>TaskMate</span>
        </div>
        <div className='themeSelector'>
         <span className='light'></span>
         <span className='medium'></span>
         <span className='dark'></span>
         <span className='gradientOne'></span>
         <span className='gradientTwo'></span>
         <span className='gradientThree'></span>
        </div>
    </header>
  )
}
