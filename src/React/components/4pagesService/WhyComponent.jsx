import React from 'react'
import styled from 'styled-components'
import H4Title from '../../layout/H4Title'
import WhyContent from './WhyContent'

export const DivH4Content = styled.div`
  padding: 3rem 7%;
`

const WhyComponent = (props) => {
  return (
    <section>
      <H4Title id={props.id} title={props.title} />
      <DivH4Content>
        <WhyContent circle={props.circle} color={props.color} content={props.content} />
      </DivH4Content>
    </section>
  )
}

export default WhyComponent
