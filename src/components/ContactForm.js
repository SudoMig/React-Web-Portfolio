import './App.css'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { useState } from 'react'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/94655b00-cb2d-11ec-a557-034a17e2da28";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };


  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="bg-gray-900 sm:pt-12 sm:pb-24" id="contactForm">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-5 ">
        <div className="bg-indigo-700 py-12 px-4 mx-4 mx-4 sm:mx-0 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 rounded-xl">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Get in touch</h2>
            <div className='space-y-0.5'>
              <p className="flex mt-3 text-lg leading-6 text-indigo-50 cursor-text">
                Have a question?
              </p>
              <p className="text-lg leading-6 text-indigo-50">
                Need help building a website or want it built for you? Send me an email!
              </p>
            </div>
            <dl className="mt-6 text-base text-indigo-50">
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex text-white font-medium">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-white hvr-pulse cursor-pointer " aria-hidden="true" />
                  <span className="ml-3">Mu_@tuta.io</span>
                </dd>
              </div>
            </dl>
            <p className="flex mt-3 text-base text-indigo-50">
              View my templates?{' '}
              <a href="#" className="mx-1 font-medium text-indigo-400 underline hvr-wobble-bottom">
                Coming Soon
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:col-span-3 lg:py-12 lg:px-8 xl:pl-12 ">
          <div className="max-w-lg mx-auto lg:max-w-none ">
            <form action="https://public.herotofu.com/v1/94655b00-cb2d-11ec-a557-034a17e2da28" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 bg-indigo-100 placeholder-indigo-700 focus:outline-none focus:ring focus:ring-offset-indigo-700 focus:ring-indigo-700 border-gray-900 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 bg-indigo-100 placeholder-indigo-700 focus:outline-none focus:ring focus:ring-offset-indigo-700 focus:ring-indigo-700 border-gray-900 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 bg-indigo-100 placeholder-indigo-700 focus:outline-none focus:ring focus:ring-offset-indigo-700 focus:ring-indigo-700 border-gray-900 rounded-md"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center py-3 px-6 bg-indigo-700 border border-solid border-indigo-700 shadow-sm text-base font-semibold rounded-md text-white bg-indigo-700 hover:text-white hover: hover:border-indigo-700  hover:bg-opacity-30 hvr-ripple-in"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;




// import React, { useState } from "react";

// const FORM_ENDPOINT = ""; // TODO - fill on the later step

// const ContactForm = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const handleSubmit = () => {
//     setTimeout(() => {
//       setSubmitted(true);
//     }, 100);
//   };

//   if (submitted) {
//     return (
//       <>
//         <div className="text-2xl">Thank you!</div>
//         <div className="text-md">We'll be in touch soon.</div>
//       </>
//     );
//   }

//   return (
//     <form
//       action={FORM_ENDPOINT}
//       onSubmit={handleSubmit}
//       method="POST"
//       target="_blank"
//     >
//       <div className="mb-3 pt-0">
//         <input
//           type="text"
//           placeholder="Your name"
//           name="name"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-3 pt-0">
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-3 pt-0">
//         <textarea
//           placeholder="Your message"
//           name="message"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-3 pt-0">
//         <button
//           className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//           type="submit"
//         >
//           Send a message
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;