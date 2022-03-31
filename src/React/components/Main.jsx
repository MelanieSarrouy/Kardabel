import React from 'react'
import Hero from './Hero'


const Main = (props) => {
  return (
    <main>
      <Hero />
      <div>{props.children}</div>
    </main>
  )
}

export default Main
