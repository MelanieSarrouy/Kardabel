import React from 'react'
import { DivH4Container, H4Style, ImgH4Arrow } from '../../styles/layout/h4Title'
import trio from '../../assets/icons/trio-bleu.svg'


const H4Title = (props) => {
  return (
    <DivH4Container id={props.id}>
      <ImgH4Arrow src={trio} alt="icon" />
      <H4Style>{props.title}</H4Style>
    </DivH4Container>
  )
}

export default H4Title
