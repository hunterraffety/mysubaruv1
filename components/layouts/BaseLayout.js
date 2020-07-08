import React from 'react'
import Header from '../shared/Header'
import styled from '@emotion/styled'

const ContentContainer = styled('div')`
  width: 100vw;
  height: 100vh;
  font-size: 1.6rem;
`

const BaseLayout = ({ children, ...props }) => {
  return (
    <ContentContainer>
      <Header />
      {children}
    </ContentContainer>
  )
}

export default BaseLayout
