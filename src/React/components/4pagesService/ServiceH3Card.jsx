import React from 'react'
import ImgSVGLogo from '../../../assets/logo/logo-simple-dore.svg'
import {
  DivImagesContainer,
  DivProfileCard,
  DivServiceBlock,
  ImgSVGIllustrationCard,
  ImgSVGLogoDore,
  ImgSVGTitle,
  LiCardstyle,
  UlCardStyle,
} from '../../../styles/components/4pagesService/serviceH3Card'
import arrow from '../../../assets/icons/fleche.svg'
import { HashLink } from 'react-router-hash-link'
import { standardizeAndLowerCase } from '../../../helpers/standardizeAndLowerCase'

const titlesList = ['Pourquoi ?', 'Avantages', 'Préstations']

const createLink = (str) => {
  return '#' + standardizeAndLowerCase(str)
}


const ServiceH3Card = (props) => {
  return (
    <DivServiceBlock id='service'>
      <DivProfileCard color={props.color}>
        <ImgSVGTitle src={props.h3Illustration} alt="title" />
        <h3 className="sr-only">{props.h3Title}</h3>
        <UlCardStyle>
        {titlesList.map((element, index) => (
          <LiCardstyle key={index}>
            <HashLink to={createLink(element)} >
            <img src={arrow} alt="icon" />
            {element}
            </HashLink>
          </LiCardstyle>

        ))}
        </UlCardStyle>
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
