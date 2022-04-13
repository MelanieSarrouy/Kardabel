import React from 'react'
import { MainStyle } from '../../styles/layout/main'
import Hero from './Hero'
import ScrollButton from './ScrollButton'


export const Main = (props) => {
  return (
    <MainStyle id="top-main">
      <Hero />
      <ScrollButton />
      <div>{props.children}</div>
    </MainStyle>
  )
}

export default Main
