import React from 'react'
import styled from 'styled-components'


export const DivWhyContent = styled.div`
  display: flex;
  background: url(${props => props.circle}) no-repeat center left;
  background-size: contain;
  padding: 6rem;
`
export const DivWhyTextContent = styled.div`
  background-color: ${(props) => props.color};
  padding: 3rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
`
export const PWhyText = styled.p`
  font-size: 2.25rem;
  line-height: 3.5rem;
  text-align: center;
  font-weight: 400;
  padding: 1rem 0;
`

const WhyContent = (props) => {
  return (
    <DivWhyContent circle={props.circle}>
      <DivWhyTextContent color={props.color}  >
      {Array.isArray(props.content) ? (
        (props.content.map((element, index) =>(
          <PWhyText key={index}>{element}</PWhyText>
        )))
      ) : (
        <PWhyText>{props.content}</PWhyText>
      )}
      </DivWhyTextContent>
    </DivWhyContent>
  )
}

export default WhyContent
