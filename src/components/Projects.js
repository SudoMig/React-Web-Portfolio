import React from 'react'
import './Projects.css'
import ProjectItem from './ProjectItem'

function Projects()  {
  return (
    <div className='sm:p-4 bg-gray-800 sm:bg-gray-900' id='ProjectSection'>
        <h1 className='text-center text-3xl font-semibold text-indigo-100 pt-10'>My Recent Projects</h1>
        <div className='cards__container'>
            <div className='cards__wrapper '>
                <ul className='cards__items '>
                     <ProjectItem
                    src={require('../img/Flow.jpg')}
                    text='Vegan Recipes'
                    label='Healthy Food'
                    boolean={false}
                    commingSoon='Coming Soon'
                    />
                    <ProjectItem  
                    src={require('../img/RoyalDripCheck0.jpeg')}
                    text='DripCheck'
                    label='E-Commerce'
                    path='https://royaldripcheck.ca/'
                    boolean={true}
                    />
                    <ProjectItem
                    src={require('../img/Nature.jpg')}
                    text='Canadian Trails Sights'
                    label='Travel Site'
                    boolean={false}
                    commingSoon='Coming Soon'
                    />
                    
                </ul>
                {/* <ul className='cards__items  '>
                
                     <ProjectItem
                    src={require('../../img/Flow.jpg')}
                    text='Coming Soon'
                    label='New Arrival'
                    path=''
                    />
                    <ProjectItem
                    src={require('../../img/Flow.jpg')}
                    text='Coming Soon'
                    label='New Arrival'
                    path=''
                    />
                     <ProjectItem
                    src={require('../../img/Flow.jpg')}
                    text='Coming Soon'
                    label='New Arrival'
                    path=''
                    />
                </ul> */}
            </div>
        </div>

    </div>
  )
}

export default Projects