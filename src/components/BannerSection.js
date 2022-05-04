import React from 'react'
import './App.css'

const BannerSection = () => {
  return (
    <div className='' id='HomeSection' >
      <div className='flex flex-col justify-center items-center bg-fixed h-mobileBanner sm:h-banner bg-center bg-no-repeat bg-buildings Shadow-box' >
        <div className='flex flex-col justify-center items-center text-indigo-200 bg-clip-text'>
          <h1 className='text-4xl font-extrabold tracking-tight text-indigo-200 bg-clip-text sm:text-5xl lg:text-6xl Shadow-box'>Welcome </h1>
          <h3 className='text-2xl font-extrabold tracking-tight sm:text-2xl text-indigo-50 bg-clip-text'> to my</h3>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-3xl text-indigo-50 bg-clip-text'>Web Portfolio </h2>
        </div>    
      </div>
    </div>
     
  )
}

export default BannerSection