import {GrLinkedin,GrGithub} from 'react-icons/gr'
import { Link } from 'react-scroll';


const navigation = {
    main: [
      { name: 'Home', href: 'HomeSection' },
      { name: 'About', href: 'heroSection' },
      { name: 'Blog', href: '#' },
      { name: 'Projects', href: 'ProjectSection' }
      
    ],
    social: [
      {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/miguel-louis-139949238/',
        icon: (props) => (
          <GrLinkedin {...props}/> 
        ),
      },
      {
        name: 'GitHub',
        href: 'https://github.com/SudoMig',
        icon: (props) => (
          <GrGithub {...props}/>
        ),
      },
      // {
      //   name: 'Dribbble',
      //   href: '#',
      //   icon: (props) => (
      //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      //       <path
      //         fillRule="evenodd"
      //         d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
      //         clipRule="evenodd"
      //       />
      //     </svg>
      //   ),
      // },
    ],
  }
  
const Footer = () => {
    return (
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
              {
              item.name === 'Blog'
              ? 
                <Link className='text-base font-semibold text-indigo-200 cursor-no-drop'
                to={item.href}> {item.name}
                </Link> 
              :  
              <Link 
              className='text-base font-semibold text-indigo-200 hover:text-indigo-500 cursor-pointer'
              to={item.href}
              smooth={true} duration={1000}
              > {item.name}
              </Link> 
              }
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-indigo-200 hover:text-indigo-500 " target="_blank" rel='noreferrer'>
                <span className="sr-only">{item.name}</span>
                <div className='flex space-x-1'>
                <item.icon className="h-6 w-8  " aria-hidden="true" />
                <span className='font-medium py-1'>{item.name}</span> 
                </div>
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-base font-semibold text-indigo-200">&copy; 2022 Miguel Louis. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  
export default Footer;


