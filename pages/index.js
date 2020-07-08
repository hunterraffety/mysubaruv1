import React from 'react'

import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

import ButtonCss from '../components/ButtonCss'
import ButtonReact from '../components/ButtonReact'
import ButtonStyled from '../components/ButtonStyled'

import { Container } from 'reactstrap'
const Index = props => {
  console.log(props)
  const { appProps } = props
  return (
    // <div className={css(tw`grid justify-center items-center h-screen`)}>
    <Container>
      <p className={css(tw`flex justify-center bg-gray-300 p-6`)}>{appProps}</p>
    </Container>
    // </div>
  )
}

export default Index
