import React from 'react'
import { useEffect, useState } from 'react'
import './backToTop.css'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const BackToTop = () => {
  
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
              setShowButton(true);
          } else {
              setShowButton(false);
          }
      });
  }, []);
    
  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };

  return (
    <>

        {showButton && (
        <button onClick={scrollToTop} className="back-to-top fixed bottom-8 right-4 sm:bottom-10 sm:right-16 text-3xl sm:text-4xl text-indigo-700 bg-indigo-50 hover:text-indigo-50 hover:bg-indigo-700 z-50">
           <BsFillArrowUpCircleFill/>
        </button>
      )}
    </>
  );
};

export default BackToTop

