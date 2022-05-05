import React from 'react'
import { NewlineText } from '../../../helpers/newLineText'
import {
  DivWhyContent,
  DivWhyTextContent,
} from '../../../styles/components/4pagesService/whyContent'

const WhyContent = (props) => {
  return (
    <DivWhyContent circle={props.circle} side={props.side}>
      <DivWhyTextContent color={props.color}>{NewlineText(props.content)}
      </DivWhyTextContent>
    </DivWhyContent>
  )
}

export default WhyContent
