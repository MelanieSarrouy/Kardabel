/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// helpers imports
import { standardizeAndLowerCase } from '../../../helpers/standardizeAndLowerCase'
// styles imports
import {
  DivImagesContainer,
  DivProfileCard,
  SectionCard,
  ImgSVGIllustrationCard,
  ImgSVGTitle,
  LiCardstyle,
  UlCardStyle,
} from '../../../styles/components/page services/serviceH3Card'
import { LinkButtonServices } from '../../../styles/components/page agence/sectionH2IntroAgence'

// JSX // _________________________________________________________________

/**
 * ServiceH3Card component to display title's cards on 'services' page
 * @name ServiceH3Card
 * @param {object} props
 * @returns {?JSX}
 */

 const ServiceH3Card = (props) => {
  const titlesList = ['Kesako ?', 'Avantages', 'Prestations']
  const createLink = (str) => {
    return '#' + standardizeAndLowerCase(str)
  }
  return (
    <SectionCard id="card">
      <DivProfileCard color={props.color}>
        <ImgSVGTitle src={props.h3Illustration} alt="title" />
        <h3 className="sr-only">{props.h3Title}</h3>
        <UlCardStyle>
          {titlesList.map((element, index) => (
            <LiCardstyle key={index}>
              <LinkButtonServices btncolorhover={props.colorbtnhover} to={createLink(element)}>
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

// PROPTYPES // ___________________________________________________________

ServiceH3Card.propTypes = {
  color: PropTypes.string.isRequired,
  h3Illustration: PropTypes.string.isRequired,
  h3Title: PropTypes.string.isRequired,
  illustrationCard: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

// EXPORT // ______________________________________________________________

export default ServiceH3Card
