import React from 'react'

const Button = props => {
  const { variant, text, handleClick } = props
  return (
    <button className={`${variant}-button`} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
