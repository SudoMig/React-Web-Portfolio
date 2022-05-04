import React, {useState, useEffect} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {Link } from 'react-scroll'
import Logo from '../svg/SimpleLogo.svg'
import './App.css'
import Hamburger from 'hamburger-react'

const Navbar = () => {

  const showMobileNav = "bg-gray-700 flex flex-col w-full h-full absolute top-28 text-xl transition-all duration-500 ease-in-out bg-opacity-95"
  const mainMenuNav = "invisible md:visible flex absolute right-48 gap-x-6"

  const navItems = "rounded-md text-indigo-200 font-extrabold hover:bg-indigo-500 md:hover:text-indigo-500 md:hover:bg-gray-800 cursor-pointer py-6 sm:py-0 sm:transition sm:duration-300 sm:ease-in-out"
  const navLinks = "grid place-items-center"

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const [clickLogo, setClickLogo ] = useState(true);
  const logoClicked = () => setClickLogo(!clickLogo);

  const [isOpen, setOpen] = useState(false)

  const enableScroll = () => {
    setOpen(false)
    setClick(false)
    document.body.style.overflow = "auto"
  }
  

  useEffect(() => {
    setClickLogo(true)
  }, [clickLogo])

  useEffect(() => {
    // console.log("CLICK ", click)
    click 
    ? document.body.style.overflow = "hidden"
    : document.body.style.overflow = "auto"
  }, [click])
  
  
  // const showButton = () => {
    
  //   if (window.innerWidth >= 768) {
  //     setClick(false);
  //   } else {
  //     setClick(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);
 

  return (
    <>
    <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto py-14' >
            <div className="flex items-center justify-between">
                <div className='flex items-center' >
                  <RouterLink to='/' smooth={true} duration={500} className='absolute left-8 sm:left-48 cursor-pointer' onClick={logoClicked} >                    
                    <img
                      className={clickLogo ? 'w-10 h-10 sm:w-12 sm:h-12 rotate-center' : 'w-10 h-10 sm:w-12 sm:h-12'}
                      src={Logo}
                      alt="Logo"
                    />
                  </RouterLink>
                    <div className='absolute right-8 text-3xl text-white md:hidden hover:text-indigo-500 cursor-pointer'onClick={handleClick}>
                      <Hamburger toggled={isOpen} toggle={setOpen} size={28}/> 
                    </div>
                    <ul className={click ? showMobileNav : mainMenuNav}>
                        <li className={navItems}>
                            <Link to='heroSection'  smooth={true} duration={1000} className={navLinks} onClick={enableScroll}>
                              About
                            </Link>
                        </li>
                        <li className='rounded-md text-indigo-200 font-extrabold md:hover:bg-gray-800 py-6 sm:py-0 cursor-no-drop'>
                            <Link to='/' className={navLinks}>
                              Blog
                            </Link>
                        </li>
                        <li className={navItems}>
                            <Link to='ProjectSection'  smooth={true} duration={1000} className={navLinks} onClick={enableScroll}>
                              Projects
                            </Link>
                        </li>
                        <li className={navItems}>
                            <Link to='contactForm' smooth={true} duration={1000} className={navLinks} onClick={enableScroll}>
                              Contact
                            </Link>
                        </li>      
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar