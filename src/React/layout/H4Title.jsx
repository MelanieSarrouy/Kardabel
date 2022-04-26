import React from 'react'
import arrow from '../../assets/icons/fleche.svg'
import { DivH4Container, H4Style, ImgH4Arrow } from '../../styles/layout/h4Title'


const H4Title = (props) => {
  return (
    <DivH4Container id={props.id}>
      <ImgH4Arrow src={arrow} alt="icon" />
      <H4Style>{props.title}</H4Style>
    </DivH4Container>
  )
}

export default H4Title
