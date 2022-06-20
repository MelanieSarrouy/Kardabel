/* IMPORTS */

import React from 'react'
// data imports
import { datasPortfolioWeb } from '../../../datas/portfolios/portfolio-web/datas'
// styles imports
import {
  DivPortfolioCardsContainer,
  SectionPortfolio,
} from '../../../styles/components/page portfolios/webPortfolio'
// components imports
import WebPortfolioCard from './WebPortfolioCard'

// JSX // _________________________________________________________________

/**
 * WebPortfolio component to display the web portfolio
 * @name WebPortfolio
 * @returns {?JSX}
 */

const WebPortfolio = () => {
  const data = datasPortfolioWeb.reverse()
  return (
    <SectionPortfolio id="gallery">
      <DivPortfolioCardsContainer>
        {data.map((element, index) => (
          <WebPortfolioCard
            key={index}
            title={element.title}
            imagejpg={element.image.jpg}
            imagewebp={element.image.webp}
            description={element.description}
            date={element.date}
            work={element.work}
            technos={element.technos}
            links={element.links}
          />
        ))}
      </DivPortfolioCardsContainer>
    </SectionPortfolio>
  )
}

// EXPORT // ______________________________________________________________

export default WebPortfolio
