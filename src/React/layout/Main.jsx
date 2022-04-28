import React from 'react'
import styled from 'styled-components'
import { MainStyle } from '../../styles/layout/main'
import Hero from './Hero'
import ScrollButton from './ScrollButton'
import ScrollButtonBottom from './ScrollButtonBottom'


export const DivScrollButton = styled.div`
  display: flex;
  flex-direction: column;
`
export const Main = (props) => {
  return (
    <MainStyle id="top-main">
      <Hero />
      <DivScrollButton>
        <ScrollButton />
        <ScrollButtonBottom />
      </DivScrollButton>
      <ScrollButton />
      <ScrollButtonBottom />
      <div>{props.children}</div>
    </MainStyle>
  )
}

export default Main
