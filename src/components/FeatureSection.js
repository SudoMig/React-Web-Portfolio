import React from 'react'
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import {MdCleanHands} from 'react-icons/md'
import {BiHappyHeartEyes} from 'react-icons/bi'
import {BsStars} from 'react-icons/bs'



const features = [
  {
    name: 'Stellar Website',
    description:
      "Websites are you and your companies face on the internet. For this reason I hold substantial value refining my work. Yeilding stellar results for my clients is of utmost imporance. ",
    icon: BsStars,
  },
  {
    name: 'Client Satisfaction',
    description:
      "I genuinely care about my clients and their satisfaction. I consdier it a privilege to work alongside my clients, brining their envisoned website to reality.",
    icon: BiHappyHeartEyes,
  },
  {
    name: 'Clean Design',
    description:
      "I love creating clean, elegant and modern designs patterns. Building simple conent structure with touches of subtle animations.",
    icon: MdCleanHands,
  },
]

export default function Example() {
  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only "></h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className='flex space-x-3 pb-4'>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6 " aria-hidden="true" /> 
                </div>
                <h1 className="mt-5 text-lg leading-6 font-semibold text-white ">{feature.name}</h1>
              </dt>
              <dd className="mt-2 text-base text-white tracking-normal">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
