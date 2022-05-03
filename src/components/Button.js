import React from 'react'

const btn = "py-2 px-5 rounded-sm cursor-pointer "

const STYLES = ['bg-white text-gray-900 border border-solid', 'bg-transparent text-white py-8 px-20 border border-solid transition-all duration-500 ease-in-out']
const SIZES = ['py-2 px-5 text-lg ', 'py-3 px-6 text-xl']


export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {  

    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

  return (
    <Link to='/' className=''>
      <button
      className={'btn ${checkButtonStyle} ${checkButtonSize}'}
      onClick={onClick}
      type={type}
      >
        {children}
      </button>
    </Link>
  )
}
