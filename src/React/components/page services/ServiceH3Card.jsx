import React from 'react'
import {
  DivImagesContainer,
  DivProfileCard,
  SectionCard,
  ImgSVGIllustrationCard,
  ImgSVGTitle,
  LiCardstyle,
  UlCardStyle,
} from '../../../styles/components/page services/serviceH3Card'
import { standardizeAndLowerCase } from '../../../helpers/standardizeAndLowerCase'
import { LinkButtonServices } from '../../../styles/components/page agence/sectionH2IntroAgence'

const titlesList = ['Kesako', 'Avantages', 'Prestations']

const createLink = (str) => {
  return '#' + standardizeAndLowerCase(str)
}

const ServiceH3Card = (props) => {

  return (
    <SectionCard id="card">
      <DivProfileCard color={props.color}>
        <ImgSVGTitle src={props.h3Illustration} alt="title" />
        <h3 className="sr-only">{props.h3Title}</h3>
        <UlCardStyle>
          {titlesList.map((element, index) => (
            <LiCardstyle key={index}>
              <LinkButtonServices
                btncolorhover={props.colorbtnhover}
                to={createLink(element)}
              >
                {element}
              </LinkButtonServices>
            </LiCardstyle>
          ))}
        </UlCardStyle>
        <DivImagesContainer>
          <ImgSVGIllustrationCard src={props.illustrationCard} alt="illustration identité" />
        </DivImagesContainer>
      </DivProfileCard>
      {props.chidren}
    </SectionCard>
  )
}

export default ServiceH3Card
