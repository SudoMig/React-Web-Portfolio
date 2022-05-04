import React from 'react'
import './App.css'

const BannerSection = () => {
  return (
    <div className='' id='HomeSection' >
      <div className='flex flex-col justify-center items-center bg-fixed h-mobileBanner sm:h-banner bg-center bg-no-repeat bg-city Shadow-box hue-rotate-30 brightness-125 contrast-100' > 
        <div className='flex flex-col justify-center items-center text-indigo-200 bg-clip-text font-extrabold tracking-tight'>
          <h1 className='text-4xl text-indigo-300 sm:text-5xl lg:text-6xl shadow-2xl'>Welcome </h1>
          <h3 className='text-2xl sm:text-2xl text-indigo-50'> to my</h3>
          <h2 className='text-3xl sm:text-3xl text-indigo-50'>Web Portfolio </h2>
        </div>    
      </div>
    </div>
     
  )
}

export default BannerSection