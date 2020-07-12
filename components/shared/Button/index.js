import React from 'react'

const Button = props => {
  const { variant, text, handleSubmit } = props
  return (
    <button className={`${variant}-button`} onClick={handleSubmit}>
      {text}
    </button>
  )
}

export default Button
