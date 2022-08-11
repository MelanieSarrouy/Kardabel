/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// assets imports
import commas from '../../../assets/icons/commas.svg'
// styles imports
import {
  ArticleCard,
  DivIconContainer,
  DivImgContainer,
  ImgSVGCard,
  ImgSvgIcon,
  PtextCards,
  DivH4Container,
  H4Style,
  DivTextContainer,
  ImgCommasStart,
  DivText,
  ImgCommasEnd,
} from '../../../styles/components/page agence/articleServiceCard'

// JSX // _________________________________________________________________

/**
 * ArticleServiceCard component to display Services Cards on 'agence' page
 * @name ArticleServiceCard
 * @param {object} props
 * @returns {?JSX}
 */

 const ArticleServiceCard = (props) => {
  return (
    <ArticleCard>
      <DivIconContainer>
        <ImgSvgIcon src={props.icon} alt={props.altIcon} width={120} />
      </DivIconContainer>
      <DivH4Container>
        <H4Style>{props.title}</H4Style>
        <DivTextContainer>
          <ImgCommasStart src={commas} alt="" width={40} />
          <DivText>
          {props.text.map((el, index) => (
            <PtextCards key={index}>{el}</PtextCards>
          ))}
          </DivText>

          <ImgCommasEnd src={commas} alt="" width={40} />
        </DivTextContainer>
      </DivH4Container>
      <DivImgContainer>
        <ImgSVGCard src={props.illustration} alt={props.altIllustration} width={400} />
      </DivImgContainer>
    </ArticleCard>
  )
}

// PROPTYPES // ___________________________________________________________

ArticleServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  altIcon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
  illustration: PropTypes.string.isRequired,
  altIllustration: PropTypes.string.isRequired,
}

// EXPORT // ______________________________________________________________

export default ArticleServiceCard
