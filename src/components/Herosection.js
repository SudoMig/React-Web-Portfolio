import React from 'react'
import {GrReactjs} from 'react-icons/gr'
import {BsBootstrapFill} from 'react-icons/bs'
import {SiCss3, SiHtml5, SiShopify, SiTailwindcss, SiPython, SiAntdesign} from 'react-icons/si'
import { Link as RouterLink} from 'react-router-dom';
import {Link } from 'react-scroll'
import './App.css'




const Herosection = () => {

const logoName = "flex h-12 text-gray-400 text-xl sm:text-3xl space-x-2"

  return (
    <div className='pt-0 sm:pt-28 bg-gray-900' id="heroSection">
          {/* Hero card */}
          <div className="relative pt:12 sm:pt-0 sm:mt-12">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-800" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={require('../img/orangeLaptop.jpg')}
                    alt="Laptop"
                  />
                  <div className="absolute inset-0 bg-violet-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">I'm a Web Devleoper</span>
                    <span className="block text-indigo-200">Freelancer</span>
                  </h1>
                  <p className='mt-4 max-w-lg mx-auto text-center text-xl text-indigo-100 sm:max-w-3xl'>Front-end Developer </p>
                  <p className="mt-1 max-w-lg mx-auto text-center text-xl text-indigo-100 sm:max-w-3xl">
                  Confident in bringing your envisioned website to reality utilising the most recent Web technologies. 
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <Link
                        to="ProjectSection"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-md shadow-md text-indigo-700 bg-indigo-50 hover:bg-transparent hover:text-white hover:border-indigo-700 ring-2 hover:ring-white sm:px-8 cursor-pointer hvr-fade '
                        smooth={true} duration={1000}"
                        smooth={true} duration={1000}
                      >
                        Projects
                      </Link>
                      <Link 
                      className='flex items-center justify-center px-4 py-3 border border-solid border-indigo-700 text-lg font-semibold rounded-md shadow-md text-indigo-100 bg-indigo-700 bg-opacity-60 hover:text-white hover:bg-opacity-100 hover:ring-2 hover:ring-indigo-700 sm:px-8 cursor-pointer hvr-fade ' 
                      to='contactForm'
                      smooth={true} duration={1000}
                      >
                      Get in Touch
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-gray-800">
            <div className="max-w-7xl mx-auto pt-14 pb-4 px-4 sm:px-6 lg:px-8">
              <p className="text-center pb-4 text-lg sm:text-xl text-indigo-400 font-semibold uppercase tracking-wide">
                My languages & FrameWorks
              </p>
              <div className="mt-6 grid grid-cols-2 gap-x-0 sm:gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <h2 className={logoName}  alt="Tuple"> <SiCss3/>CSS </h2>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <h2 className={logoName}  alt="Tuple"> <GrReactjs/> Reactjs </h2>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <h2 className={logoName}  alt="Tuple"> <SiShopify/> Liquid </h2>

                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <h2 className={logoName}  alt="Tuple"> <SiHtml5/> HTML </h2>

                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <h2 className={logoName}  alt="Tuple"> <SiPython/> Python </h2>

                </div>
              </div>
              <div className='mt-6 flex justify-center text-center gap-20 sm:grid-cols-2 '>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <h2 className={logoName}  alt="Tuple"> <SiTailwindcss/>Tailwind </h2>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <h2 className={logoName}  alt="Tuple"> <BsBootstrapFill/>Bootstrap </h2>
                </div>

              </div>
            </div>
          </div>
        </div>
  )
}

export default Herosection