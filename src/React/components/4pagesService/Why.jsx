import React from 'react'
import styled from 'styled-components'
export const DivWhyContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`
export const ImgCircle = styled.img`
  width: 30rem;
`
export const DivWhyTextContent = styled.div`
  background-color: ${(props) => props.color};
  padding: 3rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 7%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
`
export const PWhyText = styled.p`
  font-size: 2.25rem;
  line-height: 3.5rem;
  text-align: center;
  font-weight: 400;
`
export const SpanWhyTextBold = styled.p`
  font-size: 2.25rem;
  line-height: 3.5rem;
  text-align: center;
  font-weight: 600;
`


const Why = (props) => {
  return (
    <DivWhyContent>
      <ImgCircle src={props.circle} alt="background cercle" />
      <DivWhyTextContent color={props.color}>
        <PWhyText>{props.content}</PWhyText>
      </DivWhyTextContent>
    </DivWhyContent>
  )
}

export default Why
