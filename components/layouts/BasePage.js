import React from 'react'

const BasePage = ({ children, type }) => {
  return <div className={`baseContainer ${type}Container`}>{children}</div>
}

export default BasePage
