import React from 'react'
import Hero from './Hero'
import ScrollButton from './ScrollButton'


export const Main = (props) => {
  return (
    <main id="top-main">
      <Hero />
      <ScrollButton />
      <div>{props.children}</div>
    </main>
  )
}

export default Main
