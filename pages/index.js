import React from 'react'

import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

import Typed from 'react-typed'

import { Container } from 'reactstrap'
import BasePage from '@/components/layouts/BasePage'

const Index = () => {
  return (
    <BasePage type="home">
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
    </BasePage>
  )
}

export default Index
