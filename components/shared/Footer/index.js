import React, { useState } from 'react'

import BasePage from '@/components/layouts/BasePage'

const SignIn = () => <h1>Sign In</h1>
const SignOut = () => <h1>Sign Out</h1>

const Footer = () => {
  return (
    <BasePage type="footer">
      <div className="miscLinks">
        <h1>.mysubaru. | 2020</h1>
      </div>
      <div className="siteLinks">
        <SignOut />
      </div>
    </BasePage>
  )
}

export default Footer
