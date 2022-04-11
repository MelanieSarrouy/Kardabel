import React from 'react'
import ImgSVGLogo from '../../assets/logo/logo-simple-dore.svg'
import waveCard from '../../assets/shapes/waveCard.svg'
import styled from 'styled-components'

export const DivServiceBlock = styled.div`
  padding: 5rem 7% 5rem 7%;
`
export const DivProfileCard = styled.div`
  width: 100%;
  border-radius: 1.5rem;
  padding: 2rem 4rem 3rem 4rem;
  background: no-repeat url(${waveCard}) ${(props) => props.color};
  background-size: 70%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const ImgSVGTitle = styled.img`
  width: 80%;
  padding-bottom: 3rem;
`
export const DivImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
export const ImgSVGLogoDore = styled.img`
  max-width: 17.5rem;
  filter: drop-shadow(0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.5));
`
export const ImgSVGIllustrationCard = styled.img`
  max-width: 30rem;
`
const ServiceH3Card = (props) => {
  return (
    <DivServiceBlock id={props.id} >
      <DivProfileCard color={props.color}>
        <ImgSVGTitle src={props.h3Illustration} alt="title" />
        <h3 className="sr-only">{props.h3Title}</h3>
        <DivImagesContainer>
          <ImgSVGLogoDore src={ImgSVGLogo} alt="logo kardabel" />
          <ImgSVGIllustrationCard src={props.illustrationCard} alt="illustration identité" />
        </DivImagesContainer>
      </DivProfileCard>
      {props.chidren}
    </DivServiceBlock>
  )
}

export default ServiceH3Card
