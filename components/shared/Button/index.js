import React from 'react'

const Button = ({ type, text }) => {
  return <button className={`${type}-button`}>{text}</button>
}

export default Button
