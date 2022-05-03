import React from 'react'
import { Link } from 'react-router-dom'

function ProjectItem(props) {
  return (
    <>
     <li className='cards__item'>
       <Link className='cards__item__link ' to={props.path}>
         <figure className='cards__item__pic-wrap' data-category={props.label}>
         { props.boolean
         ?
              <img className='cards__item__img hover:scale-110' 
               src={props.src} 
               alt="" />
          :
          <div className='flex group'>
            {/* transition duration-300 ease-out  */}
            <h1 className='text-indigo-100 z-50 absolute right-0 left-0 top-0 bottom-0 z-50 flex justify-center items-center invisible group-hover:visible text-xl font-semibold hover:shadow-lg'>{props.commingSoon}</h1>
            <img className='cards__item__img group-hover:blur group-hover:scale-105' 
            src={props.src} 
            alt="" />
          </div>
          }
          </figure>
          <div className='py-6 px-4'>
            <h5 className='cards__item__text font-bold text-indigo-200'>{props.text}</h5>
          </div>
       </Link>
     </li>
    </>
  )
}

export default ProjectItem


// {props.boolean 
//   ? 'true' 
//   (<img className='cards__item__img hover:blur-sm' 
// src={props.src} 
// alt="" />)
//   : 
//   (<img className='cards__item__img' 
// src={props.src} 
// alt="" />)}