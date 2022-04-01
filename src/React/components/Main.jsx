import React from 'react'
import { MainStyle } from '../../styles/components/main'
import Hero from './Hero'


const Main = (props) => {
  return (
    <MainStyle>
      <Hero />
      <div>{props.children}</div>
    </MainStyle>
  )
}

export default Main
