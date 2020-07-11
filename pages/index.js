import React from 'react'

import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

import Typed from 'react-typed'

import { Container } from 'reactstrap'
const Index = props => {
  const { appProps } = props
  return (
    <div className="mainContentContainer">
      <Typed
        strings={[
          'hi. this is mysubaru.org.',
          "it's a place to share your subaru.",
          "launching summer 2020. i'm working hard.",
        ]}
        backDelay={1200}
        typeSpeed={45}
        backSpeed={30}
        className="typed"
      />
    </div>
  )
}

export default Index
