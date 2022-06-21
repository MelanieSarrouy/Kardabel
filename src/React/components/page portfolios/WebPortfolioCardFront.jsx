/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import {
  DivFrontPortfolioCard,
  PTitleFront,
  ImgFrontCard,
} from '../../../styles/components/page portfolios/webPortfolioCardFront'

// JSX // _________________________________________________________________

/**
 * WebPortfolioCardFront component to display front cards web portfolio
 * @name ArticleServiceCard
 * @param {object} props
 * @returns {?JSX}
 */

const WebPortfolioCardFront = (props) => {
  return (
    <DivFrontPortfolioCard flipped={props.flipped}>
      <picture>
        <source srcSet={props.imagejpg} type="image/jpg" />
        <source srcSet={props.imagewebp} type="image/webp" />
        <ImgFrontCard src={props.imagewebp} alt={'image du site' + props.title} width={800} />
      </picture>

      <PTitleFront>{props.title}</PTitleFront>
    </DivFrontPortfolioCard>
  )
}

// PROPTYPES // ___________________________________________________________

WebPortfolioCardFront.propTypes = {
  flipped: PropTypes.bool.isRequired,
  imagejpg: PropTypes.string.isRequired,
  imagewebp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

// EXPORT // ______________________________________________________________

export default WebPortfolioCardFront
