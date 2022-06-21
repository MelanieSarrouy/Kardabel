/* IMPORTS */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
// styles imports
import { ArticlePortfolioFlipCard } from '../../../styles/components/page portfolios/webPortfolioCard'
// components imports
import WebPortfolioCardBack from './WebPortfolioCardBack'
import WebPortfolioCardFront from './WebPortfolioCardFront'

// JSX // _________________________________________________________________

/**
 * WebPortfolioCard component to display web portfolio cards
 * @name WebPortfolioCard
 * @param {object} props
 * @returns {?JSX}
 */

const WebPortfolioCard = (props) => {
  const [flipped, setFlipped] = useState(false)
  return (
    <ArticlePortfolioFlipCard onClick={() => setFlipped(!flipped)}>
      {flipped ? (
        <WebPortfolioCardBack
          flipped={flipped}
          title={props.title}
          date={props.date}
          description={props.description}
          work={props.work}
          technos={props.technos}
          links={props.links}
        />
      ) : (
        <WebPortfolioCardFront
          flipped={flipped}
          imagejpg={props.imagejpg}
          imagewebp={props.imagewebp}
          title={props.title}
        />
      )}
    </ArticlePortfolioFlipCard>
  )
}

// PROPTYPES // ___________________________________________________________

WebPortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  work: PropTypes.string.isRequired,
  technos: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
}

// EXPORT // ______________________________________________________________

export default WebPortfolioCard
