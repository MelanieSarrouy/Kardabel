import React from 'react'
import {
  DivWhyContent,
  DivWhyTextContent,
  PWhyText,
} from '../../../styles/components/4pagesService/whyContent'

const WhyContent = (props) => {
  return (
    <DivWhyContent circle={props.circle} side={props.side}>
      <DivWhyTextContent color={props.color}>
        {Array.isArray(props.content) ? (
          props.content.map((element, index) => <PWhyText key={index}>{element}</PWhyText>)
        ) : (
          <PWhyText>{props.content}</PWhyText>
        )}
      </DivWhyTextContent>
    </DivWhyContent>
  )
}

export default WhyContent
