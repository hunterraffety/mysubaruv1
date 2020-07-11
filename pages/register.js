import React from 'react'

import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

import RegisterForm from '@/components/auth/RegisterForm'

const Register = () => {
  return (
    <div className="registration-container">
      <h1>register</h1>
      <RegisterForm />
    </div>
  )
}

export default Register
