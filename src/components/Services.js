import React from 'react'
import './App.css'
// import {MdCleanHands } from 'react-icons/md'
import  {BsEmojiSunglassesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';



/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className='bg-gray-800 pt-12 pb-0 sm:pt-28 sm:pb-48'>
      <div className="relative bg-gray-900 py-20 ">
        <div className="h-56 full sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-fit p-4"
            data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
            src={require('../img/design1.jpg')}
            alt=""
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-16 ">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Clean Design</h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Client Comes First</p>
            <p className="mt-3 text-lg text-gray-300">
              Always striving for 100% client statisfaction. With your vison and my skills we'll create your ideal website. 
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link 
                to='contactForm'
                className='flex items-center justify-center px-4 py-3 border border-solid border-indigo-700 text-lg font-semibold rounded-md shadow-md text-indigo-50 bg-indigo-700 hover:text-white hover:bg-opacity-30 sm:px-8 cursor-pointer hvr-ripple-in'
                smooth={true} duration={1000}
                >
                Let's do it!
                  {/* <BsEmojiSunglassesFill className="mr-1 ml-3 h-5 w-5 text-yellow-500 rotate-center" aria-hidden="true" /> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



