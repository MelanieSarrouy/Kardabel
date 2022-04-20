import React from 'react'
import styled from 'styled-components'
import fonts from '../../styles/bases/fonts'
import arrow from '../../assets/icons/fleche.svg'

export const DivH4Container = styled.div`
  padding: 7rem 7% 4rem 7%;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const ImgH4Arrow = styled.img`
  width: 3rem;
  margin-right: 1rem;
`
export const H4Style = styled.h4`
  font-size: 3rem;
  font-style: italic;
  font-family: ${fonts.titles};
  font-weight: 600;
`

const H4Title = (props) => {
  return (
    <DivH4Container id={props.id}>
      <ImgH4Arrow src={arrow} alt="icon" />
      <H4Style>{props.title}</H4Style>
    </DivH4Container>
  )
}

export default H4Title
