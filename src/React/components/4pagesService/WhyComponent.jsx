import React from 'react'
import { DivH4Content } from '../../../styles/components/4pagesService/whyComponent'
import H4Title from '../../layout/H4Title'
import WhyContent from './WhyContent'


const WhyComponent = (props) => {
  return (
    <section>
      <H4Title id={props.id} title={props.title} />
      <DivH4Content>
        <WhyContent circle={props.circle} side={props.side} color={props.color} content={props.content} />
      </DivH4Content>
    </section>
  )
}

export default WhyComponent
