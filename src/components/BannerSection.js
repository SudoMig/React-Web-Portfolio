import React from 'react'
import './App.css'

const BannerSection = () => {
  return (
    <div className='' id='HomeSection' >
      <div className='flex flex-col justify-center items-center bg-fixed h-mobileBanner sm:h-banner bg-center bg-no-repeat bg-city Shadow-box hue-rotate-30 brightness-125 contrast-100' > 
        <div className='flex flex-col justify-center items-center text-indigo-200 font-extrabold tracking-tight'>
          <h1 className='text-2xl sm:text-3xl text-indigo-300 bg-clip-text shadow-2xl brightness-100 contrast-100 blur-xxs Shadow-box'>Hi there, </h1>
          <h2 className='text-4xl text-indigo-100 bg-clip-text sm:text-5xl lg:text-6xl shadow-2xl brightness-100 contrast-100 blur-xs Shadow-box'>I'm Miguel  </h2>
        </div>    
      </div>
    </div>
     
  )
}

export default BannerSection