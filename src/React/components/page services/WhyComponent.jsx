import React from 'react'
import { SectionWhy, DivH4Content } from '../../../styles/components/4pagesService/whyComponent'
import H4Title from '../../layout/H4Title'
import WhyContent from './WhyContent'


const WhyComponent = (props) => {
  return (
    <SectionWhy bck={props.bck}>
      <H4Title id={props.id} title={props.title} />
      <DivH4Content>
        <WhyContent color={props.color} content={props.content} />
      </DivH4Content>
    </SectionWhy>
  )
}

export default WhyComponent
