import React from 'react'
import trioBleu from '../../assets/icons/trio-bleu.svg'
import { DivH3Title, H3TitleStyle, SvgH3Trio } from '../../styles/layout/h3TrioTitle'

const H3TrioTitle = (props) => {
  return (
    <DivH3Title>
      <SvgH3Trio src={trioBleu} alt="deco" />
      <H3TitleStyle>{props.title}</H3TitleStyle>
    </DivH3Title>
  )
}

export default H3TrioTitle
